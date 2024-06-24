import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Place} from '../models/Place';

const PlaceItem = ({place, onSelect}: { place: Place, onSelect: () => void }) => {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{uri: place.imageUri}}/>
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({});

export default PlaceItem;
