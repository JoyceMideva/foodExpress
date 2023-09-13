import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    id:1,
    title: 'Choose A Tasty Dish',
    description:
      'The most important part of great taste comes from selecting good ingredients that are carefully prepared by a skilled chef. ',
  },
  {
    id:2,
    title: 'Fast Delivery',
    description:
      'Enjoy the best food deliveries services as we bring meals to your door .',
  },
  {
    id:3,
    title: 'Easy Payment',
    description:
      'Which gives your customers a fast, convenient checkout without any signature or pins required. It also eliminates receipt requirements and no ...',
  },
];

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  if (showHomePage === false) {
    return (
      <AppIntroSlider data={slides} renderItem={({item})=>{
        return(
          <View className="bg-green-400 h-[100vh]">
            <Text className="text-orange-500 text-center text-2xl font-bold">{item.title}</Text>
            <Text className="text-center text-xl text-white">{item.description}</Text>
          </View>
        )
      }}
      activeDotStyle={{backgroundColor:"orange"}}
      onDone={()=>{
        setShowHomePage(true)
      }}
      showSkipButton
      onSkip={()=>{
        setShowHomePage(true)
      }}
      />
    )
    
  }
  return (
    <View>
      <Text className="bg-black text-center font-bold text-lg text-teal-700">
        foodExpress
      </Text>
    </View>
  );
};
export default App;
