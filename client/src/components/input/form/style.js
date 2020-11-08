import styled from 'styled-components';

export default {
  WriteWrapper: styled.div`
    height: 100%;
  `,
  Line: styled.div`
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
  `,
  TitleBackground: styled.div`
    background-color: ${(props) => props.color};
  `,
  WriteTitle: styled.div`
    display: inline-block;
    margin: 10px 6px 0px 8px;
    width : 68px;
    height : 36px;
    // 아래 부분(border)은 Preview 클릭시 주석처리
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: none;
    // button{ <- Preview 클릭시 주석해제
    //   color: rgb(88, 96, 105);
    //   position : relative;
    //   bottom : 1px;
    // }
  `,
  WritePreview: styled.div`
    display: inline-block;
    width : 84px;
    height : 36px;
    // border: 1px solid #e1e4e8; <- 클릭시 주석 해제
    border-radius: 6px 6px 0 0;
    border-bottom: none;
    position : relative;
    // 아래 부분(button)은 Preview 클릭시 주석처리
    button{
      color: rgb(88, 96, 105);
      position : relative;
      bottom : 1px;
    }
  `,
  CommentTabButton: styled.button`
    width : 100%;
    height : 102%;
    border : none;
    border-radius: 6px 6px 0 0;
    font-size : 14px;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
    background : white;
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
    width: 97.5%;
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
  InputDiv: styled.div`
    height: ${(props) => props.formHeight};
  `,
  InputComment: styled.textarea`
    margin: 8px 8px 0 8px;
    padding: 10px;
    width: 97.5%;
    height: 97.5%;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px dashed #e1e4e8;
    background : #FAFBFC;
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