import styled from 'styled-components';

export default {
    InputWrapper: styled.div`
    width: 100%;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    margin-right: 1.5rem;
    position : relative;
  `,
    InputFormWrapper: styled.div`
    height: ${(props) => props.wrapperHeight};
  `,
    InputTitle: styled.input`
    width: 97.5%;
    height : 35px;
    margin: 9px;
    padding : 2px 8px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    outline: none;
    background : #FAFBFC;
    box-shadow: inset 0 1px 3px #efefef;
  `,
    AuthorPic: styled.img`
    width : 45px;
    height : 45px;
    position : absolute;
    left : -65px;
    border-radius : 6px;
  `,InputTriangle : styled.div`
    background : white;
    position : absolute;
    border-left: 1px solid #e1e4e8;
    border-bottom: 1px solid #e1e4e8;
    top : 15px;
    transform : rotate(45deg);
    left : -8px;
    width : 14px;
    height : 14px;
  `
};