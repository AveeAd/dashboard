import styled from "@emotion/styled";

const Loading = () => {
  return (
    <StyledLoading>
      <H3>Loading...</H3>
    </StyledLoading>
  );
};

export default Loading;

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const H3 = styled.h3`
  color: #888;
`;
