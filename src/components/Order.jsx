import { RiDeleteBinFill, RiEditBoxFill } from "react-icons/ri";
import { connect } from "react-redux";
import { deleteOrder, updateOrder } from "../_redux/actions/orderActions";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { ToastContainer, toast } from "react-toastify";
const editModal = {
  title: "Edit Order",
  button: "Edit",
};

const Order = ({ order, deleteOrder, updateOrder }) => {
  const [show, setShow] = useState(false);
  const notifyDelete = () => toast.error("Order Deleted");
  const notifyUpdate = () => toast.success("Order Updated");
  const onDelete = () => {
    let url = `http://localhost:5000/orders/${order.id}`;
    deleteOrder(url, order.id);
    notifyDelete();
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const submitHandler = (data) => {
    let url = `http://localhost:5000/orders/${order.id}`;
    updateOrder(data, url);
    notifyUpdate();
    handleClose();
  };

  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.name}</td>
      <td>{order.price}</td>
      <td>{order.quantity}</td>
      <td>{order.total}</td>
      <td>
        <RiEditBoxFill className="edit" onClick={handleShow} />
        <ModalComponent
          show={show}
          hideModal={handleClose}
          data={editModal}
          submitAction={submitHandler}
          id={order.id}
        />
        <RiDeleteBinFill className="del" onClick={onDelete} />
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
      </td>
    </tr>
  );
};

export default connect(null, { deleteOrder, updateOrder })(Order);
