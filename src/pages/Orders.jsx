import Button from "../components/Button";
import { Container, Divider, Header } from "../components/StyledComponents";
import Layout from "../layout/Layout";
import { RiAddFill } from "react-icons/ri";
import styled from "@emotion/styled";
import Order from "../components/Order";

const Orders = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <h3>Orders</h3>
          <Button>
            <RiAddFill />
            <span>Add Order</span>
          </Button>
        </Header>
        <Divider height="80px" />
        <Table>
          <thead>
            <th>Order ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </thead>
          <Order
            order={{
              id: 1,
              name: "coffee",
              price: "$10",
              quantity: "2",
              total: "$20",
            }}
          />
        </Table>
      </Container>
    </Layout>
  );
};

export default Orders;

const Table = styled.table`
  width: 100%;
  text-align: center;
  & thead {
    background: #d0bfff;
    color: #fff;
  }
  & tr {
    background: #fff;
  }
  & th,
  td {
    padding: 1rem;
  }
`;
