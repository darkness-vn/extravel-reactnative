import React from "react";
import { Text } from "react-native";

interface Props {
    children: React.ReactNode
}

const P: React.FC<Props> = ({ children }) => {
    return <Text className="text-red-500">
        { children }
    </Text>
} 

export default P