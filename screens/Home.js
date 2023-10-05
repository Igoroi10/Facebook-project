import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'

import ToolBar from '../components/ToolBar'
import MainSeparator from '../components/MainSeparator'
import Users from '../components/Users'
import Story from '../components/Story'

const View = styled.View`
    align-items: center;
    height: 500px;
`
const Home = () => {
    return(
        <View>
            <ToolBar/> 
            <MainSeparator/> 
            <Users/>
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
        </View>
    )
}

export default Home