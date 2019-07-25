import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking, FlatList, TouchableOpacity } from 'react-native';

const moviedata = require('./info.json');

class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderBottomWidth: 1, borderColor: '#D3D3D3' }}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Image style={styles.pic} source={{ uri: this.props.item.image }} />
        </View>
        <View  style={{ borderTopWidth: 1, borderTopColor: '#D3D3D3' }}>
          <TouchableOpacity style={styles.info}
            onPress={() => {
              Linking.openURL(this.props.item.url);
            }}>
            <Text style={{ color: '#1E90FF', textAlign: 'center' }}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class FlatListItems extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={moviedata}
          renderItem={({ item }) => {
            return <ListItem item={item} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginBottom: 12,
  },
  title: {
    marginVertical: 5,
    marginLeft: 5,
    fontSize: 15,
  },
  pic: {
    height: 280,
    width: '100%',
    alignSelf: 'center',
  },
  info: {
    fontSize: 15,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 12,
    borderColor: '#1E90FF',
    borderRadius: 5,
    borderWidth: 1,
  },
});
