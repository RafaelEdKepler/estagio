import styled from "styled-components";

export const Container = styled.div`
  background: url("./bg.png");
  background-size: cover;
  padding-top: 0rem;

  @media (min-width: 800px) {
    height: 100vh;
    padding-top: 5rem;
  }
`;

export const Header = styled.div`
  width: 100vw;
  height: 5vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--primary);
  display: none;

  @media (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2rem;

    span {
      font-weight: bold;
      color: var(--secondary);
    }
  }

`;

export const LocationContainer = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-left: 36px;
  display: flex;
`;

export const Location = styled.div`
  width: 8.688rem;
  height: 2.938rem;
  border-radius: 5px;
  background: var(--primary);
  background-image: ${props => props.location === "aeroporto" ? `url("./aeroporto.png")` : `url("./santarosa.jpg")`};
  border-style: ${props => props.selected === true ? "solid" : "none"};
  border-color: #DAA520;
  border-width: 1px;
  background-size: cover;
  margin-right: 39px;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 19.813rem;
    height: 7.625rem;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--secondary);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 37px;
  margin-top: 17px;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const InfoWithName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 19.813rem;
  height: 7.625rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: var(--primary);
  margin-bottom: 53px;

  svg {
    width: 2.75rem;
    height: 3rem;
    margin-right: 49px;
    margin-left: 37px;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    color: var(--secondary);
  }

  @media (min-width: 1024px) {
    margin-right: 40px;
  }
`;

export const InfoNameContainer = styled.div`
  width: 19.813rem;
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;

  span {
    color: var(--secondary);
    font-weight: bold;
    font-size: 20px;
  }

  @media (min-width: 700px) {
    display: flex;
  }
`;