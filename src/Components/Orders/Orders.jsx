import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchOrders() {
      let response = await fetch(
        "https://food-react-f32aa-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
      );
      if (response.ok) {
        response = await response.json();
        console.log("response", response);
      }
    }
    fetchOrders();
  }, []);
  return (
    <Modal>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <button className="button" onClick={props.hideOrders}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Orders;
