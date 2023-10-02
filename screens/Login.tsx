import { Text, View, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { P, Input } from "../components/ui"
import { firebaseAuth, firebaseStore } from "../configs/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { login } from "../redux/slices/user.slice"
import { useDispatch } from "react-redux"
import { Logo } from "../assets";
import { Apple, Facebook, Google } from "../components/icons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../types/stack"
import { User } from "../types/user.types";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function Login({ navigation }: Props) {

    const [email, $email] = useState<string>('')
    const [password, $password] = useState<string>('')
    const dispatch = useDispatch()

    const handleSignin = async () => {
        try {
            let { user } = await signInWithEmailAndPassword(firebaseAuth, email, password)
            let snap = await getDoc(doc(firebaseStore, 'users', user.uid))
            if (snap.exists()) {
                console.log(snap.data())
                dispatch(login(snap.data() as User))
            }

            navigation.navigate("Home")
        } catch (err) {
            console.log(err)
        }
    }

    return <View className="flex-1 justify-center items-center">
        <View className="mb-8 flex justify-center items-center">
            <Image source={Logo} className="w-[6.5rem] h-[6.5rem]" />
            <Text className="mt-5 text-2xl font-bold">Welcome to Extravel</Text>
            <Text>Please choose your login option below</Text>
        </View>
        <View className="w-full px-6">
            <Input type="text" placeholder="Email" text={email} setText={$email} />
            <Input type="password" placeholder="Password" text={password} setText={$password} />
            <TouchableOpacity onPress={handleSignin} className="mt-2 bg-sky-600 rounded-xl flex justify-center items-center py-5">
                <Text className="text-lg text-white font-semibold">Login</Text>
            </TouchableOpacity>
        </View>
        <View className="w-full px-6">
            <View className="my-4 flex space-x-6 flex-row justify-center">
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text className="text-sm text-sky-600">Register</Text>
                </TouchableOpacity>
                <Text className="text-sm">Or login with</Text>
            </View>
            <View className="flex flex-row space-x-2 justify-between">
                <TouchableOpacity className="w-[30%] border border-gray-300 rounded-lg flex space-x-1 flex-row justify-center py-3">
                    <Facebook />
                    <Text>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-[30%] border border-gray-300 rounded-lg flex space-x-1 flex-row justify-center py-3">
                    <Google />
                    <Text>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-[30%] border border-gray-300 rounded-lg flex space-x-1 flex-row justify-center py-3">
                    <Apple />
                    <Text>Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}