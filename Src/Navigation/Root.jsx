import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import { userContext } from '../Context/Context';
import Appointment from '../Screens/Appointment';
const Stack = createNativeStackNavigator();
export default function Root() {
    const { user, isValiduser } = userContext()
    return (
        <Stack.Navigator>
            {!isValiduser ? <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} /> :
                <Stack.Screen name="Appointment" component={Appointment} options={{
                    headerShown: false
                }} />
            }

        </Stack.Navigator>
    );
}