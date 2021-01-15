import React from 'react';
import './SidebarRow.css';

function SidebarRow({ Icon, title, onClick, index, active }) {

    const changeIndex = () => {
        {onClick(index, title)}
    }
    return (
        <div className={`sidebarRow ${active === index && 'selected'}`}  onClick={changeIndex}>
           <Icon className="sidebarRow__icon"/>
           <h2 className="sidebarRow__title" >{title}</h2> 
        </div>
    )
}


export default SidebarRow
