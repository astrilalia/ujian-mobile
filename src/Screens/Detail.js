import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

const Detail = ({navigation, route}) => {
    let image = route.params.data.url

    return (
        <View style={styles.container}>
            <Image 
                source={{
                    uri: image
                }}
            />
            <Button 
                title="SET AS DEFAULT PICTURE?"
                containerStyle={{
                    alignItems: 'center'
                }}
                buttonStyle={{
                    backgroundColor: '#3DDC84',
                    width: '60%'
                }}
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
    }
})

export default Detail;