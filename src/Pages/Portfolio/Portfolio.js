import React from 'react';
import payel from '../../Images/Payel.jpg'

const Portfolio = () => {
    return (
        <div className='py-10 '>
            <div className="hero min-h-screen bg-rose-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src={payel} alt="" />
                    <div>
                        <h1 className="text-4xl font-bold"> My Self</h1>
                      
                       
                        <p className="py-6 font-bold">This is Payel Tilak. I am a student of Bsc in CSE at Port City International University. I want to go Web developer. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2022 . I enjoy creating beautifully designed, intuitive and functional websites. I try to give time to hard work. Thanks to Programming hero team and specially thanks to Jhankar Mahbub vaiya to give me and us wonderful opportunity for web development site. I learnt html css bootstrap tailwind javascript node.js react and back end site. And I am very happy to applying its anywhere. My another dream is I will want to go Canada for higher studies.
                        </p>
                        <h5 className='font-bold'>Email Address : payeltilak77@gmail.com</h5>
                        <h4 className='font-bold text-3xl py-10 text-green'>My create Web Sites</h4>
                       
                        <div>
                            <a target="_blank" href="https://gracious-brown-4aa738.netlify.app/">https://gracious-brown-4aa738.netlify.app/</a> <br/>
                            <a target="_blank" href="https://jazzy-cannoli-5f5eb8.netlify.app/">https://jazzy-cannoli-5f5eb8.netlify.app/</a><br/>
                            <a target="_blank" href="https://hungry-edison-e37251.netlify.app/">https://hungry-edison-e37251.netlify.app/</a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;