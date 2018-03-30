import React from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import { Input, SearchBar, Icon } from 'react-native-elements';

import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './AuthenticationStyles.js';


const SCREEN_WIDTH = Dimensions.get('window').width;

const dummySearchBarProps = {
    showLoading: true,
    onFocus: () => console.log("focus"),
    onBlur: () => console.log("blur"),
    onCancel: () => console.log("cancel"),
    onClearText: () => console.log("cleared"),
    onChangeText: text => console.log("text:", text),
}

class Authentication extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">


                <View style={styles.contentView}>
                    <View style={{ backgroundColor: "rgba(49, 111,244, 1)", width: SCREEN_WIDTH, alignItems: "center" }}>
                        <Text
                            style={{
                                fontSize: 30,
                                marginVertical: 10,
                                fontWeight: "bold",
                                marginTop: 30,
                                color: "white"
                            }}>
                            Login
                        </Text>
                        <View style={styles.overlay}>
                            <View style={styles.triangleLeft} />
                            <Input containerStyle={{
                                borderWidth: 1, borderColor: "white", borderLeftWidth: 0, height: 50,
                                width: SCREEN_WIDTH - 80, backgroundColor: "white"
                            }} icon={<MaterialIcon name="email-outline" color="gray" size={25} />}
                                placeholder="Email" placeholderTextColor="gray" autoCapitalize="none" autoCorrect={false}
                                keyboardAppearance="light" keyboardType="email-address" returnKeyType="next"
                                ref={input => (this.emailInput = input)} onSubmitEditing={() => {
                                    this.passwordInput.focus();
                                }} blurOnSubmit={false} />
                            <View style={styles.triangleRight} />
                        </View>
                        <View style={[styles.overlay, { marginBottom: 30, marginTop: 1 }]}>
                            <View style={styles.triangleLeft} />
                            <Input containerStyle={{
                                borderWidth: 1, borderColor: "white", borderLeftWidth: 0, height: 50, width: SCREEN_WIDTH - 80,
                                backgroundColor: "white"
                            }}
                                icon={<SimpleIcon name="lock" color="gray" size={25} />}
                                placeholder="Password" placeholderTextColor="gray" autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true}
                                autoCorrect={false} keyboardType="default" returnKeyType="done" ref={input => (this.passwordInput = input)} blurOnSubmit={true} />
                            <View style={styles.triangleRight} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "rgba(44, 244, 250, 1)", width: SCREEN_WIDTH, alignItems: "center" }}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 30,
                                marginVertical: 10,
                                fontWeight: "bold"
                            }}>
                            Sign up
                        </Text>
                        <Input containerStyle={{
                            borderRadius: 40, borderWidth: 1,
                            borderColor: "white", height: 50, width: SCREEN_WIDTH - 50,
                            marginVertical: 10, backgroundColor: "white"
                        }} icon={<SimpleIcon name="user" color="gray" size={25} />}
                            iconContainerStyle={{ marginLeft: 20 }} placeholder="Username" placeholderTextColor='gray'
                            inputStyle={{ marginLeft: 10, color: "gray" }} autoCapitalize="none" autoCorrect={false} keyboardAppearance="light"
                            keyboardType="email-address" returnKeyType="next" ref={input => (this.usernameInput = input)} onSubmitEditing={() => {
                                this.email2Input.focus();
                            }} blurOnSubmit={false} />
                        <Input containerStyle={{
                            borderRadius: 40, borderWidth: 1,
                            borderColor: "white", height: 50, width: SCREEN_WIDTH - 50,
                            marginVertical: 10, backgroundColor: "white"
                        }} icon={<MaterialIcon name="email-outline" color="gray" size={25} />}
                            iconContainerStyle={{ marginLeft: 20 }} placeholder="Email" placeholderTextColor="gray"
                            inputStyle={{ marginLeft: 10, color: "gray" }} autoCapitalize="none" autoCorrect={false} keyboardAppearance="light"
                            keyboardType="email-address" returnKeyType="next" ref={input => (this.email2Input = input)} onSubmitEditing={() => {
                                this.password2Input.focus();
                            }} blurOnSubmit={false} />
                        <Input containerStyle={{
                            borderRadius: 40, borderWidth: 1,
                            borderColor: "white", height: 50, width: SCREEN_WIDTH - 50,
                            marginVertical: 10, backgroundColor: "white"
                        }} icon={<SimpleIcon name="lock" color="rgba(110, 120, 170, 1)" size={25} />}
                            iconContainerStyle={{ marginLeft: 20 }} placeholder="Password" placeholderTextColor="gray"
                            inputStyle={{ marginLeft: 10, color: "gray" }} autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false}
                            keyboardType="default" returnKeyType="next" ref={input => (this.password2Input = input)} onSubmitEditing={() => {
                                this.confirmPassword2Input.focus();
                            }} blurOnSubmit={false} />
                        <Input containerStyle={{
                            borderRadius: 40, borderWidth: 1,
                            borderColor: "white", height: 50, width: SCREEN_WIDTH - 50,
                            marginTop: 10, marginBottom: 30, backgroundColor: "white"
                        }} icon={<SimpleIcon name="lock" color="rgba(110, 120, 170, 1)" size={25} />}
                            iconContainerStyle={{ marginLeft: 20 }} placeholder="Confirm Password" placeholderTextColor="gray"
                            inputStyle={{ marginLeft: 10, color: "gray" }} autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false}
                            keyboardType="default" returnKeyType="done"
                            ref={input => (this.confirmPassword2Input = input)}
                            blurOnSubmit={true} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Authentication; 
