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

const ProfileAvatarPicture = () => {
    return(
        <>
            <UserOnCard>    
                <Photo source={fakeProfile.profile}/>
            </UserOnCard>
        </>
    )

}

export default ProfileAvatarPicture