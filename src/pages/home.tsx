import { Link } from 'react-router-dom'

import Hero from '../assets/hero.png'
import Rocket from '../assets/rocket.png'
import Netflix from '../assets/netflix.png'
import Spotify from '../assets/spotify.png'
import Discord from '../assets/discord.png'
import Crunchyroll from '../assets/crunchyroll.png'
import Eye from '../assets/eye.png'
import Register_icon from '../assets/register.png'
import Explore_icon from '../assets/explore.png'
import Buy_icon from '../assets/buy.png'
import Subscribe from '../assets/subscribe.png'
import Email_icon from '../assets/email.png'

import './home.scss'

export default function Home() {
    return(
        <div className="home">
            <div className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className='hero-content-sup'>
                            <div>Discover & Buy </div>
                            <div>Digital</div>
                            <div>Accounts</div>
                        </div>
                        <div className='hero-content-sub'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sodales neque et porta. Donec ut diam dignissim
                        </div>
                        <Link to = "/marketplace">
                            <div className='hero-button'>
                                <div className=''>
                                    <img className='hero-button-icon' src = {Rocket} alt = "rocket" />
                                </div>
                                <div className='hero-button-text'>Get Started</div>
                            </div>
                        </Link>
                        <div className='hero-addition-infor'>
                            <div className='total-sale'>
                                <div className='total-sale-sup'>240k +</div>
                                <div className='total-sale-sub'>Total Sale</div>
                            </div>
                            <div className='total-sale'>
                                <div className='total-sale-sup'>240 +</div>
                                <div className='total-sale-sub'>Account Types</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="hero-bg" src = {Hero} alt = "hero" />
                    </div>
                </div>
            </div>
            <div className='top-selling'>
                <div className='top-selling-head'>
                    <div className='top-selling-head-content'>
                        <div className='top-selling-content-sup'>
                            <div className='top-selling-content-sup-style'>Top Selling</div>
                        </div>
                        <div className='top-selling-content-sub'>
                            <div className='top-selling-content-sub-style'>Check out OUR best selling accounts</div>
                        </div>
                    </div>
                    <div className='top-selling-button-container'>
                        <Link to = "/marketplace">
                            <div className='top-selling-button'>
                                <div>
                                    <img src = {Rocket} alt = "rocket" className='hero-button-icon' />
                                </div>
                                <div className='hero-button-text'>Explore More</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='top-selling-accounts'>
                    <div className='top-selling-card'>
                        <div className='top-selling-ranking'>
                            <div className='top-selling-ranking-number'>1</div>
                        </div>
                        <div>
                            <img src = {Netflix} alt = "netflix"  className='top-selling-netflix' />
                        </div>
                        <div className='top-selling-card-content'>
                            <div className='top-selling-card-name'>Netflix</div>
                            <div className='top-selling-price'>
                                <div className='top-selling-price-key'>From: </div>
                                <div className='top-selling-price-val'>$ 5.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='top-selling-card'>
                        <div className='top-selling-ranking'>
                            <div className='top-selling-ranking-number'>2</div>
                        </div>
                        <div>
                            <img src = {Spotify} alt = "netflix"  className='top-selling-netflix' />
                        </div>
                        <div className='top-selling-card-content'>
                            <div className='top-selling-card-name'>Spotify</div>
                            <div className='top-selling-price'>
                                <div className='top-selling-price-key'>From: </div>
                                <div className='top-selling-price-val'>$ 5.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='top-selling-card'>
                        <div className='top-selling-ranking'>
                            <div className='top-selling-ranking-number'>3</div>
                        </div>
                        <div>
                            <img src = {Discord} alt = "netflix"  className='top-selling-netflix' />
                        </div>
                        <div className='top-selling-card-content'>
                            <div className='top-selling-card-name'>Discord Nitro</div>
                            <div className='top-selling-price'>
                                <div className='top-selling-price-key'>From: </div>
                                <div className='top-selling-price-val'>$ 5.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='top-selling-card'>
                        <div className='top-selling-ranking'>
                            <div className='top-selling-ranking-number'>4</div>
                        </div>
                        <div>
                            <img src = {Crunchyroll} alt = "netflix"  className='top-selling-netflix' />
                        </div>
                        <div className='top-selling-card-content'>
                            <div className='top-selling-card-name'>Crunchyroll</div>
                            <div className='top-selling-price'>
                                <div className='top-selling-price-key'>From: </div>
                                <div className='top-selling-price-val'>$ 5.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nft'>
                <div className='nft-container'>
                    <div className='nft-contents'>
                        <div className='nft-sale-infor'>
                            <div className='trusted-mark'>
                                <div className='trusted-mark-cont'>Trusted Seller</div>
                            </div>
                            <div className='nft-sup'>10% off sale</div>
                            <Link to = "/marketplace">
                                <div className='nft-shop-button'>
                                    <div>
                                        <img className='shop-btn-icon' src = {Eye} alt = "eye" />
                                    </div>
                                    <div className='shop-btn-cont'>Shop now</div>
                                </div>
                            </Link>
                        </div>
                        <div className='nft-timer'>
                            <div className='timer-cont'>Sale ends in:</div>
                            <div className='timer-clock'>
                                <div className='timer-cell'>
                                    <div className='timer-cell-number'>59</div>
                                    <div className='timer-cell-cont'>Hours</div>
                                </div>
                                <div className='timer-cell'>
                                    <div className='timer-cell-number'>:</div>
                                </div>
                                <div className='timer-cell'>
                                    <div className='timer-cell-number'>59</div>
                                    <div className='timer-cell-cont'>Minutes</div>
                                </div>
                                <div className='timer-cell'>
                                    <div className='timer-cell-number'>:</div>
                                </div>
                                <div className='timer-cell'>
                                    <div className='timer-cell-number'>59</div>
                                    <div className='timer-cell-cont'>Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how'>
                <div className='how-cont'>
                    <div className='how-cont-sup'>How it works</div>
                    <div className='how-cont-sub'>Find out how to get started</div>
                </div>
                <div className='how-cards'>
                    <div className='how-item'>
                        <div>
                            <img className='how-item-img' src = {Register_icon} alt = "register" />
                        </div>
                        <div className='how-item-cont'>
                            <div className='how-item-sup'>Register to PVL</div>
                            <div className='how-item-sub'>Register or log in into PVL Shop</div>
                        </div>
                    </div>
                    <div className='how-item'>
                        <div>
                            <img className='how-item-img' src = {Explore_icon} alt = "explore" />
                        </div>
                        <div className='how-item-cont'>
                            <div className='how-item-sup'>Explore accounts</div>
                            <div className='how-item-sub'>Explore and find the accounts you want</div>
                        </div>
                    </div>
                    <div className='how-item'>
                        <div>
                            <img className='how-item-img' src = {Buy_icon} alt = "buy" />
                        </div>
                        <div className='how-item-cont'>
                            <div className='how-item-sup'>Buy Account You want!</div>
                            <div className='how-item-sub'>Buy the account you want for cheap!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subscribe'>
                <div className='subscribe-container'>
                    <div>
                        <img className='subscribe-image' src = {Subscribe} alt = "subscribe" />
                    </div>
                    <div className='subscribe-widget'>
                        <div className='subscribe-cont'>
                            <div className='subscribe-cont-sup'>Join our weekly digest</div>
                            <div className='subscribe-cont-sub'>Get exclusive promotions & updates straight to your inbox.</div>
                        </div>
                        <div className='subscribe-form'>
                            <div className='subscribe-form-input'>Enter your email here</div>
                            <div className='subscribe-form-btn'>
                                <div>
                                    <img className='btn-icon' src = {Email_icon} alt = "email" />
                                </div>
                                <div className='subscribe-btn-cont'>Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}