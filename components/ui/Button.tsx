import type { TouchableOpacityProps } from "react-native"
import { TouchableOpacity, Text } from "react-native"
import { FC } from "react"

interface Props extends TouchableOpacityProps {

}

const Button: FC<Props> = ({ children, ...rest }) => {
    return <TouchableOpacity {...rest} className="rounded-xl bg-sky-500 flex items-center justify-center">
        <Text className="text-2xl font-semibold text-white">{children}</Text>
    </TouchableOpacity>
}

export default Button