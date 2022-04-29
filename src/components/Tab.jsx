import React from 'react'
import styled from 'styled-components'

const Tb = styled.div`
    width : 160px;
    height: 30px;
    padding: 1px;
    margin:auto;
    ${props => props.access === 'Restricted Access' && `
        background : rgba(255, 8, 8, 0.3);        
        border: 1px solid #FF0808;
        color: #FF0808;
    `}
    ${props => props.access === 'All Access' && `
        background: rgba(39, 174, 96, 0.3);    
        border: 1px solid #27AE60;
        color: #27AE60;
    `}
    ${props => props.access === 'No Access' && `
        background: #F2F2F2;
        border: 1px solid #BDBDBD;
        color: #BDBDBD;
    `}
    border-radius: 20px;
`

const Content = styled.p`
    height: -webkit-fill-available;
    margin: auto;
    margin-top: 4px;
`

export const Tab = ({access}) => {
  return (
    <Tb access = {access}>
        <Content>{access}</Content>
    </Tb>
  )
}
