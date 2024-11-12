import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css'; // Import custom CSS
import { useNavigate, useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51QIilmECmCACrbVG1RO5COv0zgcUV0mvdvzpsXK9KEuyR2aEghe4hfBMa7ZoW1ARNDRTlNsCnkk2cNwWrYMzvgpW00q8JD1UUs');

const Payment = () => {
    const items = [
        {
            id: 1,
            Book: 'G Tewani: JEE Mains Mathematics',
            Price: 2499,
        },
        {
            id: 2,
            Book: 'H.C. Verma: JEE Mains Physics',
            Price: 1354,
        },
        {
            id: 3,
            Book: 'O.P. Tandon: JEE Mains Chemistry',
            Price: 1499,
        },
    ];

    const { ID } = useParams(); // Destructure the parameter directly
    const ID1 = Number(ID.trim()); // 
    // console.log(typeof ID1);
    
    const selectedItem = items[ID1-1]; // Find the item based on the index

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [name, setName] = useState('');
    const country = 'India';

    useEffect(() => {
        const fetchClientSecret = async () => {
            if (clientSecret) return; // Ensure selectedItem exists before fetching
            try {
                const response = await fetch(`/api2/payment`, {
                    method: 'POST',
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify({ amount: selectedItem.Price*100 }), // amount in rupees(Multiplied by 10 as it is taking only amount>2000)
                });
                const data = await response.json();
                setClientSecret(data.clientSecret);
                console.log(clientSecret);
            } catch (err) {
                console.log('Failed to fetch clientSecret:', err);
            }
        };
        fetchClientSecret();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            console.log("Stripe.js has not loaded or clientSecret is missing");
            return;
        }

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
            },
        });

        if (error) {
            console.log("Payment error:", error);
            alert('Error occurred');
            navigate('/');
        } else {
            console.log('Payment successful!', paymentIntent);
            alert('Payment Successful');
            navigate('/');
        }
    };

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    if (!selectedItem) {
        return <div>Item not found</div>; // Handle case where item ID is invalid
    }

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <h2 className=' bg-red-300 text-center font-bold rounded-md'>Pay using Credit/Debit Card</h2>
            <div className="amount text-center">{selectedItem.Book}</div>
            <div className="amount text-center">₹{selectedItem.Price} only</div>
            
            <label>
                Card Number
                <CardNumberElement options={cardStyle} />
            </label>
            
            <label>
                Expiration Date
                <CardExpiryElement options={cardStyle} />
            </label>
            
            <label>
                CVC
                <CardCvcElement options={cardStyle} />
            </label>
            
            <label>
                Cardholder Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            
            <label>
                Country or Region
                <input
                    type="text"
                    value={country}
                    required
                    readOnly
                />
            </label>
            
            <button type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default Payment;
