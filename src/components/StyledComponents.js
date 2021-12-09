import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & h3 {
    color: #364fc7;
  }
`;

export const Divider = styled.div`
  width: 100%;
  ${({ height }) => `height: ${height}`};
`;
