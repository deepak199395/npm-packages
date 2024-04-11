import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const DeepakTextInput = ({
  placeholder,
  length,
  color,
  placeholderColor,
  size,
  onChangeText,
  value,
  isBad,
  keyBoardType,
  bg,
  border,
  width,
  height,
  borderColor,
  borderRadius,
  mt
}) => {
    const [isFocused,setIsfocused]=useState(false)
  return (
    <View style={{ width: width ? width : '90%', alignSelf: "center" ,marginTop:mt?mt:1}}>
      <View style={{
        width: "100%",
        height: height ? height : 50,
        borderWidth: border ? border : 0,
        justifyContent: "center",
        paddingLeft: 20,
        borderColor: border ? isBad ? 'red':isFocused?'green' : borderColor : "gray",
        borderRadius: borderRadius ? borderRadius : 0
      }}>
        <TextInput
         onFocus={()=>{
            setIsfocused(true)
         }}
         onBlur={()=>{
            setIsfocused(false)
         }}
          value={value ? value : ""}
          onChangeText={txt => onChangeText(txt)}
          placeholder={placeholder ? placeholder : "Enter Text here........"}
          style={{
            color: color ? color : 'black', backgroundColor: bg ? bg : "white",
            fontSize: size ? size : 14,
          }}
          placeholderTextColor={placeholderColor ? placeholderColor : "gray"}
          keyboardType={keyBoardType ? keyBoardType : 'default'}
          maxLength={length ? length : 300}
        />
      </View>
      {isBad ? <Text style={{ color: 'red', fontSize: 16, marginTop: 10 }}>{isBad}</Text> : null}
    </View>
  )
}

export default DeepakTextInput
