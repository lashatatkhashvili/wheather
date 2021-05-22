import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: "10px";
  padding: "10px";
  margin-top: 100px;

  ul {
    padding: 10px;
    margin: 10px;
    width: 320px;
    border-radius: 5%;
    background-color: #5b6cc7;
    opacity: 0.8;
    text-align: center;
  }

  li {
    padding: 10px;
    font-size: 20px;
  }

  img {
    height: 70px;
  }

  h1 {
    color: white;
    position: absolute;
    top: 0;
    margin: 20px auto;
    text-transform: capitalize;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  margin-top: 20px;
  margin-right: 50px;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.5rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:focus {
    border-width: 3px;
    border-image: linear-gradient(right, #11998e, #38ef7d);
  }
`;
