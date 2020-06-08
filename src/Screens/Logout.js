import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/Actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = () => {
    let dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAction())
        AsyncStorage.removeItem()
    }

    return (
        <View style={styles.container}>
            <Button 
                title="LOGOUT"
                onPress={handleLogout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Logout;