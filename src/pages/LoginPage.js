import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import firebase from 'firebase';

import { connect } from 'react-redux';

import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }


    //setState dos campos input 
    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    //pega o email e senha do state, chama a action tryLogin
    // que devolve o dispatch e é tratado pelo redux-thunk
    // depois passa pelo UserReducer
    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { mail: email, password } = this.state;

        this.props.tryLogin({ email, password })
            .then(user => {
                if (user)
                    return this.props.navigation.replace('Crypto');

                this.setState({
                    isLoading: false,
                    message: ''
                });

            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByErrorCode(error.code)
                });
            })
    }

    //personalizando as mensagens de erro
    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuario não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    //render botão e indicador de carregamento
    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />
        return (
            <Button
                title="Entrar"
                onPress={() => this.tryLogin()}
                color="green"
            />)
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>

                {this.renderButton()}
                {this.renderMessage()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,

    },
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },

})


export default connect(null, { tryLogin } || { actionsCreator })(LoginPage)