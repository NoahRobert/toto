import React from 'react'
import {StyleSheet, View, Button, TextInput, Text} from 'react-native'
class Search extends React.Component {
  render(){
    return (
      <View>
      <TextInput style={styles.textinput} placeholder="Titre du film"/>
      <Text>En plus pour tester</Text>
      <Button title="Rechercher" onPress={() =>{}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
export default Search
