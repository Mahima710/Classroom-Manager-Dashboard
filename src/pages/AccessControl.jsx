import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import Pencil from "../assets/Images/Pencil.svg"
import {CollapsableTable} from "../components/CollapsableTable"
import styled from "styled-components"
import Back from "../assets/Images/Back.svg"
import {Link} from "react-router-dom"

const Root = styled.div`
    clear : both;
    width : 80vw;
    float : right;
    margin-top : 1rem;
`
const Options = styled.img `
    width : 1.2rem;
    margin-left :2rem;
`
const T = styled.p `
    margin-left :0.6rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FE0D0D;
    line-height: 20px;
`
export const AccessControl = () => {
  return (
    <div>
        <Sidebar />
        <Header />
        <Root>
        <div style={{display:"flex", marginTop:"1.4rem",}}>
                <Link to="/" style={{textDecoration:"none", display:"flex"}}>
                    <Options src={Back} alt="back"></Options>
                    <T>Teachers</T>
                </Link>
                <Options src ={Pencil} alt ="edit" />
        </div>
            <CollapsableTable/>
            
        </Root>
    </div>
  )
}

