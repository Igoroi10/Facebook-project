import React from "react";
import styled from "styled-components/native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from "./Avatar";

const Container = styled.View`
    width: 100%;
    height: 92px;
    background-color: #3b5998;
`
const Row = styled.View`
    flex-direction: row;
    background: #FFFFFF;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`
const Input = styled.TextInput`
    height: 40px;
    width: 85%;
    padding: 0 8px;
    border: 1px solid #DDD;
    margin: 10px;
    border-radius: 30px;
`


const ProfileToolBar = () => {
    return (
        <Container>
            <Row>
                <MaterialCommunityIcons name='video-account' size={20} color='#F44337'/>
                <Input placeholder='¿Qué estás pensando?'/>
            </Row>
        </Container>
    )
}

export default ProfileToolBar