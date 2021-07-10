import React from 'react';
import "./Widgets.css"
import {FiberManualRecord, Info} from "@material-ui/icons";

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__article_left">
                <FiberManualRecord />
            </div>
            <div className="widgets__article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>

            {newsArticle("My news", "Top news - 9099 readers")}
            {newsArticle("My news", "Top news - 9099 readers")}
            {newsArticle("My news", "Top news - 9099 readers")}
            {newsArticle("My news", "Top news - 9099 readers")}
        </div>


    );
}

export default Widgets;
