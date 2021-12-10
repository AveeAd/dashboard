import { RiDeleteBinFill, RiEditBoxFill } from "react-icons/ri";
import { connect } from "react-redux";
import { deleteOrder, updateOrder } from "../_redux/actions/orderActions";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { useForm } from "react-hook-form";
const editModal = {
  title: "Edit Order",
  button: "Edit",
};

const Order = ({ order, deleteOrder, updateOrder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const onDelete = () => {
    let url = `http://localhost:5000/orders/${order.id}`;
    deleteOrder(url, order.id);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const submitHandler = (data) => {
    let url = `http://localhost:5000/orders/${order.id}`;
    updateOrder(data, url);

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
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          disabled={true}
          id={order.id}
        />
        <RiDeleteBinFill className="del" onClick={onDelete} />
      </td>
    </tr>
  );
};

export default connect(null, { deleteOrder, updateOrder })(Order);
