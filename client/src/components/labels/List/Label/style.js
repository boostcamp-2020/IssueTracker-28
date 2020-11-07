import styled from 'styled-components';

export default {
    LabelWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border: 1px solid #e1e4e8;
    border-top: 0;
    color : #5E656E;
    flex: 1 0 0;
    &:last-of-type {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  `,
    LabelItemWrapper: styled.div`
    width : 25%;
  `,
    LabelItem: styled.div`
    background : ${(props) => props.color || "gray"};
    padding : 3px 10px;
    border-radius : 5px;
    font-size : 13px;
    font-weight : 600;
    display : inline-block;
    color : #000000;
  `,
    DescWrapper: styled.div`
    width : 60%;
  `,
    ButtonsWrapper: styled.div`
    width : 10%;
    min-width : 100px;
    display : flex;
    justify-content : space-between;
    .label-button-item{
        cursor : pointer;
        background : none;
        color : #5E656E;
    }
  `,
    EditButton: styled.button`
  `,
    DeleteButton: styled.button`
  `,
}