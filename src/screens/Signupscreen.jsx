import {useState} from 'react';
import {View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import {app,db} from '../firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {collection, addDoc, doc, setDoc} from 'firebase/firestore';

const Signupscreen = () => {
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
Navigation.navigate("Login")
    });
    
  };

  return (
    <View className="p-[10em]">
      <Text className="text-center font-bold text-black text-2xl">
        CREATE AN ACCOUNT
      </Text>

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

    <Button
        onPress={() => {
          handleSignUp();
        }}
        title="Signup"
      /> 
    </View>
  );
};
export default Signupscreen;
