import React from 'react';

// Sidebar import
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//NPM Imports
import {Link} from 'react-router-dom';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faTshirt} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faBlenderPhone} from "@fortawesome/free-solid-svg-icons";
import {faVolleyballBall} from "@fortawesome/free-solid-svg-icons";

const Sidebar =() => {
    return (
        <div>
            <SideNav >
                <SideNav.Toggle />
                    <SideNav.Nav>
        
                        <NavItem eventKey="home">
                            <NavIcon>
                                <Link to='/home'>
                                    <FontAwesomeIcon icon={faHome}/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to='/home'>
                                    Home
                                </Link>
                            </NavText>
                        </NavItem>
        
                        <NavItem eventKey="clothes">
                            <NavIcon>
                                <Link to='/clothes'>
                                    <FontAwesomeIcon icon={faTshirt}/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to='/clothes'>
                                    Clothes
                                </Link>
                            </NavText>
                            <NavItem eventKey="clothes/men">
                                <NavText>
                                    Men's Wear
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="clothes/women">
                                <NavText>
                                    Women's Wear
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="clothes/kids">
                                <NavText>
                                    Kids Wear
                                </NavText>
                            </NavItem>
                        </NavItem>

                        <NavItem eventKey="electronics">
                            <NavIcon>
                                <Link to="/electronics">
                                <FontAwesomeIcon icon={faMobileAlt}/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to='/electronics'>
                                    Electronics
                                </Link>
                            </NavText>
                            <NavItem eventKey="electronics/mobile">
                                <NavText>
                                    Mobile Phones
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="electronics/laptop">
                                <NavText>
                                    Laptop
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="electronics/tv">
                                <NavText>
                                    TV
                                </NavText>
                            </NavItem>
                        </NavItem>

                        <NavItem eventKey="household">
                            <NavIcon>
                                <Link to='/household'>
                                    <FontAwesomeIcon icon={faBlenderPhone}/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to='/household'>
                                    Household
                                </Link>
                            </NavText>
                            <NavItem eventKey="household/bathroom">
                                <NavText>
                                    Bathroom
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="household/furniture">
                                <NavText>
                                    Furniture
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="household/kitchen">
                                <NavText>
                                    Kitchen
                                </NavText>
                            </NavItem>
                        </NavItem>

                        <NavItem eventKey="sports">
                            <NavIcon>
                                <Link to='/sports'>
                                    <FontAwesomeIcon icon={faVolleyballBall}/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to='/sports'>
                                    Sports
                                </Link>
                            </NavText>
                            <NavItem eventKey="sports/cricket">
                                <NavText>
                                    Cricket
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="sports/football">
                                <NavText>
                                    Football
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="sports/basketball">
                                <NavText>
                                    Basketball
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="sports/volleyball">
                                <NavText>
                                    Volleyball
                                </NavText>
                            </NavItem>
                        </NavItem>

                    </SideNav.Nav>
            </SideNav>
        </div>
    )
}

export default Sidebar;