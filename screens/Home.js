import React from 'react'
import {Text, ScrollView} from 'react-native'
import styled from 'styled-components'

import ToolBar from '../components/ToolBar'
import MainSeparator from '../components/MainSeparator'
import Users from '../components/Users'
import Story from '../components/Story'
import Post from '../components/Post'


const View = styled.View`
    align-items: center;
`
const Home = () => {
    return(
            <View>
                <ScrollView>
                    <ToolBar/> 
                    <MainSeparator/> 
                    <Users/>
                    <MainSeparator/>
                    <Story/>
                    <MainSeparator/>
                    <Post/>
                </ScrollView>
            </View>
    )
}

export default Home