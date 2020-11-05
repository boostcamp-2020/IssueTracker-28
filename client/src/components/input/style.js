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
    height : 35px;
    margin: 8px;
    padding : 2px 8px;
    font-size: 15px;
    line-height: 20px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    outline: none;
    background : #FAFBFC;
    box-shadow: inset 0 1px 3px #efefef;
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
    width : 68px;
    height : 36px;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: none;
  `,
  WriteTitleButton: styled.button`
  background : white;
  width : 100%;
  height : 102%;
  border : none;
  border-radius: 6px 6px 0 0;
  font-size : 14px;
  display : flex;
  justify-content : center;
  align-items : center;
  cursor : pointer;
  `,
  WritePreviewButton: styled.button`
    border : none;
    cursor : pointer;
    background : none;
    display: inline-block;
    color: rgb(88, 96, 105);
    margin-left: 10px;
    font-size : 14px;
  `,
  AttachWrapper: styled.div`
    display: flex;
    border: 1px solid #e1e4e8;
    border-top: none;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
    background-color: rgb(250, 251, 252);
    margin: 0 8px;
    padding: 8px 10px;
    color: #596069;
    position : relative;
    bottom : 4px;
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
    box-shadow: inset 0 1px 3px #efefef;
    margin: 8px 8px 0 8px;
    padding: 12px;
    width: 97.5%;
    height: 300px;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px dashed #e1e4e8;
    background : #FAFBFC;
    outline : none;
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