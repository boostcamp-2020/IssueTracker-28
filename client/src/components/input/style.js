import styled from 'styled-components';

export default {
  InputWrapper: styled.div`
    width: 100%;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    margin-right: 1.5rem;
  `,
  InputTitle: styled.input`
    width: 97.5%;
    margin: 8px;
    padding: 2px 12px;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
  `,
  WriteWrapper: styled.div`
  `,
  Line: styled.div`
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
  `,
  WriteTitle: styled.div`
    display: inline-block;
    margin: 0 8px;
    padding: 8px 16px;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: none;
  `,
  InputComment: styled.textarea`
    margin: 8px 8px 0 8px;
    padding: 8px;
    width: 97.5%;
    height: 300px;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px dashed #e1e4e8;
  `,
  InputPicture: styled.div`
    margin: 0 8px;
    padding: 5px;
    color: #586069;
    border: 1px solid #e1e4e8;
    border-top: none;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8px;
  `,
  CancelButton: styled.button`
    border: none;
    background: none;
    color: #586069;
    cursor: pointer;
  `,
};