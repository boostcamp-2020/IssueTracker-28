import styled from 'styled-components';


const CommonHeaderButton = styled.button`
  display: flex;
  box-sizing: border-box;
  min-width: ${px(200)};
  height: ${px(50)};
  border: ${px(1)} solid #f2f2f2;
  border-radius: ${px(2)};
  align-items : center;
  justify-content : center;
  font-size: ${px(16)};
  font-weight : 700;
  cursor: pointer;
`;

export default {
    MilestonesButton: styled(CommonHeaderButton)
    `
    background: #ffffff;
    color: #404040;
  `,
    NewIssueButton: styled(CommonHeaderButton)
    `
    background: #ffffff;
    color: #404040;
  `,
    LabelsButton: styled(CommonHeaderButton)
    `
    border-color : #329246;
    background: linear-gradient( to bottom, #32CD56, #27A844 );
    color: #ffffff;
  `
};
