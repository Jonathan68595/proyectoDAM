import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/VetExpertLogo.png')} 
        style={{
          width : '100%',
          height : 500,
        }}
      />
      <View style={{
        padding: 20,
        display: 'flex',
        alignItems:'center',
      }}>
        <Text style = {{
          fontFamily: 'Montserrat-Bold',
          fontSize: 30,
          textAlign: 'center',
          marginTop: 20,
        }}>Aliados en el bienestar animal</Text>
        <Text style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 18 ,
          textAlign: 'center',
          color: Colors
        }}>txt</Text>
      </View>
    </View>

  )
}