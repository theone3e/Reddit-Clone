import React from "react";
import './Header.css';

export default function Header () {
    return (
    <div className="header">
        <div className="categories">
            <ul>
                <li><a href="/r/popular"> Popular </a></li>
                <li><a href="/r/hot"> Hot </a></li>
                <li><a href="/r/rising"> Rising </a></li>
                <li><a href="/r/controversial"> Controversial </a></li>
                <li><a href="/r/gilded"> Gilded </a></li>
            </ul>
        </div>
        <div className="header2">

        </div>
    </div>
    )
}