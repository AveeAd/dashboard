import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import styled from "@emotion/styled";
import CreatableSelect from "react-select/creatable";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const options = [
  { value: "Tea", label: "Tea" },
  { value: "Coffee", label: "Coffee" },
];

const ModalComponent = ({ show, hideModal, data, submitAction, id }) => {
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
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
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
              value={id}
            />
            {errors.id && <Error>{errors.id.message}</Error>}
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <CreatableSelect
                  options={options}
                  onChange={(option) => onChange(option.value)}
                  onBlur={onBlur}
                  placeholder="Select an item"
                />
              )}
            />

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
