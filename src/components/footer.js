import"./footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div className="title">
                    <h1>Keebhub</h1>
                    <p> Meet Lindsay, a passionate software engineer with an unwavering love for the world of mechanical keyboards. 
                        In his quest to enhance and share this enthusiasm with others, he embarked on an exciting journey to create
                        a keyboard website that brings multiple brands and enthusiasts together.
                    </p>
                </div>
                <div>
                    <a href="/">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Important Links</h4>
                    <a href = "/">Github</a>
                    <a href = "/">Contact Us</a>
                    <a href = "/">Status</a>
                    <a href = "/">Our Partners</a>
                </div>
                <div className="resources">
                    <h4>Others</h4>
                    <a href = "/">Terms of Service</a>
                    <a href = "/">Privacy Policy</a>
                    <a href = "/">License</a>
                </div>
            </div>

        </div>
    )
}

export default Footer;