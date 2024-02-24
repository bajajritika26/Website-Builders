import React from 'react'
import "./Main.scss"
import Computer from "../../assets/computer.png"
import BlueDownArrow from "../../assets/BlueDownArrow.png"
import Stars5 from "../../assets/Stars5.png"
// import Stars45 from "../../assets/Stars45"
import Stars45 from "../../assets/Stars45.png"
import Stars4 from "../../assets/stars4.png"
import Cup from "../../assets/Cup.png"
import Diamond from "../../assets/Diamond.png"
import BlueTick from "../../assets/BlueTick.png"
const Main = () => {
    return (
        <div className='main'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='side'>
                    <p><img src={Cup} alt=''/>Best Choice
                        </p>
                    <span className='number'>1</span>
                    </div>
                       
                    
                    <div className='first'>
                        <img src={Computer} alt='' />
                        <span>Builder 1</span>
                    </div>
                    <div className='second'>
                        <div><p><span className='secondhead'>WixPro 72-inch Responsive Builder-</span> Comprehension Digital Platform Creation Tool, Streamlined Design Interface for Professsional Websites and Online Stores (Black/Blue)</p></div>
                        <div>
                            <span className='secondhead2'>Main highlights</span>
                            <p style={{ marginLeft: "13px" }}>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
                            <span style={{ color: "rgba(27, 136, 244, 1)", display: "flex", gap: "2px", fontWeight: "400", fontSize: "18px", alignItems: "center" }}>Show more <img src={BlueDownArrow} alt='' /></span>
                        </div>
                    </div>
                    <div className='third'>
                        <div className='third1'>
                            <span>9.8</span>
                            <p>Exceptional</p>

                            <img src={Stars5} alt='' />

                        </div>

                        <div >
                            <button>View</button>
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div className='side'>
                    <p><img src={Diamond} alt=''/>Best Value
                        </p>
                    <span className='number'>2</span>
                    </div>
                
                    <div className='first'>
                   
                       
                        <img src={Computer} alt='' />
                        <span>Builder</span>
                    </div>
                    <div className='second'>
                        <div><p><span className='secondhead'> SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p></div>
                        <div>
                            <span className='secondhead2'>Main highlights</span>
                            <p style={{ marginLeft: "13px" }}>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                            <span style={{ color: "rgba(27, 136, 244, 1)", display: "flex", gap: "2px", fontWeight: "400", fontSize: "18px", alignItems: "center" }}>Show more <img src={BlueDownArrow} alt='' /></span>
                        </div>
                    </div>
                    <div className='third'>
                        <div className='third1'>
                            <span>9.5</span>
                            <p>Excellent</p>

                            <img src={Stars45} alt='' />

                        </div>

                        <div >
                            <button>View</button>
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div className='side'>
                <span className='number ifNoTag'>3</span>

                    </div>
                    <div className='first'>
                    
                       
                        <img src={Computer} alt='' />
                        
                        <span>Builder 1</span>
                    </div>
                    <div className='second'>
                        <div><p><span className='secondhead'>WixPro 72-Inch Responsive Website Builder-</span>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p></div>
                        <div>
                            <span className='secondhead2'>Main highlights</span>
                            <p style={{ marginLeft: "13px" }}>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
                            <span style={{ color: "rgba(27, 136, 244, 1)", display: "flex", gap: "2px", fontWeight: "400", fontSize: "18px", alignItems: "center" }}>Show more <img src={BlueDownArrow} alt='' /></span>
                        </div>
                    </div>
                    <div className='third'>
                        <div className='third1'>
                            <span>9.3</span>
                            <p>Exceptional</p>

                            <img src={Stars5} alt='' />

                        </div>

                        <div >
                            <button>View</button>
                        </div>

                    </div>
                </div>

                <div className='container'>
                    <div className='side'>
                    <span className='number ifNoTag2'>4</span>

                    </div>
                    <div className='first'>
                    
                        <img src={Computer} alt='' />
                       
                        <span>CDK</span>
                    </div>
                    <div className='second'>
                        <div><p><span className='secondhead'>CCDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                        <span className='off'>26% Off</span>
                        </div>
                        <div>
                            <span className='secondhead2'>Main highlights</span>
                            <div className='list'>
                                <p><span>9.9</span>Building Responsive</p>
                                <p><span>8.9</span>Cool</p>
                                <p><span>8.9</span>Docs</p>

                            </div>
                            <div className='list2'>
                                <h3>Why we love it</h3>
                                <span><img src={BlueTick} alt=''/>Documentation</span>
                                <span><img src={BlueTick} alt=''/>Easy Use</span>
                                <span><img src={BlueTick} alt=''/>Out of box</span>
                            </div>

                            <span style={{ color: "rgba(27, 136, 244, 1)", display: "flex", gap: "2px", fontWeight: "400", fontSize: "18px", alignItems: "center" }}>Show more <img src={BlueDownArrow} alt='' /></span>
                        </div>
                    </div>
                    <div className='third'>
                        <div className='third1 third2'>
                            <span>9.1</span>
                            <p>Very Good</p>

                            <img src={Stars4} alt='' />

                        </div>

                        <div >
                            <button className='btn'>View</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main