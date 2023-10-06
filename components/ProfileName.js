import React from "react";
import styled from "styled-components/native"
import fakeProfile from "../data/fakeProfile";

const Title = styled.Text`
    top: 25%;
    font-size: 25px;
    color: #3b5998;
    text-align: center;
`
const ProfileName = () => {
    return(
        <Title>{fakeProfile.name}</Title>
    )
}

export default ProfileName