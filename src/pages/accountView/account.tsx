import { Link } from 'react-router-dom'

import './account.style.scss'

import Netflix_bg from '../../assets/netflix_core.png'
import Logo from '../../assets/logo.png'
import Web_icon from '../../assets/web.png'
import Go_back from '../../assets/right_arrow.png'
import PVL_sm_icon from '../../assets/pvl-sm.png'
import Spotify_bg from '../../assets/spotify_bg.png'
import Discord_bg from '../../assets/discord_bg.png'
import Crunchyroll_bg from '../../assets/crunchyroll_bg.png'
import Nord_bg from '../../assets/nordvpn_bg.png'
import HBO_bg from '../../assets/hbo_bg.png'
import UFC_bg from '../../assets/ufc_bg.png'

export default function Account() {
    return(
        <div className='account-explore'>
            <div className='account-bg'>
                <img  src = {Netflix_bg} alt = "bg" width="50%" />
            </div>
            <div className='account-details'>
                <div className='account-de-container'>
                    <div className='account-de-head'>
                        <div className='account-de-sup'>Netflix Account</div>
                        <div className='account-de-sub'>Added on Dec 07, 2022</div>
                    </div>
                    <div className='account-de-cont'>
                        <div className='acc-sold-id'>
                            <div className='acc-sold-key'>Sold By</div>
                            <div className='acc-sold-val'>
                                <div>
                                    <img className='acc-sold-logo' src = {Logo} alt = "pvl" />
                                </div>
                                <div className='acc-sold-txt'>PVL SHOP</div>
                            </div>
                        </div>
                        <div className='account-description'>
                            <div className='acc-des-sup'>Description</div>
                            <div className='acc-description'>
                                Get your Netflix account for a fraction of the price!<br /> 
                                Unlimited films, TV programs and more.<br />
                                Watch anywhere.<br />
                                You can watch as much as you want, whenever you want.<br />
                                There's always something new to discover, and new TV programs and films are added every week!<br />
                                Watch anywhere, anytime. Sign in with the Netflix account sent to your email
                                to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /> <br />
                                You can also download your favorite programs with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </div>
                        </div>
                        <div className='acc-details'>
                            <div className='acc-sold-key'>Details</div>
                            <div className='acc-details-val'>
                                <div>
                                    <img className='acc-details-icon' src = {Web_icon} alt = "web" />
                                </div>
                                <div className='acc-description'>Lifetime account available</div>
                            </div>
                            <div className='acc-details-val'>
                                <div>
                                    <img className='acc-details-icon' src = {Web_icon} alt = "web" />
                                </div>
                                <div className='acc-description'>6 months account available</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='acc-cart-buy'>
                    <div className='acc-btn-container'>
                        <div className='acc-buy-btn'>
                            <div className='buy-btn-txt'>Add to cart</div>
                        </div>
                        <Link to = "/account/buy">
                            <div className='acc-buy-btn'>
                                <div className='buy-btn-txt'>Buy Now</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='more-items'>
                <div className='more-item-head'>
                    <div className='more-item-head-title'>More Items</div>
                    <Link to = "/marketplace" >
                        <div className='go-explore-button'>
                            <div>
                                <img className='right-arrow-icon' src = {Go_back} alt = "goback" />
                            </div>
                            <div className='go-explore-txt'>Go To Explore Page</div>
                        </div>
                    </Link>
                </div>
                <div className='more-items-cards'>
                    <div className='nft-section-card'>
                        <div>
                            <img  className='nft-card-bg' src = {Spotify_bg} alt = "spotify" />
                        </div>
                        <div className='nft-card-cont'>
                            <div className='nft-card-cont-sup'>
                                <div className='nft-card-title'>Discord Nitro</div>
                                <div className='nft-pvl-mark'>
                                    <div>
                                        <img className='nft-pvl-logo' src = {PVL_sm_icon} alt = "pvl" />
                                    </div>
                                    <div className='nft-pvl-name'>PVL Shop</div>
                                </div>
                            </div>
                            <div className='nft-card-cont-sub'>
                                <div className='nft-price-months'>
                                    <div className='nft-price-key'>Price 6 months</div>
                                    <div className='nft-price-value'>$5.00</div>
                                </div>
                                <div className='nft-price-lifetime'>
                                    <div className='nft-price-key'>Price lifetime</div>
                                    <div className='nft-price-value'>$15.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nft-section-card'>
                        <div>
                            <img  className='nft-card-bg' src = {Discord_bg} alt = "discord" />
                        </div>
                        <div className='nft-card-cont'>
                            <div className='nft-card-cont-sup'>
                                <div className='nft-card-title'>Crunchyroll</div>
                                <div className='nft-pvl-mark'>
                                    <div>
                                        <img className='nft-pvl-logo' src = {PVL_sm_icon} alt = "pvl" />
                                    </div>
                                    <div className='nft-pvl-name'>PVL Shop</div>
                                </div>
                            </div>
                            <div className='nft-card-cont-sub'>
                                <div className='nft-price-months'>
                                    <div className='nft-price-key'>Lifetime onlg</div>
                                    <div className='nft-price-value'>$5.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nft-section-card'>
                        <div>
                            <img  className='nft-card-bg' src = {Crunchyroll_bg} alt = "crunchyroll" />
                        </div>
                        <div className='nft-card-cont'>
                            <div className='nft-card-cont-sup'>
                                <div className='nft-card-title'>NordVPN</div>
                                <div className='nft-pvl-mark'>
                                    <div>
                                        <img className='nft-pvl-logo' src = {PVL_sm_icon} alt = "pvl" />
                                    </div>
                                    <div className='nft-pvl-name'>PVL Shop</div>
                                </div>
                            </div>
                            <div className='nft-card-cont-sub'>
                                <div className='nft-price-months'>
                                    <div className='nft-price-key'>Lifetime only</div>
                                    <div className='nft-price-value'>$5.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nft-section-card'>
                        <div>
                            <img  className='nft-card-bg' src = {Nord_bg} alt = "nord" />
                        </div>
                        <div className='nft-card-cont'>
                            <div className='nft-card-cont-sup'>
                                <div className='nft-card-title'>HBO Max</div>
                                <div className='nft-pvl-mark'>
                                    <div>
                                        <img className='nft-pvl-logo' src = {PVL_sm_icon} alt = "pvl" />
                                    </div>
                                    <div className='nft-pvl-name'>PVL Shop</div>
                                </div>
                            </div>
                            <div className='nft-card-cont-sub'>
                                <div className='nft-price-months'>
                                    <div className='nft-price-key'>Lifetime only</div>
                                    <div className='nft-price-value'>$5.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nft-section-card'>
                        <div>
                            <img  className='nft-card-bg' src = {HBO_bg} alt = "hbo" />
                        </div>
                        <div className='nft-card-cont'>
                            <div className='nft-card-cont-sup'>
                                <div className='nft-card-title'>UFC Fight pass</div>
                                <div className='nft-pvl-mark'>
                                    <div>
                                        <img className='nft-pvl-logo' src = {PVL_sm_icon} alt = "pvl" />
                                    </div>
                                    <div className='nft-pvl-name'>PVL Shop</div>
                                </div>
                            </div>
                            <div className='nft-card-cont-sub'>
                                <div className='nft-price-months'>
                                    <div className='nft-price-key'>Lifetime only</div>
                                    <div className='nft-price-value'>$5.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nft-section-card'>
                        <div>
                            <img  className='nft-card-bg' src = {UFC_bg} alt = "ufc" />
                        </div>
                        <div className='nft-card-cont'>
                            <div className='nft-card-cont-sup'>
                                <div className='nft-card-title'>Unknown Prototype</div>
                                <div className='nft-pvl-mark'>
                                    <div>
                                        <img className='nft-pvl-logo' src = {PVL_sm_icon} alt = "unknown" />
                                    </div>
                                    <div className='nft-pvl-name'>PVL Shop</div>
                                </div>
                            </div>
                            <div className='nft-card-cont-sub'>
                                <div className='nft-price-months'>
                                    <div className='nft-price-key'>Price 6 months</div>
                                    <div className='nft-price-value'>$5.00</div>
                                </div>
                                <div className='nft-price-lifetime'>
                                    <div className='nft-price-key'>Price lifetime</div>
                                    <div className='nft-price-value'>10.00$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}