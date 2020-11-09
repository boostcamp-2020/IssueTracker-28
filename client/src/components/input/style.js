import styled from 'styled-components';

export default {
  InputWrapper: styled.div`
    width: 100%;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    margin-right: 1.5rem;
  `,
  InputFormWrapper: styled.div`
    height: ${(props) => props.wrapperHeight};
  `,
  InputTitle: styled.input`
    width: 97.5%;
    height: 35px;
    margin: 8px;
    padding: 2px 8px;
    font-size: 15px;
    line-height: 20px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    outline: none;
    background: #fafbfc;
    box-shadow: inset 0 1px 3px #efefef;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    margin: 8px;
  `,
  CancelButton: styled.button`
    border: none;
    background: none;
    color: #586069;
    cursor: pointer;
  `,
};
