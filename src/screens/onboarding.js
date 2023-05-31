import { StyleSheet, Text, View ,Image,Pressable,ScrollView} from 'react-native'
import React from 'react'

const Onboarding = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.logo}>
        <Image source={require('../assets/images/Logo.png')} />
        </View>
      <View style={styles.heroWhole}>
        <Text style={styles.head}>Little Lemon</Text>
        <View style={styles.hero}>
            <View style={{width:220}}>
                <Text style={styles.white}>Chicago</Text>
                <Text style={[styles.heroText,{color:'#EDEFEE'}]}>We are family owned Mediterranean restaurant focused on traditional recipes served with a modern twist</Text>
            </View>
            <Image source={require('../assets/images/Hero.png')} style={styles.image}/>
        </View>
        </View>
        <View>
            <Text style={styles.black}>Are You Hungry?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',gap:10}}>
                <Pressable onPress={()=>navigation.navigate('Login')} style={[styles.btn,{backgroundColor:'#EE9972'}]}><Text style={styles.heroText}>Login</Text></Pressable>
                <Pressable onPress={()=>navigation.navigate('Signup')} style={[styles.btn,{backgroundColor:'#FBDABB'}]}><Text style={styles.heroText}>Sign up</Text></Pressable>
            </View>
        
      </View>
    </ScrollView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        
    },
    logo:{
        alignItems:'center',
        marginBottom:20
        
    },
    image:{
        width:150,
        height:150,
        borderRadius:10
    },
    heroWhole:{
        backgroundColor:'#495E57',
        paddingHorizontal:10,
        paddingTop:10,
        paddingBottom:15
        
    },
    head:{
        color:'#F4CE14',
        fontSize:60,
        fontFamily:'MBold'
    },
    hero:{
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },
    white:{
        color:'#EDEFEE',
        fontFamily:'MBold',
        fontSize:30,
        marginBottom:10
        
    },
    heroText:{
        fontFamily:'KRegular',
        fontSize:16,
        
    },
    black:{
        fontFamily:'MBold',
        fontSize:36,
        textAlign:'center',
        marginTop:30,
        marginBottom:20

    },
    btn:{
        width:150,
        paddingVertical:15,
        borderRadius:10,
        borderWidth:1,
        alignItems:'center'
    }

})