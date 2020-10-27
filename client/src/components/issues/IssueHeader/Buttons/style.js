import styled from 'styled-components';


const CommonHeaderButton = styled.button`
  display: flex;
  box-sizing: border-box;
  min-width: ${px(80)};
  height: ${px(35)};
  border: ${px(1)} solid #f0f0f0;
  border-radius: ${px(3)};
  align-items : center;
  justify-content : center;
  font-size: ${px(13)};
  font-weight : 600;
  padding : 0px 20px;
  cursor: pointer;
  outline : none;
`;

export default {
    MilestonesButton: styled(CommonHeaderButton)
    `
    background: #ffffff;
    color: #606060;
  `,
    LabelsButton: styled(CommonHeaderButton)
    `
    background: #ffffff;
    color: #606060;
  `,
    NewIssueButton: styled(CommonHeaderButton)
    `
    border-color : #329246;
    background: linear-gradient( to bottom, #32CD56, #27A844 );
    color: #ffffff;
  `
};
