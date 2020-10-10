import React from 'react';

// Sidebar import
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
                                <FontAwesomeIcon icon={faHome}/>                               
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
        
                        <NavItem eventKey="clothes">
                            <NavIcon>
                                <FontAwesomeIcon icon={faTshirt}/>
                            </NavIcon>
                            <NavText>
                                Clothes
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
                                <FontAwesomeIcon icon={faMobileAlt}/>
                            </NavIcon>
                            <NavText>
                                Electronics
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
                                <FontAwesomeIcon icon={faBlenderPhone}/>
                            </NavIcon>
                            <NavText>
                                Household Appliances
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
                                <FontAwesomeIcon icon={faVolleyballBall}/>
                            </NavIcon>
                            <NavText>
                                Sports Equipment
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