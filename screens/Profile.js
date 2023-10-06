import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import ProfileToolBar from '../components/profileToolBar'
import profileAvatar from '../components/profileAvatar'

const View = styled.View`
    align-items: center;
    height: 500px;
`
const Profile = () => {
    return(
        <View>
            <ProfileToolBar/>
            <profileAvatar/>
        </View>
    )
}

export default Profile