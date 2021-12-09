import classes from "../scss/Layout.module.scss";
import { FcPieChart } from "react-icons/fc";
import { BsChevronDown } from "react-icons/bs";

import styled from "@emotion/styled";
import Menu from "../components/Menu";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Brand>
        <FcPieChart />
        <span>EYEAZY</span>
      </Brand>
      <Dropdown>
        <div>
          <Image src={`${process.env.PUBLIC_URL}/images/asset1.png`} />
          <section>
            <small>Slimsay Shop</small>
            <Banner>Trial 12 days left</Banner>
          </section>
        </div>
        <BsChevronDown style={{ margin: "0 1rem" }} />
      </Dropdown>
      <Menu />
    </div>
  );
};

export default Sidebar;

const Brand = styled.p`
  color: #364fc7;
  display: flex;
  align-items: center;
  font-weight: 900;
  margin: 0.5rem 0;
  & span {
    margin: 0 0.5rem;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.3rem;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  & div {
    display: flex;
    align-items: center;
  }
  & small {
    font-weight: bold;
    font-size: 0.7rem;
  }
`;

const Banner = styled.p`
  background: RGB(99, 230, 190);
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  color: #fff;
  border-radius: 8px;
`;
