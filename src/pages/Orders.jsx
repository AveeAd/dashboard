import { useState } from "react";
import Button from "../components/Button";
import { Container, Divider, Header } from "../components/StyledComponents";
import Layout from "../layout/Layout";
import { RiAddFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addOrder } from "../_redux/actions/orderActions";
import ModalComponent from "../components/ModalComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PaginationComp from "../components/PaginationComp";
import OrdersTable from "./OrdersTable";
import { useNavigate, useParams } from "react-router-dom";

const Orders = ({ total, addOrder }) => {
  const { page } = useParams();
  const [show, setShow] = useState(false);
  const [pageNo, setPageNo] = useState(page);

  const navigate = useNavigate();

  const setPageHandler = (page) => {
    setPageNo(page);
    navigate(`/orders/${page}`);
  };

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
        <OrdersTable />
        <PaginationComp total={total} page={pageNo} setPage={setPageHandler} />
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  total: state.orders.total,
});

export default connect(mapStateToProps, {
  addOrder,
})(Orders);
