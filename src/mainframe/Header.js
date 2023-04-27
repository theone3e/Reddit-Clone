import React from "react";
import './Header.css';

import hot from '../components/category/fire-flame-icon-cdr-173853177.jpg';
import top from '../components/category/top.jpg'
import newposts from "../components/category/newpost.png";

export default function Header () {
    return (
    <div className="header">
        <div className="categories">
            <ul>
                <li>
                <a href="/r/popular/hot">
                    <img src={hot} alt="icon for Hot category" /> Hot </a></li>
                <li>
                    <a href="/r/popular/new">
                    <img src={newposts} alt="icon for New category" /> New </a></li>
                <li>
                    <a href="/r/popular/top">
                    <img src={top} alt="icon for Top category" /> Top </a></li>
            </ul>
        </div>
        <div className="header2">

        </div>
    </div>
    )
}