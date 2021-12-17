import Layout from "../layout/Layout";
import { Container, Header, Divider } from "../components/StyledComponents";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { fetchCustomers } from "../_redux/actions/customerAction";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Customers = ({ customers, total, fetchCustomers }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(page);

  const setPageHandler = (page) => {
    setPageNo(page);
    navigate(`/customers/${page}`);
  };

  useEffect(() => {
    fetchCustomers(5, pageNo);
  }, [pageNo]);

  return (
    <Layout>
      <Container>
        <Header>
          <h3>Customers</h3>
        </Header>
        <Divider height="70px" />
        <TableComponent
          tableData={customers}
          total={total}
          page={pageNo}
          setPage={setPageHandler}
          actions={{ edit: true, delete: true }}
        />
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
  total: state.customers.total,
});

export default connect(mapStateToProps, { fetchCustomers })(Customers);
