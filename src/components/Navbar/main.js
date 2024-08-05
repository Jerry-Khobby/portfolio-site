import React from 'react'
import {Box, Container, Grid} from '@mui/material'
import photo from "../../assets/myphoto.jpg"


const NavbarComponent = () => {
  return (
    <div style={{
      borderBottom:"0.5px solid rgba(16,24,47,0.8)",
      backgroundColor:'rgba(16,24,47,0.8)',
      backdropFilter: 'blur(10px)',
      zIndex:'1000',
      position:'fixed',
      top:'0',
      height:'70px',
      left:'0',
      right:'0',
      padding:'10px 0',
    }}>
              <Container sx={{width:'100%'}} className='h-full  '>
           <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Grid item xs = {2}  sm = {3} md = {2} lg = {2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box className="flex items-center justify-center ">
                            <h1 className='text-white font-serif text-2xl cursor-pointer'>JherryDev</h1>
                        </Box>
            </Grid>
            <Grid item xs={2} sm = {3} md = {3} lg = {2} justifyContent={"flex-end"} alignContent={"center"}>
            <div className="w-14 cursor-pointer h-14 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-white">
      <img src={photo} alt="my-profile-picture" className="w-full h-full object-cover" />
    </div>
            </Grid>
           </Grid>
        </Container>

    </div>
    );
}
 
export default NavbarComponent;