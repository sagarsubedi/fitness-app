import { StyleSheet, Text, View, Button,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'


const ProfileScreen = ({ navigation }) => {
  
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out')
      navigation.replace('Login')
      })
      .catch((error) => alert(error.message))
    
  }

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match')
      // reset the state and clear the input fields
      setNewPassword('')
      setConfirmPassword('')
      return
    }
    auth.currentUser.updatePassword(newPassword)
      .then(() => {
        alert('Password successfully updated')
      })
      .catch((error) => alert('Something went wrong. Please try again.'))
   }
  
  return (
    <View className='h-full flex justify-between items-center'>

      {/* update password */}
      <View className='mt-4 w-full'>
        <Text className='ml-2 text-secondary font-bold' style={{fontSize:16}}>Change Password</Text>
        
        <View className='border-b-4 border-primary mt-2' />
        
        <View className='mt-4 flex justify-center items-center'>
          <KeyboardAvoidingView style={styles.inputContainer}>
            <TextInput
              value={newPassword}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
              placeholder='New Password'
              keyboardType='text'
              secureTextEntry
              style={styles.input}
            />

            <TextInput
              value={confirmPassword}
              onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
              placeholder='Confirm Password'
              keyboardType='text'
              secureTextEntry
              style={styles.input}
            />
          </KeyboardAvoidingView>
          <View className='mt-4'>
            <TouchableOpacity
              onPress={handleUpdatePassword}
              style={styles.button}

            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View className='border-b-4 border-primary mt-2' />
      
      </View>





      {/* <View className='mt-2'>
        <Text>Change Email</Text>
      </View> */}

      <View className='mb-2'>
        <TouchableOpacity
          onPress={handleLogOut}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Log Out</Text>
        </TouchableOpacity>
      </View> 
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
  },
  
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  button: {
    backgroundColor: '#4DBA8D',
    width: '100%',
    padding:15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  
  buttonOutline: {
    backgroundColor: 'white',
    margin: 5,
    borderColor: '#4DBA8D',
    borderWidth: 2,
  },

  buttonOutlineText: {
    color: '#4DBA8D',
    fontWeight: '700',
    fontSize: 16,
  },
})