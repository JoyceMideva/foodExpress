import {useContext} from 'react';
import {Image, ScrollView, Text, View,TouchableOpacity} from 'react-native'
import { StateContext } from '../context/State';
export default function Cartscreen({navigation}) {
  const {cart, setCart} = useContext(StateContext);
  console.log(cart);
  return (
    <ScrollView>
    <View className="border-2 rounded-md border-gray-500 flex flex-row items-center justify-center gap-5">
      {cart.map(addFood => {
        return (
          <View>
            <Image source={addFood.image} />
            <View>

            <Text >{addFood.price} </Text>
            <Text className="h-[100px] w-[100px]" >{addFood.foodName}</Text>
            <View className="flex flex-row items-center justify-center gap-8 rounded-full border-2  border-gray-400">

          <Text className="bg-[#ff7356] rounded-full px-4 py-2">-</Text>
          <Text className="font-bold text-2xl text-start text-black">0</Text>
          <Text className="bg-[#ff7356] rounded-full px-4 py-2 text-center">+</Text>
        </View>
            </View>
          </View>
        );
      })}
    </View>
    <View className="flex flex-row items-center">
      <Text>Total Amount</Text>
      <Text>Ksh 4100</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
       <Text className="bg-[#ff7356] border-2 mt-5 rounded-md py-2 px-4"> CHECKOUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}