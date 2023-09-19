import {useState} from 'react';
import {View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import {app} from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Loginscreen = () => {
  const [email, setEmail] = useState('');
 

  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const handlelogin = async () => {
    signInWithEmailAndPassword(auth, email, password).then(userDetails => {
      const user = userDetails.user;
      navigation.navigate("Home")
    });
    
  };

  return (
    <View className="p-[10em]">
      <Text className="text-center font-bold text-black text-2xl">
    LOGIN INTO YOUR ACCOUNT
      </Text>
      
      <TextInput
        className="border-2 rounded-md mt-3 border-gray-300"
        style={{height: 40}}
        placeholder="Email Address"
        type="email"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
      />
      <TextInput
        className="border-2 border-gray-300  rounded-md mt-3 mb-3"
        style={{height: 40}}
        placeholder="Password"
        type="password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
      />

 <Button
        onPress={() => {
         handlelogin();
        }}
        title="LOGIN"
      />
    </View>
  );
};
export default Loginscreen;
