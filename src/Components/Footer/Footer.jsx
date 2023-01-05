import footerStyle from "./Footer.module.css"
function Footer() {
    return (
        <div className={footerStyle.container}>

            <div className={footerStyle.foot}>
                <div className={footerStyle.about}>
                    <h2>About us</h2>
                    <p>Ease your business with tools built using IoT and other advanced tech to generate high revenue & even higher profit</p>
                    <div className={footerStyle.socialHandle}>
                        <h4>Let's keep in touch</h4>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                    </div>
                </div>

                <div className="links">
                    <h2>Specifications</h2>
                    <p>F.A.Q</p>
                    <p>Cooking Policies</p>
                    <p>Term and Services</p>
                    <p>Support</p>
                </div>

                <div className={footerStyle.caarrer}>
                    <h2>Carrer</h2>
                    <p>Connected Vehicle Solutions
                        Asset Yield Management Systems
                        Driver Behavior Intelligence App</p>
                </div>


                <div className={footerStyle.newsletter}>
                    <h2>NewsLetter</h2>
                    <hr/>
                    <p>Subscribe to our email list, we hate spam.</p>
                    <input type="email" placeholder="Enter Email" />
                    <br />
                    <br />
                    <button>Submit</button>

                </div>
            </div>

            <div className={footerStyle.end}>
                <p>© 2023, Zoomcar. All rights reserved</p>

            </div>


        </div>

    )
}

export default Footer;