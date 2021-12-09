import { RiDeleteBinFill, RiEditBoxFill } from "react-icons/ri";

const Order = ({ order }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.name}</td>
      <td>{order.price}</td>
      <td>{order.quantity}</td>
      <td>{order.total}</td>
      <td>
        <RiEditBoxFill className="edit" />
        <RiDeleteBinFill className="del" />
      </td>
    </tr>
  );
};

export default Order;
