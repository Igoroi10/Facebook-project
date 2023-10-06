import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import ProfileToolBar from '../components/ProfileToolBar'
import ProfileAvatar from '../components/ProfileAvatar'

const View = styled.View`
    align-items: center;
    height: 500px;
`
const Profile = () => {
    return(
        <View>
            <ProfileToolBar/>
            <ProfileAvatar/>
        </View>
    )
}

export default Profile