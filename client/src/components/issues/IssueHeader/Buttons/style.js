import styled from 'styled-components';


const CommonHeaderButton = styled.button`
  display: flex;
  box-sizing: border-box;
  min-width: 80px;
  height: 35px;
  border : none;
  align-items : center;
  justify-content : center;
  font-size: 13px;
  font-weight : 600;
  padding : 0px 13px;
  cursor: pointer;
  outline : none;
  &:hover {
    filter: brightness(95%);
  }
`;

export default {
    ButtonText : styled.p`
    margin : 0 5px;
    `,
    MilestonesButton: styled(CommonHeaderButton)
    `
    background: #ffffff;
    color: #606060;
  `,
    LabelsButton: styled(CommonHeaderButton)
    `
    background: #ffffff;
    color: #606060;
    border-right : 1px solid #e0e0e0;
  `,
    NewIssueButton: styled(CommonHeaderButton)
    `
    border: 1px solid #329246;
    background: linear-gradient( to bottom, #32CD56, #27A844 );
    color: #ffffff;
    border-radius : 4px;

  `,
    ShowTotalNum: styled.span`
    padding : 3px 6px;
    background : #f2f2f2;
    border-radius : 50px;
    `
};

