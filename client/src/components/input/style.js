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
    margin: 8px 8px 0px 8px;
    padding: 2px 12px;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
  `,
};
