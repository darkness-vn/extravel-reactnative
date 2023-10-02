import { View, Text, Image, ActivityIndicator } from "react-native"
import { doc, getDoc } from "firebase/firestore"
import { firebaseAuth, firebaseStore } from "../configs/firebase"
import { useLayoutEffect } from "react"
import { useDispatch } from "react-redux"
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../types/stack"

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>

export default function Landing({ navigation }: Props) {

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        userAuthChecker()
    }, [])

    const userAuthChecker = async () => {
        try {
            firebaseAuth.onAuthStateChanged(async (credential) => {
                if (credential?.uid) {
                    try {
                        let snap = await getDoc(doc(firebaseStore, 'users', credential?.uid))

                        if (snap.exists()) {
                            console.log(27, snap.data())
                            // dispatch(SET_USER(snap.data()))
                        }

                        setTimeout(() => {
                            navigation.replace("Home")
                        }, 2000)

                    } catch (err) {
                        console.log(err)
                    }
                } else {
                    navigation.replace("Login")
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    return <View className="flex-1 items-center justify-center space-y-20">
        <ActivityIndicator size={"large"} color={"#43c651"} />
    </View>
}