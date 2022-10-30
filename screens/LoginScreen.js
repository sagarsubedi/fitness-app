import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // listen to firebase auth changes
  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in, send to home screen
        navigation.navigate('Home')
      } else {
        // user is logged out
        navigation.navigate('Login')
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Signed up with: ', user.email)
        navigation.replace('Home')
      })
      .catch((error) => alert("Something went wrong. Please try again."));
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with: ', user.email)
        navigation.replace('Home')
      })
      .catch((error) => alert('Incorrect email or password'));
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='height'
    >
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email'
          style={styles.input}
          //value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput placeholder='Password'
          style={styles.input}
          secureTextEntry
          //value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}

        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}

        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>        
      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    width: '80%',
  },
  
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  button: {
    backgroundColor: '#4DBA8D',
    width: '100%',
    padding:15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonOutline: {
    backgroundColor: 'white',
    margin: 5,
    borderColor: '#4DBA8D',
    borderWidth: 2,
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  buttonOutlineText: {
    color: '#4DBA8D',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default LoginScreen
