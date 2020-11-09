import styled from 'styled-components';

export default {
  InputFormWrapper: styled.div`
    width: 70%;
    height: 100%;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
  `,
  FlexWrapper: styled.div`
    display: flex;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    margin: 8px;
  `,
  EditCancelButton: styled.button`
    font-weight: bold;
    background: rgb(250, 251, 252);
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    padding: 5px 15px;
    color: rgb(215, 58, 73);
    margin-right: 10px;
    cursor: pointer;
  `,
  Profile: styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border: 1px solid black;
    border-radius: 1.5em;
  `,
  FlexWrapper: styled.div`
    display: flex;
  `,
  Triangle: styled.div`
    margin-top: 15px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${(props) => props.backgroundColor};
  `,
};
