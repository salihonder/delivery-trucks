import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onTap = () => {
    console.log('Button touched!');
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <View style={Styles.container}>
        <Image style={Styles.image} source={require('../../assets/logo.png')} />

        <View style={Styles.inputView}>
          <TextInput
            style={Styles.TextInput}
            placeholder="Username or Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={Styles.inputView}>
          <TextInput
            style={Styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={Styles.loginBtn}
          onPress={onTap}
          activeOpacity={0.6}>
          <Text>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.ForgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Routes')}>
            <Text style={Styles.SignUP}>Don not have an account? SignUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Style
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginTop: 600,
    marginBottom: 30,
  },
  inputView: {
    //backgroundColor: 'white',
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginBottom: 40,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: 275,
    flex: 1,
    padding: 25,
    marginLeft: 20,
    borderColor: '#4cd038',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 30,
  },

  forgot_button: {},

  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop: 80,
    marginBottom: 60,
    width: '35%',
    borderRadius: 25,
    height: 50,
    backgroundColor: '#4cd038',
  },

  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  ForgetPassword: {
    height: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 220,
    padding: 2,
    paddingBottom: 12,
    backgroundColor: 'white',
    fontSize: 16,
  },

  SignUP: {
    height: 30,
    marginBottom: 30,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 6,
    paddingBottom: 10,
    fontSize: 18,
  },
});

export default LoginScreen;
