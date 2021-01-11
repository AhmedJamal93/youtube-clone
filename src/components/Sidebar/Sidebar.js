import React, { useState } from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar({handleSidebarChange, activetab}) {

    // const [active, setActive] = useState(0)

    return (
        <div className="sidebar">
            {/* <div index={0} onClick={handleSidebarChange}>
                <SidebarRow selected Icon={HomeIcon} title="Home"/>
            </div>
            <div index={1} onClick={handleSidebarChange}>
                <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            </div> */}
            <SidebarRow active={activetab} index={0} onClick={handleSidebarChange} Icon={HomeIcon} title="Home"/>
            <SidebarRow active={activetab} index={1} onClick={handleSidebarChange} Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow active={activetab} index={2} onClick={handleSidebarChange} Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr />
            <SidebarRow active={activetab} index={3} onClick={handleSidebarChange} Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow active={activetab} index={4} onClick={handleSidebarChange} Icon={HistoryIcon} title="History"/>
            <SidebarRow active={activetab} index={5} onClick={handleSidebarChange} Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow active={activetab} index={6} onClick={handleSidebarChange} Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow active={activetab} index={7} onClick={handleSidebarChange} Icon={ThumbUpAltIcon} title="Liked Videos"/>
            <SidebarRow active={activetab} index={8} onClick={handleSidebarChange} Icon={ExpandMoreIcon} title="Show More"/>
            <hr />
        </div>
    )
}

export default Sidebar;
