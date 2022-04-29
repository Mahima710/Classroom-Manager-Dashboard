import React from 'react'
import LOGO from '../assets/Images/LOGO.svg'
import Projects from "../assets/Images/ProjectsLogo.svg"
import Suitcase from "../assets/Images/SuitCase.svg"
import PermissionLogo from "../assets/Images/PermissionsLogo.svg"
import styled from 'styled-components'

const SideBar = styled.div `
    float : left;
    background : #FCFBFF;
    width : 17vw;
    height : 100vh;
    marginLeft : 3rem;
    position : absolute;
`
const Row = styled.a `
    background : ${({heading})=>(heading? "#FFFFFF" : "inherit")};
    height : 2rem;
    padding : 1rem 2rem;
    float : left;
    display : flex;
    text-decoration : none;
    width : 12.5vw;
`
const Logo = styled.img `
    width : 2.5rem;
`
const Content = styled.p`
    color :  ${({heading})=>(heading? "black" : "#828282")};
    font-weight : ${({heading})=>(heading? 700 : 400 )};
    line-height: 21px;
    font-style: normal;
    letter-spacing: 0.2px;
    margin: auto;
    font-size : 18px;
    font-family: ${({heading})=>(heading? "Poppins" : "Roboto")};
    text-align : left;

    &:active {
        color : red !important;
    }
`



export const Sidebar = () => {
  return (
    <div>
        <SideBar>
            <div>
                <Row style={{padding : "2rem 2rem"}} href = "#">
                    <Logo src = {LOGO} alt = "mahima" />
                    <Content heading = {true}>Classroom <br></br> Manager</Content>
                </Row>
                <Row href = "#">
                    <Logo src = {Projects} alt = "mahima" />
                    <Content >Projects</Content>
                </Row>
                <Row style={{background : "#F1D8D8", borderLeft : "7px solid #FE0D0D"}} href = "#">
                    <Logo  src = {PermissionLogo} alt = "mahima" />
                    <Content style={{color:"#FE0D0D"}}>Classrooms</Content>
                </Row>
                <Row href = "#">
                    <Logo src = {Suitcase} alt = "mahima" />
                    <Content>Permissions</Content>
                </Row>
            </div>
        </SideBar>
    </div>
  )
}
