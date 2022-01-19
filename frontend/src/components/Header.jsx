import React from 'react';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import Logo from "../images/tender_logo.jpg";


function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' />
            </IconButton>
            <IconButton>
                <img src={Logo} className="tender_logo" alt="tender-logo" />
            </IconButton>
            <IconButton>
                <ForumIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Header;
