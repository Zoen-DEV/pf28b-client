import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../redux/Actions/actions";
import s from "./styles/Sales.module.css";

const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  return (
    <div>
      <h5 className={s.title}>SALES REPORT</h5>
      <div className={s.container}>
        <div>
          <p>Id Product</p>
          {sales?.map((data) => (
            <div>
              <p>{data.id_product}</p>
            </div>
          ))}
        </div>
        <div>
          <p>User Id</p>
          {sales?.map((data) => (
            <div>
              <p>{data.userId}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Email</p>
          {sales?.map((data) => (
            <div>
              <p>{data.email}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Name</p>
          {sales?.map((data) => (
            <div>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Amount</p>
          {sales?.map((data) => (
            <div>
              <p>{data.amount}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Address</p>
          {sales?.map((data) => (
            <div>
              <p>{data.address}</p>
            </div>
          ))}
        </div>
        <div>
          <p>City</p>
          {sales?.map((data) => (
            <div>
              <p>{data.city}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Country</p>
          {sales?.map((data) => (
            <div>
              <p>{data.country}</p>
            </div>
          ))}
        </div>
        <div>
          <p>C.P.</p>
          {sales?.map((data) => (
            <div>
              <p>{data.cp}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Delivery Process</p>
          {sales?.map((data) => (
            <div>{data.delivery_process ? <p>TRUE</p> : <p>FALSE</p>}</div>
          ))}
        </div>
        <div>
          <p>Date</p>
          {sales?.map((data) => (
            <div>
              <p>{data.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
