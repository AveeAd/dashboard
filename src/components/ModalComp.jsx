import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import styled from "@emotion/styled";
import CreatableSelect from "react-select/creatable";
import { useForm, Controller } from "react-hook-form";
import { Fragment } from "react";

const ModalComp = ({
  elements,
  modalType,
  submitHandler,
  show,
  handleClose,
}) => {
  const { register, handleSubmit, control } = useForm();
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalType.title}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Modal.Body>
          {elements.map((element, index) =>
            element.type === "select" ? (
              <Fragment key={index}>
                <Controller
                  name={element.name}
                  control={control}
                  render={({ field: { onChange, onBlur } }) => (
                    <CreatableSelect
                      options={element.options}
                      onChange={(option) => onChange(option.value)}
                      onBlur={onBlur}
                      placeholder={element.placeholder}
                    />
                  )}
                />
              </Fragment>
            ) : (
              <Fragment key={index}>
                <input
                  type={element.type}
                  {...register(`${element.name}`)}
                  placeholder={element.placeholder}
                />
              </Fragment>
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            varient={modalType.varient}
            onSubmit={handleSubmit(submitHandler)}
          >
            {modalType.submit}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalComp;

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
