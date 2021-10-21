import Extension from './Extension'
import Leftmenu from './Leftmenu'
import Logoshowy from './Logoshowy'
import styled from 'styled-components'
import { useState } from 'react'


function Leftsidebar() {

const MenuStyle = styled.div`
height: 100%;
display: flex;
margin-block: 0;
flex-direction: column;
align-items: center;
justify-content: stretch;
width: 100%;
background-color: #363636;
`
    return (
        <MenuStyle>
            <Extension />
            <Leftmenu />
            <Logoshowy />
        </MenuStyle>
    )
}

export default Leftsidebar