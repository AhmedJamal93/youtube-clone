import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg" 
                    alt="" 
                />
            </div>
            <div className="header__search">
                <input placeholder="Search" type="text"/>
                <SearchIcon className="header__searchButton"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
