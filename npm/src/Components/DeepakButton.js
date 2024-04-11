import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DeepakButton = ({title,
                        bg,
                        color,
                        border,
                        width,
                        height,
                        mt,
                        size,
                        weight,
                        onPress}) => {
  return (
    <TouchableOpacity style={{
        width:width?width:"90%",
                             height:height?height:50,
                            justifyContent:"center",
                            alignItems:"center",
                            marginTop:mt?mt:10,
                            borderRadius:border?border:0,
                            backgroundColor:bg?bg:'black'
                            }}>
                            <Text style={{color:color?color:'white',fontSize:size?size:14,
                            fontWeight:weight?weight:400
                               }}
         onPress={()=>onPress()}                      
                               
                               >
                            {title?title:'Button'}</Text>
    
    </TouchableOpacity>
  )
}

export default DeepakButton

const styles = StyleSheet.create({})