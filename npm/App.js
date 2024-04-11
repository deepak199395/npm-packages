import { StyleSheet, View } from 'react-native';
import React from 'react';

import DwelcomeScreen from './src/Components/DwelcomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <DwelcomeScreen
        screens={[
          {
            image: require('./src/Assets/npm1.jpeg'),
            title: 'slide 1',
            desc: 'slide1 descriptions'
          },
          {
            image: require('./src/Assets/npm1.jpeg'),
            title: 'slide 2',
            desc: 'slide2 descriptions'
          },
          {
            image: require('./src/Assets/npm1.jpeg'),
            title: 'slide 3',
            desc: 'slide3 descriptions'
          },
          {
            image: require('./src/Assets/npm1.jpeg'),
            title: 'slide 4',
            desc: 'slide4 descriptions'
          },
        ]}
        activeDotColor={'red'}
        nonactiveDotColor={'green'}
       // bgColor={'gray'}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
