import Layout from "../layout/Layout";
import { Container, Header, Divider } from "../components/StyledComponents";
import Button from "../components/Button";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { fetchProducts } from "../_redux/actions/productAction";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";
import ModalComp from "../components/ModalComp";
import { productElements } from "../_helpers/modalElements";

const Products = ({ products, total, fetchProducts }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(page);
  const [show, setShow] = useState(false);

  const setPageHandler = (page) => {
    setPageNo(page);
    navigate(`/products/${page}`);
  };

  useEffect(() => {
    fetchProducts(5, pageNo);
  }, [pageNo]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const submitHandler = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  const modalType = {
    title: "Add Product",
    varient: "primary",
    submit: "Add",
  };

  return (
    <Layout>
      <Container>
        <Header>
          <h3>Products</h3>
          <Button onClick={handleShow}>
            <RiAddFill />
            <span>Add Order</span>
          </Button>
          <ModalComp
            elements={productElements}
            modalType={modalType}
            show={show}
            handleClose={handleClose}
            submitHandler={submitHandler}
          />
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
