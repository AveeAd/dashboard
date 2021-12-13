import { useState } from "react";
import Button from "../components/Button";
import { Container, Divider, Header } from "../components/StyledComponents";
import Layout from "../layout/Layout";
import { RiAddFill } from "react-icons/ri";
import styled from "@emotion/styled";
import Order from "../components/Order";
import { connect } from "react-redux";
import { fetchOrders, addOrder } from "../_redux/actions/orderActions";
import { useEffect } from "react";
import ModalComponent from "../components/ModalComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PaginationComp from "../components/PaginationComp";

const Orders = ({ fetchOrders, orders, addOrder }) => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  const schema = yup.object({
    id: yup.string().required(),
    name: yup.string().required(),
    price: yup.number().required(),
    quantity: yup.number().required(),
    total: yup.number().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    fetchOrders(5, page);
  }, [page]);
  const addModal = {
    title: "Add Order",
    button: "Add",
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const submitAction = (data) => {
    let url = "http://localhost:5000/orders";
    addOrder(data, url);
    handleClose();
  };

  return (
    <Layout>
      <Container>
        <Header>
          <h3>Orders</h3>
          <Button onClick={handleShow}>
            <RiAddFill />
            <span>Add Order</span>
          </Button>
        </Header>
        <ModalComponent
          show={show}
          hideModal={handleClose}
          data={addModal}
          submitAction={submitAction}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        <Divider height="70px" />
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
            {orders.orders.map((order) => (
              <Order order={order} key={order.id} />
            ))}
          </tbody>
        </Table>
        <PaginationComp total={orders.total} page={page} setPage={setPage} />
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps, {
  fetchOrders,
  addOrder,
})(Orders);

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
