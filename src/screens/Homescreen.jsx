import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import clock from '../../assets/clock.svg';
import star from '../../assets/star.png';
import {Data} from '../data';
import gender from '../../assets/avatar-2.png';
import githeri from '../../assets/githeri.jpg';
import pilau from '../../assets/african-pilau.jpg';
import cart from '../../assets/shopping-cart.png';
import lens from '../../assets/lens.png';
import { useContext, useEffect } from 'react';
import { StateContext } from '../context/State';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Homescreen = ({navigation}) => {
  const {currentUserId, setCurrentUserId}=useContext(StateContext)
  const {currentUser, setCurrentUser}=useContext(StateContext)

  useEffect(()=>{
    const getcurrentUser=async()=>{
      const docRef=await getDoc(doc(db,"users", currentUserId))
      setCurrentUser(docRef.data())
      console.log(currentUser)

    }
    getcurrentUser()
  },[])
  return (
    <ScrollView className="bg-white">
      <View className=" w-[90%] mx-auto">
        <View className="flex justify-between pt-7 flex-row m-3 items-center gap-10">
          <View className="flex flex-row">
            <Image source={gender} className="h-[50px] w-[50px] rounded-full" />
            <View className="ml-2">
              <Text className="font-bold text-lg">Hi Doe</Text>
              <Text>Lets grab your food</Text>
            </View>
          </View>
          <Image source={cart} className="h-[30px] w-[30px]" />
        </View>
        <View className="flex flex-row m-3 items-center  gap-3 rounded-full  bg-slate-200">
          <Image source={lens} className="w-[20px] h-[20px]" />
          <TextInput
            className="  mt-3 outline-none"
            placeholder="Search for food"
            type="text"
          />
        </View>
        <Text className="text-3xl text-black ">Food Categories</Text>
        <View className=" flex items-center flex-wrap flex-row  justify-between ">
          {Data.map(data => {
            return (
              <View className=" w-[30%] gap-3 ">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Category', {foods: data.foods})
                  }>
                  <View>
                    <Image
                      source={data.categoryImage}
                      className="h-[30px] w-[30px] p-10 bg-slate-300 rounded-full "
                      resizeMode="contain"
                    />
                    <Text className="text-lg ">{data.categoryName}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View>
          <Text className="text-3xl text-black font-bold">Food For You</Text>
          <View className="flex items-center justify-center flex-row gap-9">
            <View className="border-[1px] border-gray-300">
              <Image
                source={githeri}
                className=" h-[200px] w-[200px]"
                resizeMode="contain"
              />
              <Text className="text-xl text-black ">Githeri Curry</Text>
              <View className="flex flex-row items-center justify-between gap-6">
                <View className="flex flex-row items-center">
                  <Image
                    source={clock}
                    resizeMode="contain"
                    className="w-[20px] h-[20px]"
                  />
                  <Text className="text-lg">20 mins</Text>
                </View>
                <View className="flex flex-row items-center">
                  <Image source={star} className="w-[20px] h-[20px]" />

                  <Text className="text-lg">5.7</Text>
                </View>
              </View>
              <Text className="text-xl text-black ">Kshs 300</Text>
            </View>
            <View className="border-[1px] mr-12 border-gray-300 object-cover">
              <Image
                source={pilau}
                className=" h-[170px] w-[170px] "
                resizeMode="contain"
              />
              <Text className="text-lg  text-red-500 ">Beef Pilau</Text>

              <View className="flex flex-row items-center justify-between gap-6">
                <View className="flex flex-row items-center">
                  <Image source={clock} className="w-[20px] h-[20px]" />
                  <Text className="text-lg">20 mins</Text>
                </View>
                <View className="flex flex-row items-center">
                  <Image source={star} className="w-[20px] h-[20px]" />

                  <Text className="text-lg">5.7</Text>
                </View>
              </View>

              <Text className="text-xl text-black ">Kshs 300</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Homescreen;
