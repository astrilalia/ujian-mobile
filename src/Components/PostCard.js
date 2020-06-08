import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PostCard = ({ image }) => {
    console.log(image)
    return (
        <View style={styles.container}>
            <View style={styles.boxCard}>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: `${image}`
                        }}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 197,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30,
    },
    cardImage: {
        height: 150,
        width: 150,
    },
    boxCard: {
        borderWidth: 2,
        borderColor: 'black'
    }
})

export default PostCard;
