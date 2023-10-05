import React from "react";
import {ScrollView} from 'react-native';
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from "./Avatar.js";
import fakeUsers from '../data/fakeUsers.js'

const Container= styled.View`
    width: 100%; 
    height: 40px;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
`
const Room= styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border: 1px solid #82b1dd;
    border-radius: 20px;
    padding: 0 15px;
    margin-right: 12px;
`
const Text = styled.Text`
    color: #1777ff;
    font-size: 12px;
    padding-left: 6px;
`
const User = styled.View`
    margin-right: 12px;
`
const Users = () => {
    return(
        <Container>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingLeft: 12}}
            >
                <Room>
                    <MaterialCommunityIcons name='video-plus' size={26} color='#A748EE'/>
                    <Text>Crear sala</Text>
                </Room>
                {fakeUsers.map((el, i) => {
                    return(
                        <User key={i.toString()}>
                            <Avatar source={el.source} online={el.online}/>
                        </User>
                    )
                })}
            </ScrollView>
        </Container>
    )
}

export default Users