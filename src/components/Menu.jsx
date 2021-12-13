import { AiFillHome, AiFillContainer, AiFillTag } from "react-icons/ai";
import { MdAccountCircle, MdAnalytics } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import classes from "../scss/Menu.module.scss";

const Menu = () => {
  return (
    <MenuStyled>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.activeNav : null)}
      >
        <AiFillHome />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/orders/1"
        className={({ isActive }) => (isActive ? classes.activeNav : null)}
      >
        <AiFillContainer />
        <span>Orders</span>
      </NavLink>
      <NavLink
        to="/customers"
        className={({ isActive }) => (isActive ? classes.activeNav : null)}
      >
        <MdAccountCircle />
        <span>Customers</span>
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? classes.activeNav : null)}
      >
        <AiFillTag />
        <span>Products</span>
      </NavLink>
      <NavLink
        to="/analytics"
        className={({ isActive }) => (isActive ? classes.activeNav : null)}
      >
        <MdAnalytics />
        <span>Analytics</span>
      </NavLink>
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  & a {
    text-decoration: none;
    color: #364fc7;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    & span {
      margin: 0 1rem;
    }
  }
`;
