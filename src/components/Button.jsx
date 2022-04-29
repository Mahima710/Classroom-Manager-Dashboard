import React from 'react'
import styled from "styled-components"
import Add from "../assets/Images/Plus.svg"

const AddRole = styled.button`
    width : 10rem;
    height: 2.3rem;
    color : white;
    background : #B73A3A;
    display : flex;
    font-family : "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size : 15px;
    align-items: center;
    cursor : pointer;
    border : none;
    padding: 0px;
    border-radius: 5px;
`


export const Button = () => {
  return (
    <AddRole>
        <div style={{display:"inherit", margin:"auto", height:"inherit"}}>
            <img src = {Add} alt ="none" style={{width:"1.4rem"}}></img>
            <p style={{margin:"auto"}}>Add Role</p>
        </div>
    </AddRole>
  )
}
