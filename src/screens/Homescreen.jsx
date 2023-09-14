import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Data} from '../data';

const Homescreen = () => {
  console.log(Data);
  return (
    <View>
      {Data.map(data => {
        return (
          <TouchableOpacity>
            <View className=" flex items-center flex-row justify-between">
              <Text className="text-2xl text-[#000]">{data.categoryName} </Text>
              <Image
                source={data.categoryImage}
                className="h-[150px] w-[100]"
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Homescreen;
