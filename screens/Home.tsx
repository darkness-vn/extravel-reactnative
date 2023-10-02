import { View, Dimensions, Image, Text, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { avatar, ArticleCard1, InfoCard1 } from "../assets"
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Article from "../components/cards/Article"
import Info from "../components/cards/Info"
import LogOut from "../components/LogOut"
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../types/stack"

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({ navigation }: Props) {

    const screenWidth = Math.round(Dimensions.get("window").width)
    const screenHeight = Math.round(Dimensions.get("window").height)

    return <View className="flex-1 bg-white w-screen h-screen">
        {/* header */}
        <View className="mt-[6px] px-5 py-2 flex flex-row items-center justify-between space-x-4">
            <View className="flex flex-row items-center space-x-4">
                <View className="relative w-10 h-10">
                    <Image source={avatar} resizeMode="contain" className="w-10 h-10 rounded-full" />
                    <View className="right-0 bottom-0 border-white border-2 absolute rounded-full bg-[#FECA2F] w-4 h-4"></View>
                </View>
                <View>
                    <Text>Welcome back!</Text>
                    <Text className="text-lg font-semibold leading-5">Tung Hwang</Text>
                </View>
            </View>
            <LogOut callback={() => navigation.navigate("Login")} />
        </View>

        {/* body */}
        <View className="mt-4">
            <View className="px-5">
                <TouchableOpacity onPress={()=>navigation.navigate("Mapbox")}>
                    <Text className="">New Articles</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{
                paddingHorizontal: 12, paddingTop: 10
            }} horizontal showsHorizontalScrollIndicator={false}>

                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />
                <Article image={ArticleCard1} />

            </ScrollView>

            <View className="mt-4 px-4 flex flex-row items-center justify-between space-x-3 w-full">
                <View className="h-12 p-3 bg-[#FAE5D2] flex flex-row rounded-xl items-center space-x-2 w-[85%]">
                    <Feather name="search" size={24} color="#EDA47E" />
                    <TextInput placeholder="Search country or list" className="text-[#EDA47E]" />
                </View>
                <TouchableOpacity className="bg-[#FAE5D2] h-12 p-3 rounded-xl">
                    <MaterialIcons name="filter-tilt-shift" size={24} color="#EDA47E" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{
                paddingHorizontal: 16, paddingTop: 20, gap: 12
            }} horizontal showsHorizontalScrollIndicator={false}>
                <Info image={InfoCard1} />
                <Info image={InfoCard1} />
                <Info image={InfoCard1} />
            </ScrollView>
        </View>
    </View>
}