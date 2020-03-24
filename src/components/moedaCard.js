import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const MoedaCard = ({ moeda, isFirstColumn }) => (
    <View style={[
             styles.container, 
             isFirstColumn ? styles.firstColumn : styles.lastColumn]}>
        <View style={styles.card}>
            <Image
                source={{
                    uri: moeda.img
                }}
                aspectRatio={1}
                resizeMode="cover"
            />
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{moeda.title}</Text>
                <Text style={styles.preco}>Preço hoje R${moeda.preco}</Text>
            </View>
        </View>
    </View>
);  

const styles = StyleSheet.create({
    container: {
        //flex: .5,
        width: '50%',
        padding: 5, 
        height: Dimensions.get('window').width / 2,

       // borderWidth: 1,
       // borderColor: 'red'
    },
    card: {
        flex: 1,
        borderWidth: 1
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,

        position: 'absolute',
        bottom: 0,
        opacity: .8,

        width: '100%',

        paddingTop: 10,
        paddingBottom: 10,

        paddingLeft: 3,
        paddingRight: 3,

        alignItems: 'center'
        
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }, 
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {   
        paddingRight: 10,
    },
    preco: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    }
});

export default MoedaCard;