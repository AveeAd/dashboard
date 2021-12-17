import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Container, Divider, Header } from "../components/StyledComponents";
import Layout from "../layout/Layout";
import { RiAddFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addOrder, fetchOrders } from "../_redux/actions/orderActions";
import ModalComponent from "../components/ModalComponent";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableComponent from "../components/TableComponent";

const Orders = ({ orders, total, addOrder, fetchOrders }) => {
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

  useEffect(() => {
    fetchOrders(5, pageNo);
  }, [pageNo]);

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

        <TableComponent
          tableData={orders}
          total={total}
          page={pageNo}
          setPage={setPageHandler}
          actions={{ edit: true, delete: true }}
        />
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
  orders: state.orders.orders,
  total: state.orders.total,
});

export default connect(mapStateToProps, {
  addOrder,
  fetchOrders,
})(Orders);
