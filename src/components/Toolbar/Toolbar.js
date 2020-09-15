import React from 'react';

import './Toolbar.css';
import SideNavButton from '../SideNav/sideNavButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <SideNavButton click={props.sideNavOpenHandler}/>
            </div>
            <div className = "toolbar_navigation_header"><a href="/">Title</a></div>
            <div className="needSomeSpace" />
            <div className = "toolbar_navigation_links">
                <ul>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 2</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default toolbar;
