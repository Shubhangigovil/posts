import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState('')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setPosts(json)
      }).catch((err) => console.log(err))
  }, [])
  function renderHeader() {
    return (
      <Text style={styles.header}>My Posts</Text>

    )
  }

  ShowDetails =  (id, title, description) => {
    setTitle(title)
    setDescription(description)

   

     navigation.navigate('Comments', {
      Title: title,
      Description: description,
      Id: id
    })

  }

  const renderItem = ({ item }) => (
    <Pressable style={styles.postStyle} onPress={() => ShowDetails(item.id, item.title, item.body)}>
      <Text style={styles.postText}>{item.title}</Text>
    </Pressable>
  )

  return (
    <SafeAreaView
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{ backgroundColor: 'maroon' }}
      >


        <FlatList
          nestedScrollEnabled={true}
          data={posts}
          renderItem={renderItem}
          key={item => item.id}
          keyExtractor={item => item.id}
          horizontal={false}
          initialNumToRender={8}
          nestedScrollEnabled={true}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    marginTop: '4%',
    marginBottom: '4%'
  },
  postStyle: {
    flex: 1,
    backgroundColor: '#F3A32C',
    padding: 10,
    borderRadius: 20,
    margin: '3%'
  },
  postText: {
    flex: 1,
    color: '#111569',
    fontSize: 25,

  }
});

export default App;
