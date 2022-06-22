import { View, Text, Image, FlatList } from 'react-native'
import React,{ useEffect, useState } from 'react';
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Item = ({ title, overview, poster_path }) => {

  let image = poster_path

  return(
  
  <View style={{flex:1, borderWidth:3,borderColor:'white', margin:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:30,textAlign:'center',marginHorizontal:10}}>{title}</Text>
    <View style={{alignItems:'center'}}>
      <Image source={{uri:`https://image.tmdb.org/t/p/original${image}`}} style={{height:200, width:150}}/>
    </View>
    <Text style={{color:'white',fontSize:18, textAlign:'justify',marginHorizontal:15}}>{overview}</Text>
    <TouchableOpacity>
      <Text>+ d'infos</Text>
    </TouchableOpacity>
  </View>
  )
};

const HomeScreen = () => {

    const [showPopularMovies, setShowPopularMovies] = useState([])

    const apiKey = "42fb6d4362a7a2328e024d419c7de910"
    useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)

    .then( response => {

      if(response.status ===200) {

        setShowPopularMovies(response.data.results)
        console.log(response.data.results[0]);      
      }    
    }   
    )
    .catch(error => {
      console.log('erreur');
    }
    )
  },[]
  )

  const renderItem = ({ item }) => (
    <Item title={item.title} overview={item.overview} poster_path = {item.poster_path}/>
  );

  return (
    <View style={{flex:1, backgroundColor:'black'}}>

      <FlatList
        data={showPopularMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default HomeScreen