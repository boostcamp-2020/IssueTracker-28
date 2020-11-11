import styled from 'styled-components';

export default {
  EditMilestoneWrapper: styled.div`
    margin: 24px auto;
    max-width: 950px;
  `,
  Header: styled.div`
    border-bottom: 1px solid #eaecef;
  `,
  LabelMilestone: styled.div`
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    width: fit-content;
    margin-bottom: 15px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    float: right;
    margin-top: 15px;
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