import { FC, ReactNode } from "react"
import type { TouchableOpacityProps, ImageSourcePropType } from "react-native"
import { Text, TouchableOpacity, Image } from "react-native"

interface Props extends TouchableOpacityProps {
    image: ReactNode | string
}

const Article: FC<Props> = ({ image, ...rest }) => {
    return <TouchableOpacity {...rest} className="relative">
        <Image source={image as ImageSourcePropType} className="w-20 h-[76px]" resizeMode="contain"/>
        <Text className="absolute bottom-1 text-semibold text-center left-3 text-white">Name</Text>
    </TouchableOpacity>
}

export default Article