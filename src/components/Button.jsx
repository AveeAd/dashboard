import styled from "@emotion/styled";

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;

const Btn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 16px;
  background-color: #fff;
  color: #00ccff;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    margin: 0 0.5rem;
  }
`;
