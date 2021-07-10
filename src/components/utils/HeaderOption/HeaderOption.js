import React from "react";
import "./HeaderOption.css"
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "../../../features/userSlice";

const HeaderOption = ({avatar, Icon, title, onClick}) => {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="header-option">
            {Icon && <Icon className="header-option__icon"/>}
            {avatar && (
                <Avatar className="header-option__icon" src={user?.photoURL}>
                    {user?.email[0]}</Avatar>)}
            <h3 className="header-option__title">{title}</h3>
        </div>
    );
}

export default HeaderOption;
