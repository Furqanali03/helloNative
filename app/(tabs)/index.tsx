import React from 'react'
import { View, Text } from 'react-native'


const Home = () => {
  return (
    <>
     <View style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 30
        }}>Home</Text>

      </View>
    </>
  )
}

export default Home
