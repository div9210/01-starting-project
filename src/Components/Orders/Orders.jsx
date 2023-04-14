import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import "./Orders.css";
import Loader from "../UI/Loader";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [errorinFetching, setErrorInFeching] = useState(false);
  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    async function fetchOrders() {
      try {
        let response = await fetch(
          "https://food-react-f32aa-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
        );
        if (response.ok) {
          response = await response.json();
          if (!response) {
            setErrorInFeching(true);
            setErrorText("No orders placed yet.");
            return;
          }
          let transFormedOrders = [];
          for (let key in response) {
            transFormedOrders.push(response[key]);
          }
          console.log("transFormedOrders", transFormedOrders);
          setOrders(transFormedOrders);
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchOrders().catch((error) => {
      console.log("error", error);
      setErrorInFeching(true);
      setErrorText(error.message);
    });
  }, []);
  const ordersLength = orders.length;
  return (
    <Modal onBackdropClick={props.hideOrders}>
      <h2 className="order-heading">Orders</h2>
      <div className="order-list">
        <ul>
          {errorinFetching && (
            <li>
              <h3>{errorText}</h3>
            </li>
          )}
          {ordersLength === 0 && !errorinFetching && <Loader />}
          {ordersLength > 0 &&
            orders.map((order) => {
              return (
                <li key={order.id}>
                  <h3>Order Id: {order.id}</h3>
                  <p>
                    Ordered Items:{" "}
                    {order.orderedItems.map((item) => {
                      return (
                        <span>
                          <br />
                          {item.name} x ({item.quantity})
                        </span>
                      );
                    })}
                  </p>
                  <p>Customer Name: {order.userInfo.name}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <div className="close-orders">
          <button className="button" onClick={props.hideOrders}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Orders;
