import React from "react";
import { useState } from "react";
import {
  CardNumberElement ,
  CardExpiryElement , 
  CardCvcElement ,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import Loading from '../assets/loading.gif'

export default function Stripe() {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(Boolean);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe:any = useStripe();
    const elements:any = useElements();
 
  
    const cardStyle = {
      showIcon:true,
      placeholder:"Card Number",
      style: {
        base: {
          color: "rgba(0, 0, 0, 0.5)",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "rgba(0, 0, 0, 0.5)"
          },
          backgroundColor: "#F2F2F2",
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };

    const expStyle = {
      style: {
        base: {
          color: "rgba(0, 0, 0, 0.5)",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "rgba(0, 0, 0, 0.5)"
          },
          backgroundColor: "#F2F2F2",
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };

    const cvcStyle = {
      style: {
        base: {
          color: "rgba(0, 0, 0, 0.5)",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "rgba(0, 0, 0, 0.5)"
          },
          backgroundColor: "#F2F2F2",
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };
  
    const handleChange = async (event:any) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };
  
    const handleSubmit = async (ev:any) => {
      ev.preventDefault();
      setProcessing(true);
  
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement)
        }
      });
  
      if (payload.error) {
        //@ts-ignore
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    };

  return (    
    <div className="stripe">
      <div>
        <form id="payment-form" onSubmit={handleSubmit}>
          <CardNumberElement id="card-element" options = {cardStyle} onChange={handleChange}/>
          <div className="stripe-second">
            <CardExpiryElement id="card-element" options = {expStyle} onChange={handleChange} />
            <CardCvcElement id="card-element" options = {cvcStyle} onChange={handleChange} />
          </div>
          <button disabled={processing || disabled || succeeded} id="submit" className="stripe-btn">
            <span className="stripe-btn-txt">
              {processing ? (
                <div><img src = {Loading} alt = 'loadingGif' width = '10%' /></div>
              ) : (
                "Proceed!"
              )}
            </span>
          </button>
                {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
                 {/* Show a success message upon completion */}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded, see the result in your
            <a href={`https://dashboard.stripe.com/test/payments`}>
              {" "}
              Stripe dashboard.
            </a> Refresh the page to pay again.
          </p>
        </form>
      </div>
    </div>
    )
}