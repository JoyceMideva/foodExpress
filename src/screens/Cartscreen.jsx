import {useContext} from 'react';
import {Image, Text, View} from 'react-native'
import { StateContext } from '../context/State';
export default function Cartscreen() {
  const {cart, setCart} = useContext(StateContext);
  console.log(cart);
  return (
    <View className="">
      {cart.map(addFood => {
        return (
          <View>
            <Text >{addFood.foodName}</Text>
            <Image source={addFood.image} />
            <Text >{addFood.price} </Text>
          </View>
        );
      })}
    </View>
  );
}