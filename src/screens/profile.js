import { StyleSheet, Text, View,ScrollView,Image,TextInput, Alert,Pressable, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
    const [firstName,SetFirstName] = useState('')
    const [lastName,SetLastName]=useState('')
    const [email,SetEmail]=useState('')
    const [emailNotifications, SetEmailNotifications] =useState({
        newsletter:false,
        offers:false,
        updates:false
    })
    const toggleNotification = async(type)=>{
        try {
            const update ={...emailNotifications,[type]:!emailNotifications[type]}
            SetEmailNotifications(update)
            await AsyncStorage.setItem('emailNotifications',JSON.stringify(update))
        } catch (error) {
            console.log(error)
        }
    }
    const Details =async()=>{
        try {
            const value= await AsyncStorage.getItem('login')
            const jsonValue = JSON.parse(value)
            SetFirstName(jsonValue.firstName)
            SetLastName(jsonValue.lastName)
            SetEmail(jsonValue.email)

        } catch (error) {
            Alert.alert('Error fetching user profile. please try again')
        }
    }
    useEffect(()=>{
        Details()
    },[])

    const updateProfile = async()=>{
        try {
            const value= await AsyncStorage.getItem('login')
            if (value){
                const user = JSON.parse(value);
                user.firstName =firstName;
                user.lastName = lastName;
                user.email = email;
                await AsyncStorage.setItem('login',JSON.stringify(user))
                Alert.alert('Profile updated successfully!')
            }
        } catch (error) {
            Alert.alert('Error updating profile. please try again')
        }
    }

    const Logout = async()=>{
        try{
            await AsyncStorage.removeItem('login')
            navigation.navigate('Onboarding');
        } catch (error){
            console.log('Error', error);
        }
    }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.header}>
        <Ionicons name="arrow-back-sharp" size={32} color="black"  onPress={()=>navigation.goBack()}/>
        <Image source={require('../assets/images/Logo.png')} />
        <Image source={require('../assets/images/Profile.png')} style={styles.profile} />
        </View>
        <View style={styles.form}>
            <Text style={styles.formHeader}>Personal information</Text>
            <Image source={require('../assets/images/Profile.png')} style={styles.profileForm} />
            <Text style={styles.label}>First Name:</Text>
            <TextInput placeholder='First name' value={firstName} onChangeText={SetFirstName} style={styles.textInput}/>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput placeholder='Last name' value={lastName} onChangeText={SetLastName} style={styles.textInput}/>
            <Text style={styles.label}>Email:</Text>
            <TextInput placeholder='Email' value={email} onChangeText={SetEmail} style={styles.textInput} keyboardType='email-address'/>
            <View style={{marginVertical:10}}>
                <Text style={styles.btnText}>Email Notifications</Text>
                <View style={styles.notify}>
                    <Text style={styles.text}>Order Statuses</Text>
                <Switch value={emailNotifications.updates} onValueChange={()=>toggleNotification('updates')}/>
                </View>
                <View style={styles.notify}>
                    <Text style={styles.text}>Special offers</Text>
                <Switch value={emailNotifications.offers} onValueChange={()=>toggleNotification('offers')}/>
                </View>
                <View style={styles.notify}>
                    <Text style={styles.text}>Newsletter</Text>
                <Switch value={emailNotifications.newsletter} onValueChange={()=>toggleNotification('newsletter')}/>
                </View>
                
            </View>
            <Pressable onPress={Logout} style={[styles.btn]}><Text style={styles.btnText}>Logout</Text></Pressable>
            <View style={{flexDirection:'row',justifyContent:'center',gap:25}}>
                <Pressable onPress={()=>navigation.goBack()} style={[styles.btns,{backgroundColor:'#EDEFEE'}]}><Text style={styles.btnText}>Discard changes</Text></Pressable>
                <Pressable onPress={updateProfile} style={[styles.btns,]}><Text style={[styles.btnText,{color:'white'}]}>Save changes</Text></Pressable>
            </View>
        </View>
      
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        paddingHorizontal:20,
        backgroundColor:'white',
    },
    header:{
        alignItems:'center',
        gap:40,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingEnd:10,
    },
    profile:{
        width:50,
        height:50,
        borderRadius:25
    },
    profileForm:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:10
    },
    form:{
        borderWidth:1,
        padding:20,
        borderRadius:10,
        marginBottom:80
    },
    label:{
        fontFamily:'KRegular',
    },
    formHeader:{
        fontFamily:'KRegular',
        fontSize:24,
        fontWeight:600,
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
        marginVertical:10
    },
    btn:{
        width:327,
        paddingVertical:10,
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        backgroundColor:'#F4CE14',
        marginTop:10,
    },
    btnText:{
        color:'black',
        fontFamily:'MBold',
        fontSize:24
    },
    btns:{
        width:150,
        paddingVertical:10,
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        backgroundColor:'#495E57',
        marginTop:10,
    },
    notify:{
        flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    },
    text:{
        color:'black',
        fontFamily:'MBold',
        fontSize:18
    }
})