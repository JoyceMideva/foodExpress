import {Image, Text, View} from "react-native"
const Singlefoodscreen=({route})=>{
    const {singlefood} = route.params;
  console.log(singlefood);
    return(
        <View className="flex items-center">
            <Image source={singlefood.image} className="w-[400px] h-[400px] "/>
        <Text>{singlefood.foodName}</Text>
        <Text>{singlefood.description}</Text>

        <Text>{singlefood.price}</Text>
        </View>
    )
}
export default Singlefoodscreen