import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import styled from "@emotion/styled";

const ModalComponent = ({
  show,
  hideModal,
  data,
  submitAction,
  handleSubmit,
  register,
  errors,
  id,
  disabled,
}) => {
  return (
    <>
      <Modal show={show} onHide={hideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(submitAction)}>
            <input
              type="text"
              {...register("id")}
              placeholder="Order Id"
              disabled={disabled}
              value={id}
            />
            {errors.id && <Error>{errors.id.message}</Error>}
            <input type="text" {...register("name")} placeholder="Name" />
            {errors.name && <Error>{errors.name.message}</Error>}
            <input type="number" {...register("price")} placeholder="Price" />
            {errors.price && <Error>{errors.price.message}</Error>}
            <input
              type="number"
              {...register("quantity")}
              placeholder="Quantity"
            />
            {errors.quantity && <Error>{errors.quantity.message}</Error>}
            <input type="number" {...register("total")} placeholder="Total" />
            {errors.total && <Error>{errors.total.message}</Error>}
            <Button varient="primary" onClick={handleSubmit(submitAction)}>
              {data.button}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 2px solid #d0bfff;
    border-radius: 1rem;
    &:focus {
      outline: 2px solid #d0bfff;
    }
  }
`;

const Error = styled.p`
  color: red;
  margin: 0.5rem 0;
`;
