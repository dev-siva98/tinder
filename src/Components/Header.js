import React from 'react';
import './Header.css'

import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header-icon' />
            </IconButton>
            <img src="https://png2.cleanpng.com/sh/ee382e0c548ff5b544ae179a7404d9e8/L0KzQYm3VsE4N6dwkpH0aYP2gLBuTgRqdpVqip91b3fyPbT2jgB2fJZ3Rdtsb372PcXwjvRmel46eqQBMUflc4S5g8g1Ol8ASKg8M0m8RYK8UskzOmQ2SKI7MEixgLBu/kisspng-tinder-logo-computer-icons-tinder-5b2617bc32c842.906339951529223100208.png" alt="tinder" className="header-logo" />
            <IconButton>
                <ForumIcon fontSize='large' className='header-icon' />
            </IconButton>
        </div>
    )
}

export default Header
