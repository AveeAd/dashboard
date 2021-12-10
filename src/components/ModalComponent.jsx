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
            <input type="text" {...register("name")} placeholder="Name" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input
              type="number"
              {...register("quantity")}
              placeholder="Quantity"
            />
            <input type="number" {...register("total")} placeholder="Total" />
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
