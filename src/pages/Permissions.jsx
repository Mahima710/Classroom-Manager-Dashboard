import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Button } from '../components/Button'
import Pencil from "../assets/Images/Pencil.svg"
import Delete from "../assets/Images/Delete.svg"
import {MainTable} from "../components/MainTable"
import styled from "styled-components"

const Root = styled.div`
    clear : both;
    width : 80vw;
    float : right;
    margin-top : 1rem;
`
const Options = styled.img `
    width : 1.8rem;
    margin-left : 1.7rem;
`

export const Permissions = () => {
  return (
    <div>
        <Sidebar />
        <Header />
        <Root>
            <div style={{display:"flex", marginTop:"1.4rem",}}>
                <Button />
                <Options src ={Pencil} alt ="edit" />
                <Options src ={Delete} alt ="Delete" />
            </div>
            <MainTable />
            
        </Root>
    </div>
  )
}
