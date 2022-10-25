import { SafeAreaView,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'


const HomeScreen = ({navigation}) => {

  const handleLogOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out')
      navigation.replace('Login')
    })
  }

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Text className=''>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleLogOut}
          style={styles.button}

        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>     
      </View>
    </SafeAreaView>
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
export default HomeScreen