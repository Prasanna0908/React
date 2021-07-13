import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Devices from './Devices'
import Home from './Home'


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Sidebar() {
    let to;

    return (

        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            to = '/' + selected;
                            if (location.pathname !== to) {


                                { history.push(to) }

                                <Devices />

                                { console.log(to) }

                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">

                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="devices">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Devices
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                        {/* <Route path="/home" component={props => <Home />} /> */}
                        {/* <Route path="/devices" component={props => <Devices />} /> */}

                    </main>
                </React.Fragment>
            )}
            />
        </Router>

    )
}

export default Sidebar;