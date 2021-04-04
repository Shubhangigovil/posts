import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


const Comments = ({ route, navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { Title, Description, Id } = route.params;
    console.log("In Comments component", Comments)

    const [comments, setComments] = useState([])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${Id}`)
            .then(response => response.json())
            .then(async (json) => {
                setComments(json)
                // await json.map((x) => {
                //     console.log("commmm1", x.body)
                //     comments.push(x.body)
                // })
            }).catch((err) => console.log(err))
    }, [])


    const renderHeader = () => {
        return (
            <View>
                <Text style={styles.title}>{`Title: ${Title}`}</Text>
                <Text style={styles.desc}>{`Description: ${Description}`}</Text>
            </View>
        )
    }


    const renderItem = ({ item }) => (
        <View>
            <Text style={styles.comments}>{item.body}</Text>
        </View>
    )

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View>
                <FlatList
                    nestedScrollEnabled={true}
                    data={comments}
                    renderItem={renderItem}
                    key={item => item.id}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    nestedScrollEnabled={true}
                    ListHeaderComponent={renderHeader}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    comments: {
        flex: 1,
        color: '#111569',
        fontSize: 30,
        margin: '4%',
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 10,
        fontFamily: 'cursive'
    },
    title: {
        flex: 1,
        color: 'black',
        fontSize: 25,
        margin: '3%',
        fontWeight: 'bold'
    },
    desc: {
        flex: 1,
        color: 'green',
        fontSize: 20,
        margin: '3%',


    }
});

export default Comments;
