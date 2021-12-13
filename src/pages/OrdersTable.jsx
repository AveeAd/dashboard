import styled from "@emotion/styled";
import Order from "../components/Order";
import { connect } from "react-redux";
import { fetchOrders } from "../_redux/actions/orderActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const OrdersTable = ({ fetchOrders, orders }) => {
  const { page } = useParams();
  useEffect(() => {
    fetchOrders(5, page);
  }, [page]);
  if (orders.length === 0) {
    return <Loading />;
  } else {
    return (
      <Table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Order order={order} key={order.id} />
          ))}
        </tbody>
      </Table>
    );
  }
};

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

export default connect(mapStateToProps, { fetchOrders })(OrdersTable);

const Table = styled.table`
  width: 100%;
  text-align: center;
  & thead {
    & tr {
      background-color: #d0bfff;
      color: #fff;
    }
  }
  & tr {
    background: #fff;
  }
  & th,
  td {
    padding: 1rem;
  }
`;
