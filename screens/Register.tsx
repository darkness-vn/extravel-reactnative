import { View, Text, Image, ActivityIndicator, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { doc, getDoc, setDoc } from "firebase/firestore"
import { firebaseAuth, firebaseStore } from "../configs/firebase"
import { useLayoutEffect, useState } from "react"
import { useDispatch } from "react-redux"
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../types/stack"
import { createUserWithEmailAndPassword } from "firebase/auth"

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>

export default function Register({ navigation }: Props) {

    const [email, $email] = useState<string>('')
    const [password, $password] = useState<string>('')
    const [name, $name] = useState<string>('')
    const [age, $age] = useState<number>(0)

    const handleSignup = async () => {
        try {
            console.log(email, password, age, name)
            if (!email || !password || !name || !age) {
                throw new Error("Invalid values")
            } 
            // Valid values first
            let { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password)

            const res = {
                _id: user.uid,
                fullName: name,
                age,
                providerData: user.providerData[0]
            }

            await setDoc(doc(firebaseStore, 'users', user.uid), res)

            navigation.navigate("Login")
        } catch (err) {
            console.log(err)
        }
    }

    return <View className="flex-1 p-5">
        <View className="">
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </View>

        <View className="my-3">
            <Text className="text-2xl font-bold">Create account</Text>
            <Text>Get the best out of derleng by creating an account</Text>
        </View>

        <View className="space-y-3">
            <TextInput onChangeText={(txt:string) => $name(txt)} className="border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Full name" />

            <TextInput onChangeText={(txt:string) => $age(Number(txt))} keyboardType="numeric" className="border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Age" />

            <TextInput onChangeText={(txt:string) => $email(txt)} className="border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Email" />

            <TextInput onChangeText={(txt:string) => $password(txt)} className="border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Password" />

            <TouchableOpacity onPress={handleSignup} className="mt-2 bg-sky-600 rounded-xl flex justify-center items-center py-5">
                <Text className="text-lg text-white font-semibold">Register</Text>
            </TouchableOpacity>
        </View>
    </View>
}