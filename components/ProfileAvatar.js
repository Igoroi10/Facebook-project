import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native"
import fakeProfile from '../data/fakeProfile'


const Container = styled.View`
    width: 100%;
    height: 250px;
    position: relative;
    margin: -30px;
`

const Photo = styled.Image`
    width: 100%;
    height: 100%; 
`

const ProfileAvatar = () => {
    return (
        <Container>
            <Photo source={fakeProfile.background}/>
        </Container>
    )
}




export default ProfileAvatar