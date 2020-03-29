import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoedaCard from '../components/moedaCard';

import { getTopList as ActionGetTopList } from '../actions/cryptoAction';


const MainPage = props => {

    if (props.topList.length === 0) {
        props.getTopList();
    }
    return (
        <View>
            <FlatList
                //data={moedas}
                data={props.topList}
                renderItem={({ item, index }) => (
                    <MoedaCard
                        moeda={item}
                        isFirstColumn={isEnven(index)}
                        onNavigate={() => props.navigation.navigate('MoedaDetailPage', { moeda: item })}
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
    }
})

const mapStateToProps = (state) => ({
    topList: state.crypto.topList
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getTopList: ActionGetTopList,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


//redux-thunk se for função ele chama a action (dispatch, getState, extraArgument )