// import { ApplePayButton } from "react-apple-pay-button";
import Apay_icon from '../assets/apay.svg'

export default function Apay() {
    
    return(
        <button className="apple-pay-button">
            <div className="apay-btn-txt">Subscribe with</div>
            <div>
                <img src = {Apay_icon} alt = "apay" width = "30%" />
            </div>
        </button>
    )
}