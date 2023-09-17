import {useState} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signupscreen = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  auth().createUserWithEmailAndPassword('mideva061@gmail.com', 'mi@1955de');

  const createUser = (email, password) => {
    try {
      auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    // {createUser={createUser}}
    <View className="p-[10em]">
      <TextInput
        className="border-2 rounded-md mt-3 border-gray-300"
        style={{height: 40}}
        placeholder="Email Address"
        type="email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
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
          console.log("Signedup");
        }}
        title="Signup"
      />
      <Button
        onPress={() => {
          console.log("loggedin")
        }}
        title="Login"
      />
    </View>
  );
};
export default Signupscreen;
