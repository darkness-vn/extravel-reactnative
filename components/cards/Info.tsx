import { FC, ReactNode } from "react"
import type { TouchableOpacityProps, ImageSourcePropType } from "react-native"
import { View, Text, TouchableOpacity, Image } from "react-native"

interface Props extends TouchableOpacityProps {
    image: ReactNode | string
}

const Info: FC<Props> = ({ image, ...rest }) => {
    return <TouchableOpacity {...rest} className="relative">
        <Image source={image as ImageSourcePropType} className="w-[327px] h-[392px]" resizeMode="contain" />
        <View className="absolute bottom-4 text-semibold text-center left-6 text-white">
            <Text className="text-2xl font-bold text-white">Travel To Viet Nam</Text>
            <Text className="text-sm max-w-[290px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores sunt aut sequi, repudiandae cum ipsam natus</Text>
            <View className="flex flex-row mt-3 space-x-2 items-center">
                <View className="rounded-full w-6 h-6 bg-white"></View>
                <Text className="text-sm max-w-[290px] text-white font-semibold">Nguyễn Van Gốc</Text>
            </View>
        </View>

    </TouchableOpacity>
}

export default Info