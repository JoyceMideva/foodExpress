import {useContext} from 'react';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {StateContext} from '../context/State';
import star from '../../assets/star.png';
import clock from '../../assets/clock.svg';

const Singlefoodscreen = ({route, navigation}) => {
  const {cart, setCart} = useContext(StateContext);
  const {singlefood} = route.params;
  function addToCart(foods) {
    setCart([...cart, foods]);
  }
  console.log(cart);
  return (
    <ScrollView>
      <View>
        <Image
          source={singlefood.image}
          className="w-[200px] h-[200px] mx-auto "
        />
        <Text className="font-bold text-4xl text-center text-black">
          {singlefood.foodName}
        </Text>
        <View className="flex flex-row  justify-between bottom-2 border-b-2 border-b-slate-400 pb-2 items-center">
          <View className="flex flex-row items-center ">
            <Image source={clock} className="h-[30px] w-[30px]" />
            <Text>20 mins</Text>
          </View>
          <View className="flex flex-row items-center ">
            <Image source={star} className="h-[30px] w-[30px]" />
            <Text>5.7</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between gap-8 shadow-2xl mt-[0.5]">
          <Text className="font-bold text-2xl text-start text-[#ff7356]">
            Ksh {singlefood.price}
          </Text>
          <View className="flex flex-row items-center pb-2 justify-center pt-2 rounded-full w-[35vw] bg-white   ">
            <Text className="bg-slate-300 rounded-full px-4 py-2">-</Text>
            <Text className="font-bold text-2xl text-start text-black px-2">
              0
            </Text>
            <Text className="bg-[#ff7356] rounded-full px-4 py-2 text-center">
              +
            </Text>
          </View>
        </View>
        <View>
          <Text className="font-bold text-2xl text-start text-black">
            About Food
          </Text>
          <Text>{singlefood.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            addToCart(singlefood);
          }}>
          <Text className="font-bold text-2xl t mt-5 text-center text-white  bg-[#ff7356] rounded-full py-2 px-4 ">
            Add To Order
          </Text>
        </TouchableOpacity>
        
      
      </View>
    </ScrollView>
  );
};
export default Singlefoodscreen;
