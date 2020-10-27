import styled from 'styled-components';


const CommonHeaderButton = styled.button`
  display: flex;
  box-sizing: border-box;
  min-width: 80px;
  height: 35px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  align-items : center;
  justify-content : center;
  font-size: 13px;
  font-weight : 600;
  padding : 0px 15px;
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
  `,
    FiltersButton: styled(CommonHeaderButton)
    `
    background: linear-gradient( to bottom, #fff, #e9e9e9 );
    color: #606060;
    `,
    ShowTotalNum: styled.span`
    padding : 3px 6px;
    background : #f2f2f2;
    border-radius : 50px;
    `
};
