import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import Switch from '@mui/material/Switch';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { withStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';

import {Tab} from "../components/Tab"
import Open from "../assets/Images/AddCircle.svg"
import Close from "../assets/Images/CloseCircle.svg"
import CollapsableTableData from '../Data/CollapsableTableData';

    


const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 0
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    height: 0,
    padding: "0 !important"
  }
}))(TableCell);

const TD = styled.p`
  font-family : 'Roboto';
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.2px;
`

const Desc = styled.p`
    color: #BDBDBD;
    margin:0;
    margin-top:3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
`
const Label = styled.p`
    margin : 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #000000;
`

export const Row = (props) => {
  const [value, setValue] = React.useState('All Access');
  const handleChange = (event) => {
        setValue(event.target.value);
    };
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
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
            }}
          >
            {open ? <img src={Close} alt = "Collapse" /> :  <img src={Open} alt = "Open" /> }
          </IconButton>
        </StyledTableCell>
        <StyledTableCell align="center" component="th" scope="row">
          {row.Department}
        </StyledTableCell>
        <StyledTableCell align="center"><Tab access={row.Access} /></StyledTableCell>
        <StyledTableCell align="center">
            <div style={{display:"flex"}}>
            {row.Summary.map((item)=>{
                return (
                        <>
                            <TD style={{borderRight:"1px solid #E0E0E0", color:"black", padding:"0px 6px"}}>{item}</TD>
                        </>
                )
            })}
            </div>
        </StyledTableCell>
        <StyledTableCell align="center"><TD>1 min ago</TD></StyledTableCell>
        <Switch {...label} color="success" />        
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
             <p style={{marginLeft :"10vw"}}>All aspects in the financial details module</p>
             <div style={{display:"flex", width:"40vw", margin:"auto"}}>
             <div style={{height:"30vh", width:"20vw", borderRight:"1px solid #E0E0E0"}}>
                 <p>Access Control</p>
                 <FormControl>
                <RadioGroup
                    onChange={handleChange}
                >
                    <div style={{display:"flex"}}>
                        <FormControlLabel value={value} control={<Radio color="warning" />} />
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <Label>All Access</Label>
                            <Desc>Can access data all time</Desc>
                        </div>
                    </div>
                    <div style={{display:"flex", marginTop:"2rem"}}>
                        <FormControlLabel value={value} control={<Radio color="warning" />} />
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <Label>Restricted Access</Label>
                            <Desc>Can access only assigned or created items</Desc>
                        </div>
                    </div>
                </RadioGroup>
                </FormControl>
             </div>
             <div style={{height:"10vh", width:"20vw", marginLeft :"2.5rem"}}>
                <p >Permissions</p>
                <div style={{display:"flex"}}>
                    <FormControlLabel label="View items in access" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color:"#B73A3A"  } }}/>}/>
                </div>
                <div style={{display:"flex"}}>
                    <FormControlLabel label="Edit items in access" control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color:"#B73A3A"  } }}/>}/>
                </div>
                <div style={{display:"flex"}}>
                    <FormControlLabel label="Create items in access" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color:"#B73A3A" }}}/>}/>
                </div>
                <div style={{display:"flex"}}>
                    <FormControlLabel label="Delete items in access" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color:"#B73A3A"  } }}/>}/>
                </div>
             </div>
             </div>
            </Box>
          </Collapse>
        </StyledTableCell>
                  </StyledTableRow>
    </React.Fragment>
  );
}


export const CollapsableTable = () => {
  return (
    <TableContainer component={Paper} style={{  marginTop:"2rem", width : "70vw", marginBottom:"2rem"}}>
      <Table aria-label="simple table">
        <TableHead style={{background: "#F2F2F2"}}>
          <TableRow style={{height:"2vh !important"}}>
            <TableCell />
            <TableCell align="center">Department/Role Name</TableCell>
            <TableCell align="center">Access Level</TableCell>
            <TableCell align="center">Summary</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {CollapsableTableData.map((row) => (
            <Row key={row.Department} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}