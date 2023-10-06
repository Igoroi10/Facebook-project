import React from "react";
import styled from "styled-components/native"
import fakeProfile from '../data/fakeProfile'


const Container = styled.View`
    width: 100%;
    height: 300px;
    position: relative;
`

const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 250px; 
`

const profileAvatar = () =>{
    return(
        <Container>
            <Photo source={fakeProfile.background}/>
        </Container>
    )
}

export default profileAvatar