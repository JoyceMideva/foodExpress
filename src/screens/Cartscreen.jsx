import {useContext, useState} from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {StateContext} from '../context/State';
import bin from '../../assets/bin.png';
export default function Cartscreen({navigation}) {
  const [quantity, setQuantity] = useState(1);
  const {cart, setCart} = useContext(StateContext);

  // console.log(cart);
  const increament=(item)=>{
    setQuantity(quantity+1)
  }
  return (
    <ScrollView>
      <Text className="text-center m-5 text-3xl font-bold">red</Text>
      <View className=" mt-7 rounded-md  flex flex-column items-center justify-center gap-5">
        {cart.map(addFood => {
          return (
            <View className="flex flex-row items-center border-2  border-gray-500 rounded-md px-2 gap-2">
              <Image source={addFood.image} className="h-[150px] w-[150px]" />
              <View>
                <Text className="text-black ">{addFood.foodName}</Text>
                <Text className="py-2">Kshs{addFood.price} </Text>
                <View className="flex flex-row items-center pb-2 justify-center pt-2 rounded-full w-[35vw] bg-slate-300  ">
                  <Text className="bg-[#ff7356] rounded-full text-lg text-[#fff] px-4 py-2 text-center">
                    -
                  </Text>
                  <Text className="font-bold text-2xl text-start text-black px-2">
                    {quantity}
                  </Text>
                  <TouchableOpacity onPress={()=>{increament(addFood.foodName)}}>
                    <Text className="bg-[#ff7356] rounded-full text-lg text-[#fff] px-4 py-2 text-center">
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image source={bin} className="h-[30px] w-[30px] mt-[-3em]" />
            </View>
          );
        })}
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="font-bold text-2xl text-start text-black">
          Total Amount
        </Text>
        <Text className="font-bold text-xl text-start text-black">
          Ksh 4100
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text className="bg-[#ff7356]  text-center text-lg text-[#fff] mt-5 rounded-full py-2 px-4">
          {' '}
          CHECKOUT
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
