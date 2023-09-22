import {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {app} from '../firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import logo from '../../assets/food-express-logo.png';
import google from '../../assets/google.png';
import { StateContext } from '../context/State';

const Loginscreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {currentUserId, setCurrentUserId}=useContext(StateContext)

  const auth = getAuth(app);

  const handlelogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(userDetails => {
      const user = userDetails.user;
      if (user){
        setCurrentUserId(user.uid)
        // console.log(currentUserId)
      }
      navigation.navigate('Home');
    });
  };

  return (
    <ScrollView>
      <View className="p-[10em]">
        <Text className="text-center font-bold text-black text-2xl">
          LOGIN INTO YOUR ACCOUNT
        </Text>
        <Image source={logo} className="w-[250px] h-[150px]" />

        <TextInput
          className="bg-slate-300 rounded-full mt-3 py-4 px-6 "
         
          placeholder="Email Address"
          type="email"
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue={email}
        />
        <TextInput
          className=" py-4 px-6 bg-slate-300  rounded-full mt-3 mb-3"
         
          placeholder="Password"
          type="password"
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue={password}
        />

        <TouchableOpacity
          onPress={() => {
            handlelogin();
          }}>
          <Text className="bg-[#ff7356]  text-2xl mt-5 mb-3 rounded-full text-center text-white font-bold py-2 px-4">
            Login
          </Text>
        </TouchableOpacity>
        <View className=" flex items-center my-[em] mb-3">
          <View className="flex-grow h-2px "></View>
          <Text className="flex-shrink font-bold">OR</Text>
          <View className="flex-grow h-px "></View>
        </View>
        <View className="rounded-full bg-[#fff] flex flex-row items-center justify-center mb-3 gap-1">
          <Image source={google} className="w-[40px] h-[40px]" />
          <Text className=" text-2xl mt-5  text-center text-black  py-4 px-2">
            Signup with google
          </Text>
        </View>
        <Text className="text-center mb-3">Do Not Have An Account?Signup</Text>
      </View>
    </ScrollView>
  );
};
export default Loginscreen;
