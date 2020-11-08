import styled from 'styled-components';

export default {
    NewLabelWrapper: styled.div`
    margin-top: 24px;
    background : #F5F8FA;;
    border-radius : 6px;
    border: 1px solid #e0e0e0;
    padding : 18px 16px;
    box-sizing : border-box;
  `,
    NewLabelItem: styled.div`
    background : ${(props) => props.color || "#EDEDED"};
    padding : 3px 10px;
    border-radius : 2rem;
    font-size : 13px;
    display : inline-block;
    color : ${(props) => props.fontColor};
    margin-bottom : 25px;
    `,
    CreateLabelWrapper: styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    `,
    NameWrapper: styled.div`
    width : 22%;
    `,
    DescWrapper: styled.div`
    width : 36%;
    `,
    ColorWrapper: styled.div`
    width : 15%;
    `,
    ButtonsWrapper: styled.div`
    width : 22%;
    display : flex;
    align-items : flex-end;
    justify-content : flex-end;
    button{
        height : 35px;
        padding : 0 18px;
        border-radius: 4px;
        font-weight : 600;
        white-space : nowrap;
        cursor : pointer;
    }
    button:hover{
        filter : brightness(95%);
    }
    `,
    NewColorWrapper: styled.div`
    display : flex;
    `,
    NewColorButton: styled.button`
    background : ${(props) => props.color || "#EDEDED"};
    width : 40px;
    border-radius : 4px;
    margin-right : 4px;
    box-sizing : border-box;
    cursor : pointer;
    `,
    Title: styled.p`
    margin-bottom : 6px;
    color : #24292E;
    font-weight : 600;
    `,
    Input: styled.input`
    height : 35px;
    padding-left : 6px;
    background : #FAFBFC;
    border: 1px solid #e0e0e0;
    width : 100%;
    border-radius : 5px;
    color : #24292E;
    font-size : 15px;
    `,
    CancelButton: styled.button`
    border: 1px solid #e0e0e0;
    background: linear-gradient( to bottom, white, #eaeaea );
    color : #5E656E;
    margin-right : 8px;
    `,
    CreateLabelButton: styled.button`
    border: 1px solid #329246;
    background: linear-gradient( to bottom, #32CD56, #27A844 );
    color: #ffffff;
    transition : all 0.3s;
    opacity : ${(props) => props.isValid ? '100%' : '60%'};
    ${(props) => !props.isValid && 'pointer-events: none;'} 
    `
};