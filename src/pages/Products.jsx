import Layout from "../layout/Layout";
import { Container, Header, Divider } from "../components/StyledComponents";
import Button from "../components/Button";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { fetchProducts } from "../_redux/actions/productAction";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";
const Products = ({ products, total, fetchProducts }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(page);

  const setPageHandler = (page) => {
    setPageNo(page);
    navigate(`/products/${page}`);
  };

  useEffect(() => {
    fetchProducts(5, pageNo);
  }, [pageNo]);

  return (
    <Layout>
      <Container>
        <Header>
          <h3>Products</h3>
          <Button>
            <RiAddFill />
            <span>Add Order</span>
          </Button>
        </Header>
        <Divider height="70px" />
        <TableComponent
          tableData={products}
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
  products: state.products.products,
  total: state.products.total,
});

export default connect(mapStateToProps, { fetchProducts })(Products);
