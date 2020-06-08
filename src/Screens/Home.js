import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/Actions/authAction';
import PostCard from '../Components/PostCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    let {dataKucing} = useSelector(state => state.auth);
    let dispatch = useDispatch();
    // console.log(dataKucing.url)
    
    useEffect(() =>{
        dispatch(getData())
    }, [dispatch])

    return (
        <View>
            <Text>Home</Text>
            <Button title="to detail" onPress={() => navigation.navigate('Detail', { data: dataKucing})} />
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={dataKucing}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', item)}
                    >
                        <PostCard 
                            image={item.url}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;