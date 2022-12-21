import { useState } from 'react';
import {Radio} from '@material-ui/core';
import Paypal from '../../components/paypal';
import Stripe from '../../components/stripe';
import Apay from '../../components/apay';

import './buy.scss'

import Netflix_bg from '../../assets/netflix_bg.png'
import Discord_bg from '../../assets/discord_bg.png'
import Spotify_bg from '../../assets/spotify_bg.png'
import PVL_sm_icon from '../../assets/pvl-sm.png'
import PVL_logo from '../../assets/PVL.png'
import Apay_icon from '../../assets/aPay.png'
import Paypal_icon from '../../assets/paypal.png'
import Stripe_icon from '../../assets/stripe.png'


export default function Buy() {
    const[payOption, setPayOption] = useState('1');

    const handlePayOption = async (e:any,v:any) =>{
        setPayOption(v);
    }

    return(
        <div className="buy">
            <div className='market-head'>
                <div className='market-head-container'>
                    <div className='market-head-cont'>
                        <div className='market-head-sup'>Proceed to Checkout</div>
                        <div className='market-head-sub'>Secure checkout sample text - all transactions are processed safely and encrypted etc</div>
                    </div>
                </div>
            </div>
            <div className='buy-section'>
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
                <div className='buy-main'>
                    <div className='nft-section-container'>
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
                    </div>
                    <div className='checkout'>
                        <div className='checkout-container'>
                            <div className='checkout-left'>
                                <div className='checkout-form'>
                                    <div className='form-value'>10.00 $</div>
                                    <div className='form-val-sub'>Pay by {payOption==="1"?"Stripe":payOption==="2"?"Paypal":"ApplePay"}</div>
                                    <div className='form-main'>
                                        {
                                            payOption==="1"?
                                            <Stripe />:
                                            payOption==="2"?
                                                // <PayPalButtons
                                                //     style={{ layout: "vertical", color: "blue", shape: "pill", label: "pay", height: 50}}
                                                //     amount="10"
                                                //     // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                //     onSuccess={(details:any, data:any) => {
                                                //     alert("Transaction completed by " + details.payer.name.given_name);

                                                //     // OPTIONAL: Call your server to save the transaction
                                                //     return fetch("/paypal-transaction-complete", {
                                                //         method: "post",
                                                //         body: JSON.stringify({
                                                //         orderId: data.orderID
                                                //         })
                                                //     });
                                                //     }}
                                                //     options={{
                                                //     clientId:
                                                //     "AdeBL3toV6kL90Y_UvJAQc4EslJ63qLg4vGenRRMPN8M8vev_cepS9UNjaMB7hKyEqfNdn3JnIXP0cMV"
                                                //     }}
                                                // />
                                                <Paypal />
                                            :<Apay />
                                        }
                                    </div>
                                    <div className='form-val-sub'>Other Payment Methods</div>
                                    <div className='payment-options'>
                                        <div onClick={(e:any)=>handlePayOption(e,"3")}>
                                            <img className='payment-icon' src = {Apay_icon} alt = "apay" />
                                        </div>
                                        <div onClick={(e:any)=>handlePayOption(e,"2")}>
                                            <img className='payment-icon' src = {Paypal_icon} alt = "paypal" />
                                        </div>
                                        <div onClick={(e:any)=>handlePayOption(e,"1")}>
                                            <img className='payment-icon' src = {Stripe_icon} alt = "stripe" />
                                        </div>
                                    </div>
                                    <div className='payment-select'>
                                        <Radio
                                            checked={payOption==="3"}
                                            onChange={(e:any)=>handlePayOption(e,"3")}
                                            name="radio-button-demo"
                                            style={{color: "#A259FF"}}
                                            inputProps={{ 'aria-label': 'A' }}
                                        />
                                        <Radio
                                            checked={payOption==="2"}
                                            onChange={(e:any)=>handlePayOption(e,"2")}
                                            name="radio-button-demo"
                                            style={{color: "#A259FF"}}
                                            inputProps={{ 'aria-label': 'A' }}
                                        />
                                        <Radio
                                            checked={payOption==="1"}
                                            onChange={(e:any)=>handlePayOption(e,"1")}
                                            name="radio-button-demo"
                                            style={{color: "#A259FF"}}
                                            inputProps={{ 'aria-label': 'A' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='checkout-right'>
                                <img className='checkout-pvl-logo' src = {PVL_logo} alt = "pvl"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className='proceed-btn'>
                        <div className='proceed-btn-txt'>Proceed!</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}