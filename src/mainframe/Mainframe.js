import React from "react";
import Header from "./Header";
import './Mainframe.css';
import Posts from "./Posts";

export default function Mainframe () { 
    return ( 
        <div className="main"> 
            <Header />
            <Posts />
            </div>
    )
}