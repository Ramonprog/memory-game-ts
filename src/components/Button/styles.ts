import styled from "styled-components";

export const Container = styled.div`

  width: 200px;
  height: 50px;
  display: flex;
  background-color: goldenrod;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .3s;
 

  &:hover{
    opacity: .8;
  }

  & .label {
    color: #fff;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  & .icon-area{
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;

    & img {
      height: 20px;
    }
  }

`