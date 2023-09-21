import {useContext} from 'react';
import {Button, Image, Text, TouchableOpacity, View,ScrollView} from 'react-native';
import {StateContext} from '../context/State';
import star from "../../assets/star.png"
import clock from "../../assets/clock.svg"

const Singlefoodscreen = ({route,navigation}) => {
  const {cart, setCart} = useContext(StateContext);
  const {singlefood} = route.params;
  function addToCart(foods) {
    setCart([...cart,foods])
  }
  console.log(cart);
  return (
    <ScrollView>
    <View>
      <View className="flex items-center  bg-rose-500"></View>
      <Image
        source={singlefood.image}
        className="w-[200px] h-[200px] mx-auto "
      />
      <Text className="font-bold text-4xl text-center text-black">
        {singlefood.foodName}
      </Text>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center ">
          <Image source={clock} className="h-[30px] w-[30px]"/>
          <Text>20 mins</Text>
        </View>
        <View className="flex flex-row items-center ">
          <Image source={star} className="h-[30px] w-[30px]"/>
          <Text>5.7</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between gap-8 shadow-2xl">
        <Text className="font-bold text-2xl text-start text-[#ff7356]">
          {singlefood.price}
        </Text>
        <View className="flex flex-row items-center justify-center gap-2 border-2 rounded-full  border-gray-400">
          <Text className="bg-gray-400 rounded-full px-4 py-2">-</Text>
          <Text className="font-bold text-2xl text-start text-black">0</Text>
          <Text className="bg-[#ff7356] rounded-full px-4 py-2 text-center">+</Text>
        </View>
      </View>

      <View>
        <Text className="font-bold text-2xl text-start text-black">
          About Food
        </Text>
        <Text>{singlefood.description}</Text>
      </View>
      <TouchableOpacity
       
      onPress={()=>{addToCart(singlefood)}}
        ><Text  className="font-bold text-2xl t mt-5 text-center text-white  bg-[#ff7356] rounded-full py-2 px-4 ">Add To Order</Text></TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
       <Text className="bg-[#ff7356] border-2  text-2xl mt-5 rounded-full text-center text-white font-bold py-2 px-4"> NavigateToCart</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};
export default Singlefoodscreen;
