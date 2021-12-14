import { useState } from "react";
import Button from "../components/Button";
import { Container, Divider, Header } from "../components/StyledComponents";
import Layout from "../layout/Layout";
import { RiAddFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addOrder } from "../_redux/actions/orderActions";
import ModalComponent from "../components/ModalComponent";

import PaginationComp from "../components/PaginationComp";
import OrdersTable from "./OrdersTable";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = ({ total, addOrder }) => {
  const { page } = useParams();
  const [show, setShow] = useState(false);
  const [pageNo, setPageNo] = useState(page);

  const navigate = useNavigate();
  const notify = () =>
    toast.info("Order Added Successfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const setPageHandler = (page) => {
    setPageNo(page);
    navigate(`/orders/${page}`);
  };

  const addModal = {
    title: "Add Order",
    button: "Add",
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const submitAction = (data) => {
    let url = "/orders";
    addOrder(data, url);
    handleClose();
    notify();
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
        />
        <Divider height="70px" />
        <OrdersTable />
        <PaginationComp total={total} page={pageNo} setPage={setPageHandler} />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  total: state.orders.total,
});

export default connect(mapStateToProps, {
  addOrder,
})(Orders);
