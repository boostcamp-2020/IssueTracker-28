import styled from 'styled-components';

export default {
  InputFormWrapper: styled.div`
    width: 70%;
    height: 100%;
    border: 1px solid rgb(225, 228, 232);
    margin: 30px;
    margin-left: 110px;
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
};
