import {Button, Image, Text, View} from 'react-native';
const Singlefoodscreen = ({route}) => {
  const {singlefood} = route.params;
  console.log(singlefood);
  return (
    <View>
    <View className="flex items-center h-[80vh]  bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/mokimo.jpg')]"></View>
      <Image
        source={singlefood.image}
        className="w-[400px] h-[400px] mt-[-2em] "
      />
      <Text className="font-bold text-4xl text-center text-black">{singlefood.foodName}</Text>
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text>20 mins</Text>
        </View>
        <View>

        <Text>5.7</Text>
        </View>
      </View>
<View className="flex flex-row items-center justify-between gap-8 shadow-2xl">
      <Text className="font-bold text-2xl text-start text-[#ff7356]">{singlefood.price}</Text>
<View className="flex flex-row items-center justify-between gap-8">
    <Text className="bg-gray-400 rounded-full px-[2em]" >-</Text>
    <Text className="font-bold text-2xl text-start text-black">0</Text>
    <Text className="bg-[#ff7356] rounded-full text-center">+</Text>


</View>
</View>
      
      <View>
<Text className="font-bold text-2xl text-start text-black">About Food</Text>
      <Text>{singlefood.description}</Text>
      </View>
      <Button className="font-bold text-2xl text-start text-black" title='Add To Order'/>

    </View>
  );
};
export default Singlefoodscreen;
