import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoedaCard from '../components/moedaCard';

import { removeFavoritos as ActionRemoveFavoritos  } from '../actions/cryptoAction';


const FavoritosPage = props => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.favoritos}
                renderItem={({ item, index }) => (
                    <MoedaCard
                        moeda={item}
                        isFirstColumn={isEnven(index)}
                        onPress={() => props.removeFavoritos(item.id)}
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
    favoritos: state.crypto.favoritos
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        removeFavoritos: ActionRemoveFavoritos,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FavoritosPage);


//redux-thunk se for função ele chama a action (dispatch, getState, extraArgument )