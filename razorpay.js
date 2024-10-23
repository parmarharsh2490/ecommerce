// razorpay.js
export function initializeRazorpay() {
    var options = {
        "key": "rzp_test_oQMGR2Jlz0WV73", // Replace with your actual Razorpay Key ID
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or ₹500.
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "handler": function (response){
            alert("Payment ID: " + response.razorpay_payment_id);
            alert("Order ID: " + response.razorpay_order_id);
            alert("Signature: " + response.razorpay_signature);
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#F37254"
        }
    };
    var rzp1 = new Razorpay(options);
    document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        e.preventDefault();
    }
}