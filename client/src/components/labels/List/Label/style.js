import styled from 'styled-components';

export default {
    LabelWrapper: styled.div`
    border: 1px solid #e1e4e8;
    border-top: 0;
    color : #5E656E;
    position : relative;
    &:last-of-type {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  `,
    LabelListWrapper : styled.div`
    display: flex;
    align-items : center;
    justify-content: flex-start;
    padding: 12px 16px;
    `,
    LabelItemWrapper: styled.div`
    width : 27%;
  `,
    LabelItem: styled.div`
    background : ${(props) => props.color || "gray"};
    padding : 3px 10px;
    border-radius : 2rem;
    font-size : 13px;
    display : inline-block;
    color : #000000;
  `,
    DescWrapper: styled.div`
  `,
    ButtonsWrapper: styled.div`
    position : absolute;
    right : 15px;
    top : 15px;
    display : flex;
    justify-content : flex-end;
    .label-button-item{
        cursor : pointer;
        background : none;
        color : #5E656E;
        margin-left : 15px;
    }
    button:hover{
      color : #0266D6;
      text-decoration : underline;
    }
  `,
    EditButton: styled.button`
  `,
    DeleteButton: styled.button`
  `,
  LabelEditWrapper : styled.div`
  background : gold;
  height : 40px;
  `
}