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
  MilestoneHeader: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  LabelMilestone: styled.div`
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-right: 15px;
  `,
  LabelsButton: styled(CommonHeaderButton)`
    border-radius: 4px 0 0 4px;
    background: #ffffff;
    color: #606060;
    border-right: 1px solid #e0e0e0;
  `,
  MilestonesButton: styled(CommonHeaderButton)`
    border-radius: 0 4px 4px 0;
    background: #ffffff;
    color: #606060;
  `,
  ButtonText: styled.p`
    margin: 0 5px;
  `,
  NewMilestoneButton: styled(CommonHeaderButton)`
    border: 1px solid #329246;
    background: linear-gradient( to bottom, #32CD56, #27A844 );
    color: #ffffff;
    border-radius: 4px;
  `,
};