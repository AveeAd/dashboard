import { Container, Header, Divider } from "../components/StyledComponents";
import Layout from "../layout/Layout";
import { connect } from "react-redux";
import { fetchFeedback } from "../_redux/actions/feedbackAction";
import TableComponent from "../components/TableComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Feedback = ({ feedbacks, total, fetchFeedback }) => {
  const { page } = useParams();
  const [pageNo, setPageNo] = useState(page);
  const navigate = useNavigate();

  const setPageHandler = (page) => {
    setPageNo(page);
    navigate(`/feedback/${page}`);
  };

  useEffect(() => {
    fetchFeedback(5, pageNo);
  }, [pageNo]);

  return (
    <Layout>
      <Container>
        <Header>
          <h3>Feedbacks</h3>
        </Header>
        <Divider height="70px" />
        <TableComponent
          tableData={feedbacks}
          total={total}
          page={pageNo}
          setPage={setPageHandler}
        />
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  feedbacks: state.feedbacks.feedbacks,
  total: state.feedbacks.total,
});

export default connect(mapStateToProps, { fetchFeedback })(Feedback);
