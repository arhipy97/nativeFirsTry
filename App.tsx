import React from 'react';
import { StyleSheet, View } from "react-native";
import ViewBoxesWithColorAndText from './src/components/mainPage/mainPage';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ViewBoxesWithColorAndText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
