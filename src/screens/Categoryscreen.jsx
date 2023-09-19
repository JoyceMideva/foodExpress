import {Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
const Categoryscreen = ({route,navigation}) => {
  const {foods} = route.params;
//   console.log(foods);
  return (
    <View className="flex flex-wrap flex-row gap-4">

      <ScrollView>
    <View >
      {foods.map(data => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Singlefood",{singlefood:data})}>
              <Text>{data.CategoryName}</Text>
          <View className="flex items-center">
            <Text>{data.foodName}</Text>
            <Image source={data.image} className="w-[300px] h-[300px]"/>
            <Text>{data.price}</Text>
          </View>
    </TouchableOpacity >
        );
      })}
    </View>
    </ScrollView>
    </View >

  );
};
export default Categoryscreen;
