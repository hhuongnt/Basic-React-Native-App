import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import FlatListItems from './components/flatListItems';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Top Ten Movies of IMDB
        </Text>
        <FlatListItems />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    marginBottom: 12,
    fontSize: 18,
    textAlign: 'center',
  },
});
