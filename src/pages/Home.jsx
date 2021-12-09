import Layout from "../layout/Layout";
import styled from "@emotion/styled";
import { AiOutlineCalendar } from "react-icons/ai";
import Button from "../components/Button";
import { FcPackage, FcBinoculars, FcSms } from "react-icons/fc";
import { Container, Header } from "../components/StyledComponents";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <h3>Overview</h3>
          <Button>
            <AiOutlineCalendar />
            <span>Last 30 days</span>
          </Button>
        </Header>
        <Overview>
          <Button>
            <div>
              <H1>24</H1>
              <Small>Unfulfilled Orders</Small>
            </div>
            <IconWrapper bg="rgba(255, 179, 0, 0.3)">
              <FcPackage />
            </IconWrapper>
          </Button>
          <Button>
            <div>
              <H1>810</H1>
              <Small>Product's Views</Small>
            </div>
            <IconWrapper bg="rgba(190, 75, 219,0.3)">
              <FcBinoculars />
            </IconWrapper>
          </Button>
          <Button>
            <div>
              <H1>40</H1>
              <Small>New Messages</Small>
            </div>
            <IconWrapper bg="rgba(8, 127, 91,0.3)">
              <FcSms />
            </IconWrapper>
          </Button>
        </Overview>
      </Container>
    </Layout>
  );
};

export default Home;

const Overview = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  font-size: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-left: 0 0.5rem;
  ${({ bg }) => `background:${bg}`};
`;

const H1 = styled.h1`
  text-align: left;
  color: #333;
  font-size: 2.5rem;
`;

const Small = styled.small`
  color: #bbb;
  font-size: 1rem;
`;
