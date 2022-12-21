import Logo from '../assets/logo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-infor">
                <div className="footer-intro">
                    <div className="">
                        <img className='footer-logo' src = {Logo} alt = "logo" />
                    </div>
                    <div className='footer-cont'>PVL Shop - The best place to get online accounts for cheap</div>
                </div>
                <div className="footer-explore">
                    <div className="footer-sup">Explore</div>
                    <div className='footer-explore-sub'>
                        <div className='footer-cont'>Marketplace</div>
                        <div className='footer-cont'>How it works?</div>
                        <div className='footer-cont'>Support</div>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <div className='footer-sup'>Join our weekly digest</div>
                    <div className='footer-subscribe-sub'>
                        <div className='footer-cont'>Get exclusive promotions & updates straight to your inbox.</div>
                        <div className='subscribe-form'>
                            <div className='subscribe-form-input'>Enter your email here</div>
                            <div className='subscribe-form-btn'>
                                <div className='subscribe-btn-cont'>Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-reserve">Ⓒ All rights reserved, PVL Shop</div>
        </div>
    )
}