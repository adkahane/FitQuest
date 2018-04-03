import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';
// import User from '../server/models/User';
let userId;
class LoginForm extends Component {
    constructor(){
        super();
    this.state = { email: '',
            password: '',
            username: '',
            error: '',
            loading: false
            // user:{
            //     auth_id:'',
            //     name:'',
            //     email:'',
            //     avatar_url:'',
            //     points:0
            // },    
    };
}    

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
                // userId = firebase.auth().currentUser.uid)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });

    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            username: '',
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
        );
}

    render() {
        return (
            <Card style={{height: '100%'}}>
                <CardSection>
                    <Header headerText="Authentication" />
                </CardSection>    
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}                    
                        onChangeText={email => this.setState({ email })}
                         />
                </CardSection>
                <CardSection>
                    <Input 
                        placeholder="username"
                        label="User"
                        value={this.state.username}                    
                        onChangeText={username => this.setState({ username })}
                         />
                </CardSection>
                <CardSection> 
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
            
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;