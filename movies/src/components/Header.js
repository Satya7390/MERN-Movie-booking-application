import React, { Component } from 'react'
import {AppBar, Box, Toolbar} from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
           <Box width={'20%'}>
            <MovieFilterIcon/>
           </Box>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
export default Header