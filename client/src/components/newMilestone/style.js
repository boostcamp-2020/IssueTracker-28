import styled from 'styled-components';

export default {
  NewMilestoneWrapper: styled.div`
    margin: 24px auto;
    max-width: 950px;
  `,
  Header: styled.header`
    border-bottom: 1px solid #eaecef;
  `,
  HeaderTitle: styled.h2`
    margin-bottom: 8px;
  `,
  HeaderContent: styled.div`
    margin-bottom: 16px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    margin-top: 15px;
    float: right;
    button {
      height : 35px;
      padding : 0 18px;
      border-radius: 4px;
      font-weight : 600;
      white-space : nowrap;
      cursor : pointer;
    }
    button:hover {
      filter : brightness(95%);
    }
  `,
  CancelButton: styled.button`
    border: 1px solid #e0e0e0;
    background: linear-gradient( to bottom, white, #eaeaea );
    color : #5E656E;
    margin-right: 8px;
  `,
  SubmitButton: styled.button`
    border: 1px solid #329246;
    background: linear-gradient(to bottom, #32cd56, #27a844);
    color: #fff;
    opacity : ${(props) => props.isValid ? '100%' : '60%'};
    ${(props) => !props.isValid && 'pointer-events: none;'}
  `
};