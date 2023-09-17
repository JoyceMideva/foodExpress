import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Data} from '../data';
import gender from '../../assets/gender.png';
import githeri from '../../assets/githeri.jpg';
import pilau from '../../assets/pilau.jpg';

const Homescreen = ({navigation}) => {
  // console.log(Data);
  return (
    <ScrollView>
      <View>
        <View className="flex justify-start flex-row items-center gap-10">
          <View className="flex justify-between flex-row items-center gap-10">
            <Image
              source={gender}
              className="h-[50px] w-[50px] bg-[#ff7356] rounded-full"
            />
            <View>
              <Text className="font-bold text-lg">Hi Doe</Text>
              <Text>Lets grab your food</Text>
            </View>
          </View>
          <Text>cart</Text>
        </View>
        <TextInput
          className="border-2 rounded-md mt-3 border-gray-300"
          style={{height: 40}}
          placeholder="Search for food"
          type="text"
        />
        <Text className="text-3xl text-[#ff7356] text-center">
          Food Categories
        </Text>
        {Data.map(data => {
          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Category', {foods: data.foods})
                }>
                <View className=" flex items-center  justify-between ">
                  <Image
                    source={data.categoryImage}
                    className="h-[50px] w-[50px] p-4 bg-slate-300 rounded-full"
                    resizeMode="contain"
                  />
                  <Text className="text-lg ">{data.categoryName}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
        <View>
          <Text className="text-3xl text-black font-bold">Food For You</Text>
          <View className="flex items-center justify-center gap-9">
            <View className="border-2">
              <Image
                source={githeri}
                className=" h-[200px] w-[200px]"
                resizeMode="contain"
              />
              <Text className="text-2xl text-black ">Githeri Curry</Text>
              <Text className="text-lg">20 mins</Text>
              <Text className="text-lg">5.7</Text>
              <Text className="text-xl text-black ">Kshs 300</Text>
            </View>
            <View className="border-2 ">
              <Image
                source={pilau}
                className=" h-[200px] w-[200px]"
                resizeMode="contain"
              />
              <Text className="text-2xl text-black ">Beef Pilau</Text>
              <Text className="text-lg">20 mins</Text>
              <Text className="text-lg">5.7</Text>
              <Text className="text-xl text-black ">Kshs 300</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Homescreen;
