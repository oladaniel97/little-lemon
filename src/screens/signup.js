import { Alert, StyleSheet, Text, View,ScrollView,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'
import GoBack from '../components/goback'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
    const [firstName,SetFirstName]=useState('')
    const [lastName,SetLastName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')
    const [ConPassword,SetConPassword]=useState('')

    const SaveDetails = async()=>{
        try {
            if (firstName && lastName && password && email && (ConPassword == password)){
                const user ={
                  firstName,
                  lastName,
                  email,
                  password,
                }
                await AsyncStorage.setItem('login',JSON.stringify(user))
                // SetFirstName(firstName)
                // SetLastName(lastName)
                // SetEmail(email)
                // SetPassword(password)
                Alert.alert('Success')
                navigation.navigate('Login')
        }else{
            Alert.alert('Invalid','Please fill all fields',[{text:'OK'}])
        }
    } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
            <GoBack/>
          <View>
          <Text style={styles.create}>Create Account</Text>
            <Text style={styles.header2}>Let's get to know you</Text>
            <TextInput placeholder='First name' value={firstName} onChangeText={SetFirstName} style={styles.textInput}/>
            <TextInput placeholder='Last name' value={lastName} onChangeText={SetLastName} style={styles.textInput}/>
            <TextInput placeholder='Email' value={email} onChangeText={SetEmail} style={styles.textInput} keyboardType='email-address'/>
            <TextInput placeholder='Password' value={password} onChangeText={SetPassword} style={styles.textInput} secureTextEntry={true}/>
            <TextInput placeholder='Confirm Password' value={ConPassword} onChangeText={SetConPassword} style={styles.textInput} secureTextEntry={true}/>
            {(firstName && lastName && password && email && (ConPassword == password))?
            <Pressable onPress={SaveDetails} style={[styles.btn,{backgroundColor:'#EE9972'}]}><Text style={styles.btnText}>Sign up</Text></Pressable>:
            <Pressable style={[styles.btn,{backgroundColor:'gray'}]}><Text style={styles.btnText}>Sign up</Text></Pressable>}
          </View>
        </ScrollView>
      )
    }

    export default Signup
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            paddingTop:20,
            paddingHorizontal:20
        },
        create:{
            textAlign:'center',
            fontFamily:'MBold',
            fontSize:48
        },
        header2:{
            textAlign:'center',
            fontFamily:'KRegular',
            fontSize:20,
            marginBottom:20
        },
        textInput:{
            fontSize:16,
            fontFamily:'KRegular',
            borderWidth:1,
            width:327,
            paddingVertical:16,
            paddingHorizontal:14,
            borderRadius:10,
            borderColor:'gray',
            marginTop:10
        },
        btn:{
            width:327,
            paddingVertical:10,
            borderRadius:10,
            borderWidth:1,
            alignItems:'center',
            backgroundColor:'#495E57',
            marginTop:10,
            marginBottom:80
        },
        btnText:{
            color:'#EDEFEE',
            fontFamily:'MBold',
            fontSize:24
        }
    })