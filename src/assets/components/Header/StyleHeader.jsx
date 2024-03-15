import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: #edd820;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
`;

export const Section = styled.section`
  display: flex;
  height: 19vh;
  align-items: center;

  justify-content: space-evenly;
  width: 100vh;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const playbutton = styled.button`
  
  height: 2rem;
  background-color:#211921;
  color: white;
  font-weight:bold;
  border-radius: 30px;
  width: 5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:red;
  }
`
