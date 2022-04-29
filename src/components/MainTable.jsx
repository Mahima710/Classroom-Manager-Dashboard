import React from 'react'
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Eye from "../assets/Images/Eye.svg"
import MainTableData from "../Data/MainTableData"
import styled from 'styled-components';
import { withStyles } from '@mui/styles';
import {Tab} from "../components/Tab"
import {useNavigate} from "react-router-dom"

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 0
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    height: 0,
    padding: "0 !important",
    cursor:"pointer"
  }
}))(TableCell);

const TD = styled.p`
  font-family : 'Roboto';
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.2px;
`
export const Row = (props) => {
  const navigate = useNavigate();
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open)
              navigate("/teacher")
            }}
          >
            <div style={{width :"15px", height :"15px", background:"white", border:"1px solid #E0E0E0", borderRadius:"50%"}}></div>
          </IconButton>
         
        </StyledTableCell>
        <StyledTableCell onClick={()=>{navigate("/teacher")}} align="center" component="th" scope="row">
          {row.Department}
        </StyledTableCell>
        <StyledTableCell align="center"><Tab access={row.Access} /></StyledTableCell>
        <StyledTableCell align="center"><TD>{row.MemberCount}</TD></StyledTableCell>
        <StyledTableCell align="center"><TD>{row.LastUpdated}</TD></StyledTableCell>
        <StyledTableCell align="center"><img src = {Eye} alt = "none" /></StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}


export const MainTable = () => {
  return (
    <TableContainer component={Paper} style={{  marginTop:"2rem", width : "70vw"}}>
      <Table aria-label="simple table">
        <TableHead style={{background: "#F2F2F2"}}>
          <TableRow style={{height:"2vh !important"}}>
            <TableCell />
            <TableCell align="center">Department/Role Name</TableCell>
            <TableCell align="center">Access Level</TableCell>
            <TableCell align="center">No of members</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {MainTableData.map((row) => (
            <Row key={row.Department} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}