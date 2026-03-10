import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IncrementItems,DecrementItems,addItems } from "../Stored/Cartsclicer";
import Navbar from "./nav"
function Checkout() {
  const items = useSelector((state) => state.cartslice.items);
   
  const dispatch=useDispatch();
  
  function CheckoutCard({ checkoutdata }) {
  function Decrement(){
    dispatch(DecrementItems(checkoutdata))
  }
  function Increment(){
    dispatch(IncrementItems(checkoutdata))
  }

  console.log(checkoutdata.price);
    return (
      <>
      <div style={styles.card}>
        {/* Product Image */}
        <div style={styles.imageBox}>
          <img src={checkoutdata.thumbnail} alt={checkoutdata.title} style={styles.image} />

          {/* Quantity Buttons */}
          <div style={styles.quantityBox}>
            <button style={styles.qbtn} onClick={()=>Decrement()} >-</button>
            <span>{checkoutdata.quantity || 1}</span>
            <button style={styles.qbtn} onClick={()=>Increment()}>+</button>
          </div>
        </div>

        {/* Product Details */}
        <div style={styles.details}>
          <h3>{checkoutdata.title}</h3>
          <p style={styles.category}>{checkoutdata.category}</p>

          <div style={styles.priceBox}>
            <span style={styles.price}>₹{checkoutdata?.price}</span>
            <span style={styles.oldPrice}>₹{checkoutdata.price + 100}</span>
            <span style={styles.discount}>{checkoutdata.discountPercentage}% off</span>
          </div>

          <p style={styles.delivery}>Free Delivery</p>
        </div>
      </div>
      </>
    );
    
  }

  const totalPrice = items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={styles.container}>

      {/* Left Side Products */}
      <div style={styles.left}>
        {items.map((value, index) => (
          <CheckoutCard key={index} checkoutdata={value} />
        ))}
      </div>

      {/* Right Side Price Summary */}
      <div style={styles.right}>
        <h3>PRICE DETAILS</h3>

        <div style={styles.priceRow}>
          <span>Price ({items.length} items)</span>
          <span>₹{totalPrice}</span>
        </div>

        <div style={styles.priceRow}>
          <span>Delivery Charges</span>
          <span style={{ color: "green" }}>FREE</span>
        </div>

        <hr />

        <div style={styles.totalRow}>
          <span>Total Amount</span>
          <span>₹{totalPrice}</span>
        </div>

        <button style={styles.orderBtn}>PLACE ORDER</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    background: "#f1f3f6",
  },

  left: {
    flex: 3,
  },

  right: {
    flex: 1,
    background: "white",
    padding: "20px",
    height: "fit-content",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },

  card: {
    display: "flex",
    background: "white",
    padding: "15px",
    marginBottom: "10px",
    gap: "20px",
  },

  imageBox: {
    width: "120px",
    textAlign: "center",
  },

  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },

  quantityBox: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
  },

  qbtn: {
    width: "30px",
    height: "30px",
    border: "1px solid #ccc",
    background: "white",
    cursor: "pointer",
  },

  details: {
    flex: 1,
  },

  category: {
    color: "gray",
    fontSize: "14px",
  },

  priceBox: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  price: {
    fontWeight: "bold",
    fontSize: "18px",
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "gray",
  },

  discount: {
    color: "green",
  },

  delivery: {
    color: "green",
    marginTop: "5px",
  },

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    marginTop: "10px",
  },

  orderBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: "#fb641b",
    color: "white",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Checkout;