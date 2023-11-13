// LoginComponent.js
import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { userContext } from '../Context/Context';
import DropdownComponent from '../Components/DropDown';

const Appointment = () => {
    const { user, setUser } = userContext()

    const handleLogout = () => {
        setUser({ email: '', password: '' })

    };


    return (<View style={{ backgroundColor: '#fff', flex: 1, }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <LinearGradient style={{ flex: 1, padding: 40 }} colors={['#dfc7fb', '#624980',]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={handleLogout}>
                    <Image source={require('../Assets/logout.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                </TouchableOpacity>

                <Image source={require('../Assets/AnanthJeevan.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../Assets/back.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    <Text style={{ color: '#0e163e', fontWeight: '500' }}> Back</Text>

                </View>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20, marginBottom: 30, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ backgroundColor: '#7c08a6', padding: 10, borderRadius: 10, paddingHorizontal: 15 }}>
                    <Text style={{ color: '#f5dad3', fontSize: 16, fontWeight: '500', textAlign: 'center' }}>Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#f5dad3', borderWidth: 2, borderColor: '#7c08a6', padding: 10, borderRadius: 10, paddingHorizontal: 15 }}>
                    <Text style={{ color: '#7c08a6', fontSize: 16, fontWeight: '500', textAlign: 'center', }}>Emeragency</Text>
                </TouchableOpacity>
            </View>

            <DropdownComponent placeHolder={'Select A Subject'} />
            <DropdownComponent placeHolder={'Mode of Counselling'} />
            <DropdownComponent placeHolder={'Your Best Time to Connect'} />
            <TextInput
                placeholder="Place"
                // onChangeText={(text) => setEmail(text)}
                // value={email}
                style={{ borderColor: '#f5dad3', borderWidth: 1, borderRadius: 10, height: 50, paddingLeft: 15, fontSize: 18 }}
            />
            <TextInput
                placeholder="Briefly tell us your problem ... type here"
                // onChangeText={(text) => setEmail(text)}
                // value={email}
                multiline={true}
                style={{ borderColor: '#f5dad3', borderWidth: 1, borderRadius: 10, height: 100, marginVertical: 20, paddingLeft: 15, fontSize: 18 }}
            />
            <TouchableOpacity style={{ backgroundColor: '#f5dad3', padding: 10, borderRadius: 50, paddingHorizontal: 15 }}>
                <Text style={{ color: '#624980', fontSize: 16, fontWeight: '500', textAlign: 'center' }}>Appointment</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', flex: 1 }}>
                <TouchableOpacity onPress={handleLogout}>
                    <Image source={require('../Assets/house.png')} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout}>
                    <Image source={require('../Assets/records.png')} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={{ alignItems: 'center' }}>
                    <Image source={require('../Assets/discussion.png')} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                    <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center' }}>Counselling</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </View>

    );
};

export default Appointment