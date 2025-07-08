import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
          borderTopWidth: 0,
          height: 75,
          paddingBottom: 25,
          paddingTop: 10,
          borderRadius: 25,
          marginHorizontal: 20,
          marginBottom: 20,
          position: 'absolute',
          shadowColor: colorScheme === 'dark' ? '#000' : '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#666666' : '#999999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            activeOpacity={1}
            style={props.style}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome 
              size={focused ? 30 : 28} 
              name="home" 
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome 
              size={focused ? 30 : 28} 
              name="search" 
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome 
              size={focused ? 30 : 28} 
              name="user" 
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}