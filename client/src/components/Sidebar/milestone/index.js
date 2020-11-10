import React, { useEffect } from 'react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import Date from '@utils/date';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import S from './style';
import LS from '../labels/style';
import DS from '../../issues/issueList/listHeader/style';

const trigger = (
  <LS.LabelHeader>
    <div className="title">Milestone</div>
    <GearIcon className="gear-icon" size={16} />
  </LS.LabelHeader>
);

function Milestone({ selectedMilestone, handleMilestoneClick }) {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();

  const { data, loading, error } = state.milestones;
  const milestones = data?.milestones;

  const fetchData = () => {
    getMilestones(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!milestones) return <button onClick={fetchData}> 불러오기 </button>;

  const [openCnt, closeCnt] = data.milestoneCnt;

  return (
    <LS.LabelContainer>
      <DS.FilterDropdown className="label-dropdown">
        <Dropdown className="dropdown" multiple trigger={trigger} icon={null}>
          <Dropdown.Menu className="dropdown-menu" direction="left">
            <Dropdown.Header className="dropdown-header" content="Set milestone" />
            {milestones &&
              milestones.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" key={index} onClick={() => handleMilestoneClick(item)}>
                    <S.TitleContainer>
                      <S.ItemTitle>{item.title}</S.ItemTitle>
                      <S.ItemDate>Due by {Date.getDate(item.due_date, { day: 'numeric', year: 'numeric', month: 'long' })}</S.ItemDate>
                      {/* <S.ItemDate>Due by {new Date(item.due_date).toLocaleDateString('en-US', dateOptions)}</S.ItemDate> */}
                    </S.TitleContainer>
                  </Dropdown.Item>
                </>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      {
        selectedMilestone
          ?
          <>
            <S.ProgressBar value={openCnt} max={openCnt + closeCnt}></S.ProgressBar>
            <S.SelectedItem>{selectedMilestone.title}</S.SelectedItem>
          </>
          : <div>No Milestone</div>
      }
    </LS.LabelContainer>
  );
}

export default Milestone;
