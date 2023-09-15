import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Data} from '../data';

const Homescreen = ({navigation}) => {
  console.log(Data);
  return (
    <View>
      {Data.map(data => {
        return (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
              <View className=" flex items-center flex-row justify-between">
                <Text className="text-2xl text-[#000]">
                  {data.categoryName}{' '}
                </Text>
                <Image
                  source={data.categoryImage}
                  className="h-[150px] w-[100]"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default Homescreen;
