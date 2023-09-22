 import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native"
import { Data } from "../data"
 function Menuscreen({navigation}){
    const allFoods=Data.reduce((acc,category)=>{
        return(
           acc.concat(category.foods)
        )
    },[])
    return(
<ScrollView>
      {/* <View className="flex flex-row items-center justify-between">
        <Image source={arrow} className="h-[30px] w-[30px]" />
        <Text className="text-center font-bold text-black text-3xl">red</Text>
        <Image source={cart} className="h-[30px] w-[30px]" />
      </View> */}
      <View className="flex mx-auto w-[90%]  items-center  flex-row flex-wrap  justify-between p-7">
        {allFoods.map(data => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Singlefood', {singlefood: data})
              }
              className="border-2 border-gray-300 w-[fit-content] items-center rounded-md mb-7">
              <View className=" w-[100%] h-[] gap-1">
                <Image source={data.image} className="h-[17vh] w-[30vw]" />
                <Text className="text-center  text-black">{data.foodName}</Text>
                <Text className="text-center  text-black ">
                  Ksh {data.price}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>    )
}
export default Menuscreen