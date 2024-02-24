import React from 'react'
import "./RelatedDeals.scss"
import Computer from "../../assets/computer.png"
const RelatedDeals = () => {
    return (
        <div className='relatedDeals'>
            <div className='wrapper'>
                <h2>Related deals you might like for</h2>
                <div className='container'>

                    <div className='list'>
                        <div className='first'> <img src={Computer} alt='' />
                        </div>
                        <div className='second'>
                            <span>20% Off</span>
                            <span>Limited time </span>

                        </div>
                        <div className='third'>
                            <h3>Webbuilder1</h3>
                        </div>
                        <div className='forth'>
                            <p>Computer Modern classic with wix support</p>
                            <div className='fifth'>
                                <p>$39.96</p>
                                <span>$49.96</span>
                                <span style={{color:"red"}}>(20% Off)</span>

                            </div>
                            <div className='sixth'>
                                <button>View Deal</button>
                            </div>
                        </div>
                    </div>


                    <div className='list'>
                        <div className='first'> <img src={Computer} alt='' />
                        </div>
                        <div className='second'>
                            <span>20% Off</span>
                            <span>Limited time </span>

                        </div>
                        <div className='third'>
                            <h3>Webbuilder1</h3>
                        </div>
                        <div className='forth'>
                            <p>Computer Modern classic with wix support</p>
                            <div className='fifth'>
                                <p>$39.96</p>
                                <span>$49.96</span>
                                <span style={{color:"red"}}>(20% Off)</span>

                            </div>
                            <div className='sixth'>
                                <button>View Deal</button>
                            </div>
                        </div>
                    </div>


                    <div className='list'>
                        <div className='first'> <img src={Computer} alt='' />
                        </div>
                        <div className='second'>
                            <span>20% Off</span>
                            <span>Limited time </span>

                        </div>
                        <div className='third'>
                            <h3>Webbuilder1</h3>
                        </div>
                        <div className='forth'>
                            <p>Computer Modern classic with wix support</p>
                            <div className='fifth'>
                                <p>$39.96</p>
                                <span>$49.96</span>
                                <span style={{color:"red"}}>(20% Off)</span>

                            </div>
                            <div className='sixth'>
                                <button>View Deal</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container2'>
                    <p>Sign up and get exclusive special deals</p>
                    <div>
                        <input type='text'/>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedDeals;