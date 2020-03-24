import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import MoedaCard from '../components/moedaCard';

import moedas from '../moedas.json'

const MainPage = props => (
    <View>
        <FlatList
            data={moedas}
            renderItem={({ item, index }) => (
                <MoedaCard 
                    moeda={item}
                    isFirstColumn={isEnven(index)}
                />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            ListHeaderComponent={props => (<View style={StyleSheet.marginTop}/>)}
            ListFooterComponent={props => (<View style={StyleSheet.marginBottom}/>)}
        />
    </View>
);

const isEnven = number => number % 2 === 0;

export default MainPage;

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5,
    },
    marginBottom: {
        marginBottom: 5,
    }
})



//redux-thunk se for função ele chama a action (dispatch, getState, extraArgument )