import React from 'react'
import "./Header.scss"
import DarkDownArrow from "../../assets/DarkDownArrow.png";
import Tick from "../../assets/Tick.png";
import Info from "../../assets/Info.png";

const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <h1>Best Website Builders in the US</h1>
                <div className='container'>
                    <div className='left'>
                        <span><img src={Tick} alt='' /></span>
                        <span>Last Updated</span>
                        <span>-</span>
                        <span>February 22, 2020</span>
                        <span><img src={Info} alt='' /></span>
                        <span>Advertising Disclosures</span>

                    </div>
                    <div className='left'>
                        <span>Top Relevant</span>
                        <span><img src={DarkDownArrow} alt='' /></span>
                    </div>
                </div>
                <div className='container2'>
                    <span>Tools</span>
                    <span>AWS Builder</span>
                    <span>Start Build</span>
                    <span>Build Supplies</span>
                    <span>Tooling</span>
                    <span>Blue Hosting</span>


                </div>
                <div className='container3'>
                    <span>Home</span>
                    <span>></span>
                    <span>Hosting for all</span>
                    <span>></span>
                    <span>Hosting</span>
                    <span>></span>
                    <span>Hosting6</span>
                    <span>></span>
                    <span>Hosting6</span>



                </div>
            </div>
        </div>
    )
}

export default Header