import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 50px 0;
  font-family: 'Roboto', sans-serif;
  
  & .info {
    display: flex;
    flex-direction: column;


    & .logo a{
      text-decoration: none;
      color:#1b1e23;
      

      & span {
        color: goldenrod;
      }
    }

    & .info-area{
      width: 100%;
      margin: 10px 0;
    }
  }

  & .grid-area {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-left: 30px;

    & .grid{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;

    }
  }

  @media (max-width: 750px) {
    flex-direction: column;

    & .info {
      margin-bottom:50px;
      align-items: center;

      & .info-area{
        display: flex;
        justify-content: space-around;
        text-align: center;
      }
    }

    & .grid-area {
      justify-content: center;
      padding: 0 20px;
    }
  
   
  
  }
`;