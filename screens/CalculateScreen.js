import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'

const calculateBMI = (wt, ht) => {
  return (wt / (ht * ht)).toFixed(2)
}

const isNumberInputValid = (input) => {
  if (input === 0 || isNaN(input) || input === '' || input === null) {
    return false
  }
  return true
}

const displayBMI = (wt, ht) => {
  if (!isNumberInputValid(wt) || !isNumberInputValid(ht)) {
    alert('Please enter a valid weight and height')
    return
  }
  const bmi = calculateBMI(wt, ht)
  alert("Your BMI is " + bmi)
}

const getCaloriesRecommendation = (wt, ht) => {
  if (!isNumberInputValid(wt) || !isNumberInputValid(ht)) {
    alert('Please enter a valid weight and height')
    return
  }
  const bmi = calculateBMI(wt, ht)
  if (bmi < 18.5) {

    alert("You are underweight. You should eat more calories")

  } else if (bmi >= 18.59 && bmi <= 24.99) {

    alert("You are normal weight. You should eat the recommended calories")

  } else if (bmi >= 25 && bmi <= 29.99) {

    alert("You are overweight. You should eat less calories")

  } else if (bmi >= 30) {
    alert("You are obese. You should eat less calories")
  }
}


const CalculateScreen = () => {

  const [weight, setWeight] = useState(0.0)
  const [height, setHeight] = useState(0.0)

  return (
    
    <View className='h-full flex items-center mt-10'>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          value={weight}
          onChangeText={(weight) => setWeight(weight)}
          placeholder='Weight in kg'
          keyboardType='numeric'
          style={styles.input}
        />

        <TextInput
          value={height}
          onChangeText={(height) => setHeight(height)}
          placeholder='Height in m'
          keyboardType='numeric'
          style={styles.input}
        />
      </KeyboardAvoidingView>

      <View className='mt-10'>
        <TouchableOpacity
          style={styles.button}
          onPress={() => displayBMI(weight, height)}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>

      <View className='mt-10'>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => getCaloriesRecommendation(weight, height)}
        >
          <Text style={styles.buttonOutlineText}>Get Calories Intake</Text>
        </TouchableOpacity>
      </View>

    </View>

    
  )
}

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


export default CalculateScreen
