import React from 'react';
import payel from '../../Images/Payel.jpg'

const Portfolio = () => {
    return (
        <div className='py-10 '>
            <div className="hero min-h-screen bg-rose-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src={payel} alt="" />
                    <div>
                        <h1 className="text-4xl font-bold">About My Self</h1>
                        <h5 className='font-bold py-5'>Name : Payel Tilak</h5>
                        <h5 className='font-bold'>Email Address : payeltilak77@gmail.com</h5>
                        <p className="py-6 font-bold">This is Payel Tilak. I am a student of Bsc in CSE at Port City International University. I want to go Web developer. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2022 . I enjoy creating beautifully designed, intuitive and functional websites. I try to give time to hard work. Thanks to Programming hero team and specially thanks to Jhankar Mahbub vaiya to give me and us wonderful opportunity for web development site. I learnt html css bootstrap tailwind javascript node.js react and back end site. And I am very happy to applying its anywhere. My another dream is I will want to go Canada for higher studies.
                        </p>
                        <h4 className='font-bold'>My create Web Sites</h4>
                        <div>
                            <a href="https://gracious-brown-4aa738.netlify.app/">https://gracious-brown-4aa738.netlify.app/</a> <br/>
                            <a href="https://jazzy-cannoli-5f5eb8.netlify.app/">https://jazzy-cannoli-5f5eb8.netlify.app/</a><br/>
                            <a href="https://comfy-brigadeiros-337e5a.netlify.app/home">https://comfy-brigadeiros-337e5a.netlify.app/home</a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;