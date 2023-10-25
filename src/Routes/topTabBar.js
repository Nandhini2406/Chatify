import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//Screens
import ChatsScreen from '../Screens/TabBarScreens/ChatsScreen/ChatsScreen';
import StatusScreen from '../Screens/TabBarScreens/StatusScreen/StatusScreen';
import CallsScreen from '../Screens/TabBarScreens/CallsScreen/CallsScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={() => ({
        tabBarIndicatorStyle: {
          backgroundColor: '#7956D8',
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#7956D8',
      })}>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}

export default TopTabBar;
