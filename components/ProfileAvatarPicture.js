import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import fakeProfile from '../data/fakeProfile'


const UserOnCard= styled.View`
    position: absolute;
    top: 125px;
    left: 125px;
    background: #FFFFFF;
    width: 150px;
    height: 150px;
    border-radius: 80px;
    border: 5px #3b5998;

`
const Photo = styled.Image`
    width: 100%;
    height: 100%; 
    border-radius: 80px;
    border-color: #3b5998;
`
const Icon = styled.Image`
    top: 80%;
    left: 80%;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #10D24B;
    border: 2px solid #FFFFFF;
`

const ProfileAvatarPicture = () => {
    return(
            <UserOnCard>    
                <Photo source={fakeProfile.profile}/>
                <Icon/>
            </UserOnCard>
    )
}

export default ProfileAvatarPicture