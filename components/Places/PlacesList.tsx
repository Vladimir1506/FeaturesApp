import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Place} from '../models/Place';

const PlacesList = ({places}: { places: Place[] }) => {
    if (!places?.length) return <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
    </View>
    return (
        <FlatList data={places} keyExtractor={({id}) => id} renderItem={({item}) => <></>}/>
    );
};

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fallbackText: {
        fontSize: 16
    },
});

export default PlacesList;
