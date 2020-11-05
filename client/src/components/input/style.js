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
  WriteWrapper: styled.div``,
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
  WritePreview: styled.div`
    display: inline-block;
    color: rgb(88, 96, 105);
    margin-left: 10px;
  `,
  AttachWrapper: styled.div`
    display: flex;
    border: 1px solid #e1e4e8;
    border-top: none;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
    background-color: rgb(250, 251, 252);
    margin: 0 8px;
    padding: 8px;
    color: #586069;
  `,
  LabelPicture: styled.label`
    width: 70%;
    cursor: pointer;
  `,
  InputPicture: styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
  CountComments: styled.div`
    width: 30%;
    text-align: right;
    padding-right: 15px;
  `,
  InputComment: styled.textarea`
    margin: 8px 8px 0 8px;
    padding: 8px;
    width: 97.5%;
    height: 300px;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px dashed #e1e4e8;
    background-color: rgb(250, 251, 252);
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
