import styled from "styled-components";
const Wrapper = styled.article`
  background: var(--white);
  transition: var(--transition);
  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: auto 1fr;
  :hover {
    box-shadow: var(--box-shadow-4);
  }
  .img {
    height: 15rem;
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-700);
    }
  }
`;

export default Wrapper;
