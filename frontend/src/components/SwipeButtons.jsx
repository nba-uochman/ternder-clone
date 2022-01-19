import React from 'react';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Footer() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons_replay'>
                <ReplayIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons_close'>
                <CloseIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons_star'>
                <StarRateIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons_fav'>
                <FavoriteIcon fontSize='large' />
            </IconButton>

            <IconButton className="swipeButtons_flash">
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    );
}

export default Footer;