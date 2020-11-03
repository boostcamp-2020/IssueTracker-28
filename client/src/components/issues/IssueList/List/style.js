import styled from 'styled-components';

export const NoResultsBox = styled.div `
  height : 300px;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  font-size : 22px;
  font-weight : 600;
  border: 1px solid #e1e4e8;
  border-radius : 0 0 6px 6px;
  border-top : none;
  padding-bottom : 24px;
  .issue-opened-icon {
    color: #A3AAB2;
    margin-bottom : 28px;
  }
`;