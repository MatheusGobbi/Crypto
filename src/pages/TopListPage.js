import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoedaCard from '../components/moedaCard';

import { getTopList as ActionGetTopList, addFavoritos as ActionAddFavoritos  } from '../actions/cryptoAction';

const FavoritosPage = props => {

    if (props.topList.length === 0) {
        props.getTopList();
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={props.topList}
                renderItem={({ item, index }) => (
                    <MoedaCard
                        moeda={item}
                        isFirstColumn={isEnven(index)}
                        onPress={() => props.addFavoritos(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                ListHeaderComponent={() => (<View style={StyleSheet.marginTop} />)}
                ListFooterComponent={() => (<View style={StyleSheet.marginBottom} />)}
            />
        </View>
    );
}
const isEnven = number => number % 2 === 0;


const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5,
    },
    marginBottom: {
        marginBottom: 5,
    }, container: {
        flex: 1,
    }
})

const mapStateToProps = (state) => ({
    topList: state.crypto.topList
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getTopList: ActionGetTopList,
        addFavoritos: ActionAddFavoritos,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FavoritosPage);


//redux-thunk se for função ele chama a action (dispatch, getState, extraArgument )