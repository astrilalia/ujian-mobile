import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = () => {
    let {username} = useSelector(state => state.auth.username)
    // console.log(username)
    return (
        <View style={styles.container}>
            <Image 
                source={require('../Assets/defaultpicture.jpg')}
                style={styles.image}
            />
            <Text>{username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        borderWidth: 2,
        borderRadius: 50,
        width: 200,
        height: 200
    }
})

export default Profile;