import { TouchableOpacity, Text }  from "react-native"
import type { TouchableOpacityProps } from "react-native"
import { FC } from "react"
import { signOut } from "firebase/auth"
import { firebaseAuth } from "../configs/firebase"
import { useDispatch } from "react-redux"

import * as userAction from "../redux/slices/user.slice"
import * as authAction from "../redux/slices/auth.slice"

interface Props extends TouchableOpacityProps {
    callback: () => void
}

const LogOut: FC<Props> = ({ callback, ...rest }) => {

    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            let action = await signOut(firebaseAuth)
            dispatch(userAction.logout())
            dispatch(authAction.logout())
            callback()
        } catch (error) {
            console.log(error)
        }
    }

    return <TouchableOpacity onPress={handleLogout} {...rest}>
        <Text>Log out</Text>
    </TouchableOpacity>
}

export default LogOut