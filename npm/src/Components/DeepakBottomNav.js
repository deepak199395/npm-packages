import { FlatList, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';

const DeepakBottomNav = ({ tabs, onSelected, height, bg }) => {
    const [selectedTab,setSelectedTab]=useState(0)
    return (
        <View style={{
            width: '100%',
            height: height ? height : 70,
            position: "absolute",
            bottom: 0,
            backgroundColor: bg ? bg : "white",
            flexDirection: "row",
        }}>
            <FlatList horizontal data={tabs} 
            renderItem={({ item,index }) => {
                return (
                    <TouchableOpacity 
                        style={{ 
                            width: Dimensions.get('window').width / tabs.length,
                            height: '100%',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                         onPress={()=>{
                        setSelectedTab(index)
                        onSelected(index)
                         }}>
                        {item.icon ? (
                            <Image source={ selectedTab== index?item.activeIcon:item.icon}
                             style={{ width: item.size, height: item.size }} />
                        ) : (
                            <Text style={{color:"white"}}>{item.title}</Text>
                        )}
                    </TouchableOpacity>
                );
            }}
            
            
            />
        </View>
    )
}

export default DeepakBottomNav

const styles = StyleSheet.create({})