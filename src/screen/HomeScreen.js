import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { songData } from '../../data/SongData'
import ButtonComponent from '../components/ButtonComponent'

const HomeScreen = (props) => {
  const {navigation} = props
    
  return (
    <View>
      <FlatList
        data={songData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Image style={styles.songImage} source={{uri: item.imageLink}} />
              <View style={styles.songDescriptionContainer}>
                <Text style={styles.title}>
                {item.title}
                </Text>
                <View style={styles.singerContainer}>
                  <Text style={styles.singer}>
                    {item.singer}
                  </Text>
                </View>
                <View style={styles.starView}>
                {
                  item.rating === 5 ?
                  <Image
                  style={styles.songRating}
                  source={require('../../assets/images/five-stars.png')}
                  />
                  :
                  
                  item.rating === 4 ?
                  <Image
                  style={styles.songRating}
                  source={require('../../assets/images/four-stars.png')}
                  />
                  :

                  item.rating === 3 ?
                  <Image
                  style={styles.songRating}
                  source={require('../../assets/images/three-stars.png')}
                  />
                  :

                  item.rating === 2 ?
                  <Image
                  style={styles.songRating}
                  source={require('../../assets/images/two-stars.png')}
                  />
                  :
                  <Image
                  style={styles.songRating}
                  source={require('../../assets/images/star.png')}
                  />
                }
                </View>
                <ButtonComponent
                  onPress={() => navigation.navigate('DetailSong', {item})}/>
              </View>
            </View>
          );
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    dataContainer:{
      margin:8,
      borderWidth:2,
      borderColor:'#A6A6BD',
      flexDirection:'row',
      alignItems:'center'
    },
    flatListContainer: {
      padding: 8,
    },
    songImage: {
      width: 120,
      height: 120,
    },
    songDescriptionContainer: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 8,
    },
    title:{
      fontSize:18,
      fontWeight:'bold'
    },
    singerContainer:{
      marginTop:8,
      marginBottom:8
    },
    starView:{
      flexDirection:'row'
    },
    songRating:{
      width:120,
      height:20
    }
})
export default HomeScreen