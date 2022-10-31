import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, {useState} from 'react'

const CalculateScreen = () => {

  const [weight, setWeight] = useState(0.0)
  const [height, setHeight] = useState(0.0)
  const [age, setAge] = useState(0.0)
  const [gender, setGender] = useState('Female')

  const clearInputs = () => {
    setWeight(0.0)
    setHeight(0.0)
    setAge(0.0)
    setGender('Female')
  }

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
      alert('At least one of the input is invalid')
      return
    }
    const bmi = calculateBMI(wt, ht)
    alert("Your BMI is " + bmi)

  }

  const displayCaloriesRecommendation = (wt, ht, ag, gender) => { 
    if (!isNumberInputValid(wt) || !isNumberInputValid(ht) || !isNumberInputValid(ag)) {
      alert('At least one of the input is invalid')
      return
    }
    const caloriesRecommendation = gender === "male" ?
      66.5 + 13.75 * (wt) + 5.003 * (ht*100) - 6.755 * (ag)
      :
      655.1 + (9.563 * (wt)) + (1.85 * (ht*100)) - (4.676 * (ag));
    alert("Your recommended daily calories intake is " + caloriesRecommendation.toFixed(2))

  }

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
          placeholder='Height in meters'
          keyboardType='numeric'
          style={styles.input}
        />

        <TextInput
          value={age}
          onChangeText={(age) => setAge(age)}
          placeholder='You age'
          keyboardType='numeric'
          style={styles.input}
        />

        <View className='mt-2 ml-2 flex-row items-center justify-between'>
          <Text style={{fontSize: 18}}>Gender</Text>

          <View>
            <Picker
              selectedValue={gender}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              
              >
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
            
            </Picker>        
          </View>
        </View>

      </KeyboardAvoidingView>

      <View className='mt-10'>
        <TouchableOpacity
          style={styles.button}
          onPress={() => displayBMI(weight, height)}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>

      <View className='mt-4'>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => displayCaloriesRecommendation(weight, height, age, gender)}
        >
          <Text style={styles.buttonOutlineText}>Get Calories Intake</Text>
        </TouchableOpacity>
      </View>

            <View className='border-primary border-b-8 mt-2 w-48' />

      <View className='mt-4'>
        <TouchableOpacity
          style={styles.button}
          onPress={() => clearInputs()}
        >
          <Text style={styles.buttonText}>Reset Fields</Text>
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
