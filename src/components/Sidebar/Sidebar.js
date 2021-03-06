import React from 'react';
import "./Sidebar.css"
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentIem = (topic) => (
        <div className="sidebar__recent-item">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
)



    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                <Avatar src={user.photoURL} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__stat-number">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__stat-number">
                        2,448
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentIem('reactjs')}
                {recentIem('programing')}
                {recentIem('softwareenginnering')}
                {recentIem('design')}
                {recentIem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;