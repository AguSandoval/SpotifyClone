import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/home";
import PlayerScreen from "./src/screens/player";
import ChannelScreen from "./src/screens/channel";
import TopBar from "./src/components/TopBar";
import { View } from "react-native";
import BottomBar from "./src/components/BottomBar";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Channel"
                    component={ChannelScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Player"
                    component={PlayerScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
