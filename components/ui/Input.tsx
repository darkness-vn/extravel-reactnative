import React, { FC } from "react"
import { TextInput, TouchableOpacity, View, TextInputProps } from "react-native"
import { Entypo, MaterialIcons } from "@expo/vector-icons"
import { useLayoutEffect, useState } from "react"

interface Props extends TextInputProps {
    type: "text" | "password"
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

const Input: FC<Props> = ({type, text, setText, ...rest}) => {

    const [showPassword, setShowPassword] = useState(true)
    const [icon, $icon] = useState<any>(null)

    const onChangeText = (txt: string) => {
        setText(txt)
    }

    useLayoutEffect(() => {
        switch(rest.placeholder) {
            case "Full name":
                return $icon("person")
            case "Email":
                return $icon("email")
            case "Password":
                return $icon("lock")
        }
    }, [])

    return <View className={`border rounded-2xl px-4 py-6 flex-row items-center
    justify-between space-x-4 my-2 border-gray-200`}>
        <MaterialIcons name={icon} size={24} color={"#6c6d83"} />
        <TextInput value={text}
            onChangeText={onChangeText}
            className="flex-1 text-base text-primaryText font-semibold -mt-1" 
            placeholder={rest.placeholder}
            autoCapitalize="none"
            />
    
        {type === "password" && (
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                <Entypo name={`${showPassword ? 'eye':'eye-with-line'}`} size={20} color={"#6c6d83"} />
            </TouchableOpacity>
        )}
    
    </View>
}

export default Input