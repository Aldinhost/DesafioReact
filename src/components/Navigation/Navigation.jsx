import React from 'react';
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import {RiNotificationLine} from "react-icons/ri";
import {useState} from "react";
import {FiSearch} from "react-icons/fi";

const Navigation = (props) => {
    const [showMenu, setshowMenu] = useState(false)

    const toggle = () =>{
        setshowMenu(!showMenu);
    }

  return (
    <header className="header">
        <div className="headerContainer">

            <div className="headerContainer__hamburgerMenu" onClick={()=> props.openMenu()}></div>
            <a href="/" className="headerContainer__logo" >
                <FaDev size="3.125rem"/>
            </a>
            <div className="headerContainer__searchBox">
                <form>
                    <input type="text" placeholder="Search..." aria-label="" />
                </form>
            </div>

            <div className="headerContainer__right">
                <button>Write post</button>
                <i className="hidden-search" id="hidden-search">
                    <FiSearch/>
                </i>
                <i>
                    < BiMessageRoundedCheck />
                </i>
                <i>
                    <RiNotificationLine />
                </i>
                <span onClick={toggle}>
                    <img src="https://picsum.photos/200" alt="" />
                </span>
            </div>
        </div>

        <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"} id="dropdown-menu">
            <ul>
                <li onClick={toggle}>
                    <a href="/profile">
                        <div className="u-name">Cesar Velasquez</div>
                        <small className="u-name-id">@czrvelasquez</small>
                    </a>
                </li>

                <li onClick={toggle}>
                    <a href="/dashboard">Dashboard</a>
                </li>

                <li onClick={toggle}>
                    <a href="/post">Writting a post</a>
                </li>

                <li onClick={toggle}>
                    <a href="/list">Reading List</a>
                </li>

                <li onClick={toggle}>
                    <a href="/settings">Settings</a>
                </li>

                <li onClick={toggle}>
                    <a href="/singout">Singout</a>
                </li>

            </ul>
        </div>

    </header>
    )
}

export default Navigation
