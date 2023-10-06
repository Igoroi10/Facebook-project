import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native"
import fakeProfile from '../data/fakeProfile'
import ProfileAvatarPicture from "./ProfileAvatarPicture";
import ProfileName from "./ProfileName";


const Container = styled.View`
    width: 100%;
    height: 400px;
    position: relative;
    margin: -30px;
`

const Photo = styled.Image`
    width: 100%;
    height: 200px; 
`

const ProfileAvatar = () => {
    return (
        <Container>
            <Photo source={fakeProfile.background}/>
            <ProfileAvatarPicture/>
            <ProfileName/>
        </Container>
    )
}




export default ProfileAvatar