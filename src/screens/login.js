import { StyleSheet, Text, View ,ScrollView, TextInput,Pressable, Alert} from 'react-native'
import React, { useState } from 'react'
import GoBack from '../components/goback'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')

    const LoginAuth=async()=>{
        try {
            const value = await AsyncStorage.getItem('login')
            const jsonValue = JSON.parse(value)
            if(jsonValue.email === email && jsonValue.password === password){
                navigation.navigate('Home')
            }else{
                Alert.alert('Invalid details')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
        <GoBack/>
        <View>
          <Text style={styles.create}>Login</Text>
            <TextInput placeholder='Email' value={email} onChangeText={SetEmail} style={styles.textInput} keyboardType='email-address'/>
            <TextInput placeholder='Password' value={password} onChangeText={SetPassword} style={styles.textInput} secureTextEntry={true}/>
            <Pressable onPress={LoginAuth} style={[styles.btn]}><Text style={styles.btnText}>Login</Text></Pressable>
        </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        paddingHorizontal:20
    },
    create:{
        textAlign:'center',
        fontFamily:'MBold',
        fontSize:48
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