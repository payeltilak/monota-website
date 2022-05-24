import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-sky-800 text-white my-5">
                <div>
                    {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="https://opencart.opencartworks.com/themes/so_monota/layout11/image/catalog/logo-footer.png"></path></svg> */}
                    <img className='bg-dark' src="https://opencart.opencartworks.com/themes/so_monota/layout11/image/catalog/logo-footer.png" alt="" />
                    <p>MONOTA INDUSTRIES LIMITED<br /></p>
                    <p>PHONE NUMBER <br/>
                        +3 (465) 137-8763</p> <br />
                    <p>EMAIL ADDRESS <br/>
                       monota789@gmail.com</p>
                </div>
                <div>
                    <span class="footer-title">CUSTOMER SERVICES</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;