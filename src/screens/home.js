import { StyleSheet, Text, View ,ScrollView, Pressable,StatusBar, TextInput,Image,FlatList, TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import { Feather } from '@expo/vector-icons';
import {insertItems,createTable} from '../components/database'




const Home = ({navigation}) => {
        const [data,SetData]=useState([])
        const [filteredData,SetFilteredData] = useState([])
        const [searchText,setSearchText]= useState('')

    const getData = async () => {
         try {
         const response = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json');
        const json = await response.json();
         const data=json.menu;
         SetData(data)
         SetFilteredData(data)
        } catch (error) {
        console.error(error);
         }
        };

        useEffect(()=>{
                getData()
        },[])

        const handleSearch = (text) => {
            setSearchText(text);
            const filtered = data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
            SetFilteredData(filtered);
          };

        const handleFilterByCategory = (category) => {
        if(category=='All'){
            SetFilteredData(data)
        }else{
            const filtered = data.filter((item) => item.category == category);
            SetFilteredData(filtered);}
        };

  return (
    <ScrollView style={styles.container}>
        <StatusBar backgroundColor='white' barStyle={'dark-content'}/>
        <View style={styles.header}>
        <Image source={require('../assets/images/Logo.png')} />
        <Pressable onPress={()=>navigation.navigate('Profile')}>
        <Image source={require('../assets/images/Profile.png')} style={styles.profile} />
        </Pressable>
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
        <View style={styles.textInput}>
            <Feather name="search" size={24} color="gray" />
             <TextInput placeholder="Search..." value={searchText} onChangeText={setSearchText} onSubmitEditing={()=>handleSearch(searchText)} style={{width:200}}/>
            </View>
        </View>
        <View style={{paddingHorizontal:20}}>
        <Text style={{fontSize:24,fontFamily:'KRegular',marginTop:20,marginBottom:10}}>ORDER FOR DELIVERY!</Text>
      <ScrollView style={{flexDirection:'row',gap:20,marginBottom:20}} contentContainerStyle={{justifyContent:'center',}} horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>handleFilterByCategory('starters')} style={{marginEnd:20}}>
        <Text style={styles.text}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleFilterByCategory('mains')} style={{marginEnd:20}}>
        <Text style={styles.text}>Mains</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleFilterByCategory('desserts')} style={{marginEnd:20}}>
        <Text style={styles.text}>Desserts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleFilterByCategory('drinks')} style={{marginEnd:20}}>
        <Text style={styles.text}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleFilterByCategory('All')} style={{marginEnd:20}}>
        <Text style={styles.text}>All</Text>
        </TouchableOpacity>
      </ScrollView>
        </View>
      

        <FlatList
            data={filteredData}
            renderItem={({ item }) => (<View style={{paddingHorizontal:10,marginVertical:10,borderBottomWidth:2,borderColor:'gray',paddingBottom:10}}><Text style={{fontSize:30,fontFamily:'KRegular',}}>{item.name}</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{width:230}}>
                    <Text style={{fontSize:20,fontFamily:'KRegular',marginBottom:10}} numberOfLines={2}>{item.description}</Text>
                    <Text style={{fontSize:20,fontFamily:'KRegular',marginBottom:10}}>$ {item.price}</Text>
                </View>
                <Image source={{uri : `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true` }} style={{width:150,height:150, borderRadius:10,}} />
            </View>
            </View>)}
            />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:10,
        backgroundColor:'white',
        
    },
    header:{
        alignItems:'center',
        gap:50,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingEnd:20,
        marginBottom:20
    },
    profile:{
        width:50,
        height:50,
        borderRadius:25
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
    textInput:{
        fontSize:16,
        fontFamily:'KRegular',
        borderWidth:1,
        width:327,
        padding:10,
        borderRadius:10,
        borderColor:'gray',
        marginTop:10,
        flexDirection:'row',
        gap:10
    },
    text:{
        color:'#495E57',
        backgroundColor:'#EDEFEE',
        borderRadius:20,
        padding:10,
        textAlign:'center',
        fontFamily:'KRegular',
        fontSize:18,
        
    }
})