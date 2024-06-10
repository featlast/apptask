import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ListTask from '../screens/ListTask';
import NewTask from '../screens/NewTask';

const Stack = createNativeStackNavigator();

const screenOptions = {headerShown: false};

export function StackAppNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ListsTask" component={ListTask} />
      <Stack.Screen name="NewTaks" component={NewTask} />
    </Stack.Navigator>
  );
}
