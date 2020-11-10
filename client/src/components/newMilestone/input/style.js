import styled from 'styled-components';

export default {
  InputWrapper: styled.div`
    border-bottom: 1px solid #eaecef;
    .form-control {
      outline: none;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 5px 12px;
      font-size: 14px;
      background-color: #fafbfc;
    }
  `,
  Title: styled.div`
    margin-top: 15px;
    margin-bottom: 6px;
    font-weight: 600;
  `,
  InputTitle: styled.input`
    width: 440px;
  `,
  InputDate: styled.input`
    width: 440px;
  `,
  InputDescription: styled.textarea`
    width: 80%;
    height: 200px;
    margin-bottom: 15px;
  `,
};