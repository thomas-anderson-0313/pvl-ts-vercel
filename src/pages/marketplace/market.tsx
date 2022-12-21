import { Link } from 'react-router-dom'

import './market.style.scss'

import Netflix_bg from '../../assets/netflix_bg.png'
import PVL_sm_icon from '../../assets/pvl-sm.png'
import Spotify_bg from '../../assets/spotify_bg.png'
import Discord_bg from '../../assets/discord_bg.png'
import Crunchyroll_bg from '../../assets/crunchyroll_bg.png'
import Nord_bg from '../../assets/nordvpn_bg.png'
import HBO_bg from '../../assets/hbo_bg.png'
import UFC_bg from '../../assets/ufc_bg.png'
import Unknow from '../../assets/unknown.png'

import SearchBar from '../../components/SearchBar'

export default function Marketplace() {
    return (
        <div className='marketplace'>
            <div className='market-head'>
                <div className='market-head-container'>
                    <div className='market-head-cont'>
                        <div className='market-head-sup'>Browse Marketplace</div>
                        <div className='market-head-sub'>Browse through more than 240+ account types on the account marketplace.</div>
                    </div>
                    <div className='market-search'>
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className='market-section'>
                {/* <div className='market-section-head'>
                    <div className='market-section-head-container'>
                        <div className='market-section-tab1'>
                            <div className='market-tab-txt1'>Account Types</div>
                            <div className='market-tab-num1'>248</div>
                        </div>
                        <div className='market-section-tab2'>
                            <div className='market-tab-txt2'>Collections</div>
                            <div className='market-tab-num2'>67</div>
                        </div>
                    </div>
                </div> */}
                <div className='nft-section'>
                    <div className='nft-section-container'>
                        <Link to = "/account/explore" >
                            <div className='nft-section-card'>
                                <div>
                                    <img  className='nft-card-bg' src = {Netflix_bg} alt = "netflix" />
                                </div>
                                <div className='nft-card-cont'>
                                    <div className='nft-card-cont-sup'>
                                        <div className='nft-card-title'>Netflix Account</div>
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
                                            <div className='nft-price-value'>10.00$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
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
                        <div className='nft-section-card'>
                            <div>
                                <img  className='nft-card-bg' src = {Unknow} alt = "unknown" />
                            </div>
                            <div className='nft-card-cont'>
                                <div className='nft-card-cont-sup'>
                                    <div className='nft-card-title'>Netflix Account</div>
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
                                        <div className='nft-price-value'>10.00$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='nft-section-card'>
                            <div>
                                <img  className='nft-card-bg' src = {Unknow} alt = "unknown" />
                            </div>
                            <div className='nft-card-cont'>
                                <div className='nft-card-cont-sup'>
                                    <div className='nft-card-title'>Netflix Account</div>
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
                                        <div className='nft-price-value'>10.00$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='nft-section-card'>
                            <div>
                                <img  className='nft-card-bg' src = {Unknow} alt = "unknown" />
                            </div>
                            <div className='nft-card-cont'>
                                <div className='nft-card-cont-sup'>
                                    <div className='nft-card-title'>Netflix Account</div>
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
                                        <div className='nft-price-value'>10.00$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='nft-section-card'>
                            <div>
                                <img  className='nft-card-bg' src = {Unknow} alt = "unknown" />
                            </div>
                            <div className='nft-card-cont'>
                                <div className='nft-card-cont-sup'>
                                    <div className='nft-card-title'>Netflix Account</div>
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
                                        <div className='nft-price-value'>10.00$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='nft-section-card'>
                            <div>
                                <img  className='nft-card-bg' src = {Unknow} alt = "unknown" />
                            </div>
                            <div className='nft-card-cont'>
                                <div className='nft-card-cont-sup'>
                                    <div className='nft-card-title'>Netflix Account</div>
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
                                        <div className='nft-price-value'>10.00$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}