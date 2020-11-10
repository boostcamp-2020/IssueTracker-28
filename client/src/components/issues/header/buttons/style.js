import styled from 'styled-components';

const CommonHeaderButton = styled.button`
  display: flex;
  box-sizing: border-box;
  min-width: 80px;
  height: 35px;
  border: none;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  padding: 0px 13px;
  cursor: pointer;
  outline: none;
  &:hover {
    filter: brightness(95%);
  }
`;

export default {
  ButtonText: styled.p`
    margin: 0 5px;
  `,
  MilestonesButton: styled(CommonHeaderButton)`
    border-radius: 0 4px 4px 0;
    background: #ffffff;
    color: #606060;
  `,
  LabelsButton: styled(CommonHeaderButton)`
    border-radius: 4px 0 0 4px;
    background: #ffffff;
    color: #606060;
    border-right: 1px solid #e0e0e0;
  `,
  NewIssueButton: styled(CommonHeaderButton)`
    border: 1px solid #329246;
    background: linear-gradient(to bottom, #32cd56, #27a844);
    color: #ffffff;
    border-radius: 4px;
    font-size: 14px;
  `,
  IssueDetailButton: styled(CommonHeaderButton)`
    border: 1px solid #329246;
    background: linear-gradient(to bottom, #32cd56, #27a844);
    color: #ffffff;
    border-radius: 4px;
    font-size: 14px;
    opacity: ${(props) => (props.isValid ? '100%' : '60%')};
    ${(props) => !props.isValid && 'pointer-events: none;'}
  `,
  ShowTotalNum: styled.span`
    padding: 3px 6px;
    background: #f2f2f2;
    border-radius: 50px;
  `,
};
