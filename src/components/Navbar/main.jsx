import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { BsFileEarmarkPdf, BsGithub } from "react-icons/bs";
import { Tooltip } from 'react-tooltip';

const NavbarComponent = () => {
  return (
    <div style={{
      borderBottom: "0.5px solid rgba(16,24,47,0.8)",
      backgroundColor: 'rgba(16,24,47,0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: '1000',
      position: 'fixed',
      top: '0',
      height: '70px',
      left: '0',
      right: '0',
      padding: '10px 35px',
    }}>
      <Container sx={{ width: '100%' }} className='h-full '>
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="space-between">
          <Grid item xs={2} sm={3} md={2} lg={2} display="flex" justifyContent="center" alignItems="center">
            <Box>
              <h1 className='text-white font-serif text-xl cursor-pointer' style={{fontFamily:'Fira Code'}}>JherryDev</h1>
            </Box>
          </Grid>
          <Grid item xs={2} sm={3} md={2} lg={2} display="flex" gap="10px" justifyContent="center" alignItems="center">
         <div className='flex mt-26 space-x-4 '>
        <a 
          href="https://drive.google.com/file/d/17YFKflQxGggZ4ywoxQuwWSJmWmzgHQVN/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Download Resume" 
          className="bg-gray-700 p-3 rounded hover:bg-gray-800 transition"
          data-tooltip-id="downloadResume"
        >
          <BsFileEarmarkPdf className="text-white text-sm" />
        </a>
        <Tooltip id="downloadResume" content="Resume" />
        <a 
          href="https://github.com/Jerry-Khobby" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub" 
          className="bg-gray-700 p-3 rounded hover:bg-gray-800 transition"
          data-tooltip-id="Github"
        >
          <BsGithub className="text-white text-sm" />
        </a>
        <Tooltip id="Github" content="Github" />
      </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NavbarComponent;
