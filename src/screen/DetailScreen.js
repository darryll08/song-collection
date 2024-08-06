import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const DetailScreen = (props) => {
  const {route} = props
  const song = route.params.item

  useEffect(() => {
    console.log(song);
  }, [])

  return (
  <View style={styles.mainContainer}>
       
    </View>
  )
}

const styles = StyleSheet.create({
    
})
export default DetailScreen