import { StatusBar } from 'expo-status-bar'
import { Home, Login, Landing, Register, Mapbox } from './screens'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import store from './redux/store'
import { RootStackParamList } from './types/stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
	return <NavigationContainer>
		<Provider store={store}>
			<Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: "#fff" }}>
				<Stack.Screen name="Landing" component={Landing} initialParams={{}}/>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Mapbox" component={Mapbox} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
			</Stack.Navigator>
		</Provider>
	</NavigationContainer>
}