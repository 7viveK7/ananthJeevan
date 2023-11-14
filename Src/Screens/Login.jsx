// LoginComponent.js
import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { userContext } from '../Context/Context';

const Login = () => {
    const { user, setUser, setIsvaliduser, AuthenticatedUser } = userContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignIn = () => {

        console.log('Email:', email);

    };

    const handleForgetPassword = () => {

        console.log('Forget Password');
    };

    const handleSignUp = () => {
        // setUser({ email, password })
        // console.log({ user })
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log({ user, AuthenticatedUser })
        if (reg.test(email.trim()) === true) {

            if (email.trim().toLowerCase() === AuthenticatedUser.email.toLowerCase() && password === AuthenticatedUser.password) {
                setIsvaliduser(true)
            }
            else {
                alert("Kindly furnish accurate details for the sign-in process.")
            }

        }
        else {
            alert("please enter a valid email")
        }

    };

    const handleAnonymousSignUp = () => {

        console.log('Anonymous Sign Up');
    };

    const handleGoogleSignIn = () => {

        console.log('Login with Google');
    };

    return (<View style={{ backgroundColor: '#fff', flex: 1, }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <LinearGradient style={{ flex: 1, padding: 50, }} colors={['#dfc7fb', '#624980',]}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/AnanthJeevan.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            </View>

            <TextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={{ borderColor: '#f5dad3', borderWidth: 1, borderRadius: 10, height: 50, marginBottom: 25, paddingLeft: 15 }}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={{ borderColor: '#f5dad3', borderWidth: 1, borderRadius: 10, height: 50, paddingLeft: 15 }}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#f5dad3', fontSize: 16, fontWeight: '500', textAlign: 'center', marginRight: 15 }}>Remember Me</Text>
                <TouchableOpacity onPress={() => { setRememberMe(prev => !prev) }} >
                    {!rememberMe ? <Image source={require('../Assets/square.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        : <Image source={require('../Assets/checkbox.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                    }
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={handleForgetPassword} style={{ marginTop: 50, marginRight: 20 }}>
                    <Text style={{ color: '#f5dad3', fontSize: 16, fontWeight: '500', textAlign: 'center' }} >Forget Password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={{ marginTop: 50, backgroundColor: '#f9dad5', padding: 10, borderRadius: 50, paddingHorizontal: 20 }}>
                    <Text style={{ color: '#624980', fontSize: 16, fontWeight: '500', textAlign: 'center' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleSignIn} style={{ marginTop: 50, backgroundColor: '#f9dad5', padding: 10, borderRadius: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: '#624980', fontSize: 16, fontWeight: '500', textAlign: 'center' }}>Login with gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignUp} style={{ marginTop: 80 }}>
                <Text style={{ color: '#f5dad3', fontSize: 16, fontWeight: '500', textAlign: 'center', textDecorationLine: 'underline' }}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAnonymousSignUp} style={{ marginTop: 20 }}>
                <Text style={{ color: '#f5dad3', fontSize: 16, fontWeight: '500', textAlign: 'center', textDecorationLine: 'underline' }}>Anonymous Sign Up</Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>

    );
};

export default Login