import { IconButton } from '@mui/material'
import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';


import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='buttonRepeat'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='buttonLeft'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='buttonStar'>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className='buttonRight'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='buttonLight'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
