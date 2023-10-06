import React from "react";
import styled from "styled-components/native"
import fakeProfile from "../data/fakeProfile";

const Title = styled.Text`
    top: 85%;
    font-size: 12px;
    color: #424840;
    align-items: center;
`
const ProfileName = () => {
    return(
        <Text>{fakeProfile.name}</Text>
    )
}

export default ProfileName