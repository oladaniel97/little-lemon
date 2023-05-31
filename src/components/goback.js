import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


 const GoBack=() =>{
    const navigation = useNavigation()
  return (
    <Ionicons name="arrow-back-sharp" size={32} color="black" style={{left:-150}} onPress={()=>navigation.goBack()}/>
  )
}

export default GoBack