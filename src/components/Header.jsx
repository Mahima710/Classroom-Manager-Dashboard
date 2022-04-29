import React from 'react'
import styled from 'styled-components'
import Kishor from '../assets/Images/Oval.svg'
import Notifications from '../assets/Images/notifications.svg'
import Help from "../assets/Images/Help.svg"
import Sync from "../assets/Images/sync.svg"
import Wifi from "../assets/Images/WifiLogo.svg"
import ApprovalMatrix from "../assets/Images/MatrixLogo.svg"

const Head = styled.div`
    width: 80vw;
    float : right;
    top : 0;
    position : relative;
    padding: 1.3rem;
    height : 5rem;
    border-bottom : 1px solid rgba(207, 211, 218, 0.5);
    clear :both;
`
const Nav = styled.div`
    width: fit-content;
    float: right;
    display: flex;
    margin-right : 1rem;
}
`
const Logo = styled.img `
    width : 1.8rem;
    height : min-content
`
const User = styled.p`
    margin: 0.5rem 0rem 0rem 0.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color : black;
`
const Toggle = styled.a`
    width: fit-content;
    float: left;
    display: flex;
    margin-bottom : 0.3rem;
    margin-right : 0.5rem;
    padding-right: 0.5rem;
    border-right : 1px solid #CFD3DA;
    text-decoration:none;
}
`
export const Header = () => {
  return (
    <Head>
        <div style={{height:"4rem"}}>
            <Nav>
                <Logo src = {Help} alt = "user" />
            </Nav>
            <Nav>
                <Logo src = {Notifications} alt = "user" />
            </Nav>
            <Nav>
                <Logo src = {Kishor} alt = "user" />
                <User>Kishore</User>
            </Nav>
        </div>
        <div style={{height:"3rem"}}>
            <Toggle href="#" style={{borderBottom:"6px solid #FE0D0D", borderRadius:"3px"}}>
                <Logo src = {Wifi} alt = "user" />
                <User style={{color:"#FE0D0D"}}>Permissions</User>
            </Toggle>
            <Toggle href="#" style={{border:"none"}}>
                <Logo src = {ApprovalMatrix} alt = "user" />
                <User>Approval Matrix</User>
            </Toggle>
            <div style={{float:"right", marginRight:"2rem"}}>
                <Toggle href="#" style={{border:"none"}}>
                    <Logo src = {Sync} alt = "user" />
                    <p style={{  margin: "0.5rem 0rem 0rem 0.5rem", color:"black", fontSize:"12px", fontFamily:"Roboto"}}>Last synced 15 mins ago</p>
                </Toggle>
            </div>
        </div>
    </Head>
  )
}
