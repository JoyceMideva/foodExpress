import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signupscreen from './src/screens/Signupscreen';
import Homescreen from './src/screens/Homescreen';
import Categoryscreen from './src/screens/Categoryscreen';
import Singlefoodscreen from './src/screens/Singlefoodscreen';
import Loginscreen from './src/screens/Loginscreen';
import Cartscreen from './src/screens/Cartscreen';
import State from './src/context/State';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menuscreen from './src/screens/Menuscreen';
import Profilescreen from './src/screens/Profilescreen';
// import {HomeOutlined} from '@ant-design/icons';

// import { Data } from './src/data';
const slides = [
  {
    id: 1,
    title: 'Choose A Tasty Dish',
    description:
      'The most important part of great taste comes from selecting good ingredients that are carefully prepared by a skilled chef. ',
    image: require('./assets/onboardingscreen1.jpg'),
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description:
      'Enjoy the best food deliveries services as we bring meals to your door .',
    image: require('./assets/onboardingscreen3.jpg'),
  },
  {
    id: 3,
    title: 'Easy Payment',
    description:
      'Which gives your customers a fast, convenient checkout without any signature or pins required. It also eliminates receipt requirements and no ...',
    image: require('./assets/onboardingscreen3.jpg'),
  },
];

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const Stack = createNativeStackNavigator();

  const showLabel = label => {
    return (
      <Text className="bg-[#ff7356] px-6 py-2  text-white rounded-full">
        {label}
      </Text>
    );
  };

  if (showHomePage === false) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View className="flex items-center p-6">
              <Image
                className="h-[350px]"
                resizeMode="contain"
                source={item.image}
              />
              <Text className="pt-6 text-black text-center text-3xl font-bold">
                {item.title}
              </Text>
              <Text className="text-center text-lg pt-4">
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{backgroundColor: '#ff7356'}}
        onDone={() => {
          setShowHomePage(true);
        }}
        showSkipButton
        onSkip={() => {
          setShowHomePage(true);
        }}
        renderNextButton={() => showLabel('Next')}
        renderSkipButton={() => showLabel('Skip')}
        renderDoneButton={() => showLabel('Done')}
      />
    );
  }

  const Tab = createBottomTabNavigator();

  function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Cart" component={Cartscreen} />

        <Stack.Screen name="Category" component={Categoryscreen} />
        <Stack.Screen name="Singlefood" component={Singlefoodscreen} />
      </Stack.Navigator>
    );
  }
  function TabNavigator() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Homescreen"
          component={StackNavigator}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen name="Cartscreen" component={StackNavigator} />
        <Tab.Screen
          name="Profile"
          component={Profilescreen}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        <Tab.Screen name="Menu" component={Menuscreen} />
      </Tab.Navigator>
    );
  }

  return (
    <State>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </State>
  );
};
export default App;
