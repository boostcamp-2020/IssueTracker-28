import styled from 'styled-components';

export default {
  NoResultsBox: styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    border: 1px solid #e1e4e8;
    border-radius: 0 0 6px 6px;
    border-top: none;
    padding-bottom: 24px;
    .issue-opened-icon {
      color: #a3aab2;
      margin-bottom: 28px;
    }
  `,
  LoadSpinner: styled.img`
    width : 250px;
    position : absolute;
    margin : auto;
    top: 0;
    bottom:0;  
    left:0;
    right:0;  
  `
};