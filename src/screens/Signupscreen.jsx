import {useState} from 'react';
import {View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import {app,db} from '../firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {collection, addDoc, doc, setDoc} from 'firebase/firestore';
import logo from "../../assets/food-express-logo.png"
const Signupscreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password).then(userDetails => {
      const user = userDetails.user;
      setDoc(doc(db, "users", user.uid), {
          firstname,
          lastname,
          email,
          password,
        });
navigation.navigate("Login")
    });
    
  };

  return (
    <View className="p-[10em]">
      <Text className="text-center font-bold text-black text-2xl">
        CREATE AN ACCOUNT
      </Text>
<Image source={logo} className="w-[250px] h-[150px]"/>
      <TextInput
        className="border-2 rounded-md mt-3 border-gray-300"
        style={{height: 40}}
        placeholder="First name"
        type="text"
        onChangeText={newFirstname => setFirstname(newFirstname)}
        defaultValue={firstname}
      />

      <TextInput
        className="border-2 rounded-md mt-3 border-gray-300"
        style={{height: 40}}
        placeholder="Last name"
        type="text"
        onChangeText={newLastname => setLastname(newLastname)}
        defaultValue={lastname}
      />

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

    <TouchableOpacity
        onPress={() => {
          handleSignUp();
        }}
      ><Text className="bg-[#ff7356] border-2  text-2xl mt-5 rounded-full text-center text-white font-bold py-2 px-4">CREATE ACCOUNT</Text></TouchableOpacity>
    </View>
  );
};
export default Signupscreen;
