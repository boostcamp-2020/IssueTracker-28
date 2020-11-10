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
  `,
  CancelButton: styled.button`
    border: 1px solid #e0e0e0;
    background: linear-gradient( to bottom, white, #eaeaea );
    font-weight: bold;
    color : #5E656E;
    border-radius: 4px;
    padding: 5px 15px;
    color: #000;
    margin-right: 8px;
    cursor: pointer;
    &:hover{
      filter : brightness(95%);
    }
  `
};