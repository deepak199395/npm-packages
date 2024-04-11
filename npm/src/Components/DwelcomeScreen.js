import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const DwelcomeScreen = ({ 
                        screens, 
                        activeDotColor,
                        nonactiveDotColor, 
                        bgColor,
                        btnbgColor, 
                        titleStyle, 
                        desStyle, 
                        imageStyle,
                        btnTextColor
                         }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: bgColor ? bgColor : 'white' }}>
            <View>
                <FlatList
                    horizontal
                    data={screens}
                    onScroll={(e) => {
                        setSelectedIndex((e.nativeEvent.contentOffset.x / Dimensions.get('window').width).toFixed(0))
                    }}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.imageContainer}>
                                <Image
                                    source={item.image}
                                    style={imageStyle ? imageStyle : styles.image}
                                    resizeMode="contain"

                                />
                                <Text style={titleStyle ? titleStyle : { fontSize: 30, color: "black" }}>{item.title}</Text>
                                <Text style={desStyle ? desStyle : { fontSize: 16, color: "black" }}>{item.desc}</Text>

                            </View>
                        );
                    }}
                />
            </View>
            <View style={{ alignSelf: "center", flexDirection: "row" }}>
                {screens.map((item, index) => {
                    return (
                        <View style={{
                            width: 10, height: 10,
                            borderRadius: 10,
                            color: "white",
                            backgroundColor: selectedIndex == index ? activeDotColor ? activeDotColor:'black': nonactiveDotColor ? nonactiveDotColor : "gray",
                            marginLeft: 10
                        }}>

                        </View>
                    )
                })}
            </View>
            <View style={{ width: '100%', position: "absolute", bottom: 20, flexDirection: "row" }}>
                <View style={{ width: '50%',justifyContent:"center",alignItems:"center" }}>
                {selectedIndex>0 &&
                
                    <TouchableOpacity style={{ width: '40%', 
                    backgroundColor: btnbgColor ? btnbgColor : 'black',
                     justifyContent: "center",
                     alignItems:"center" ,
                     height:50,
                     borderRadius:10
                   }}>
                       <Text style={{color:btnTextColor?btnTextColor:'white'}}>{'previous'}</Text>
                      </TouchableOpacity>}
                   
                </View>
                <View style={{ width:'50%' ,justifyContent:"center",alignItems:"center"}}>
                {selectedIndex<screens.length-1 && 
                     <TouchableOpacity style={{ width: '40%', 
                backgroundColor: btnbgColor ? btnbgColor : 'black',
                 justifyContent: "center",
                 alignItems:"center" ,
                 height:50,
                 borderRadius:10
               }}>
              <Text style={{color:btnTextColor?btnTextColor:'white'}}>{'Next'}</Text>
           </TouchableOpacity>}
               
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DwelcomeScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get('window').width,
        height: '80%', // Set the height to 50% of the screen height or adjust as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '90%',
        height: '90%',
        resizeMode: "contain",
        marginTop: 10
    },
});
