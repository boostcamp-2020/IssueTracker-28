import React, { useEffect } from 'react';
import { useMilestonesState, useMilestonesDispatch } from '@contexts/MilestonesContext';
import Date from '@utils/date';
import { GearIcon, CheckIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import DS from '@components/issues/issueList/listHeader/style';
import * as api from '@api/issue';
import S from './style';
import LS from '../labels/style';

const trigger = (
  <LS.LabelHeader>
    <div className="title">Milestone</div>
    <GearIcon className="gear-icon" size={16} />
  </LS.LabelHeader>
);

function Milestone({ id = null }) {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();

  const { data } = state.milestones;
  const milestones = data?.milestones;
  const { selectedMilestone } = state;
  const openCnt = data?.milestoneCnt[0];
  const closeCnt = data?.milestoneCnt[1];

  useEffect(() => { }, [dispatch]);

  const clickHandler = async (item) => {
    let flag = true;
    let newMilestone = null;
    if (!selectedMilestone) newMilestone = item;
    else if (selectedMilestone.id !== item.id) newMilestone = item;
    else flag = false;

    dispatch({ type: 'UPDATE_SELECTED_MILESTONE', data: newMilestone });
    if (id) await api.updateIssueMilestone(id, item.id, flag);
  };

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
                  <Dropdown.Item
                    className="dropdown-item"
                    key={index}
                    onClick={() => clickHandler(item)}
                  >
                    <S.ItemWrapper>
                      {selectedMilestone ? (
                        selectedMilestone.id === item.id ? (
                          <CheckIcon size={16} className="sidebar-check-icon show" />
                        ) : (
                            <CheckIcon size={16} className="sidebar-check-icon" />
                          )
                      ) : null}
                      <S.TitleContainer>
                        <S.ItemTitle>{item.title}</S.ItemTitle>
                        <S.ItemDate>
                          Due by{' '}
                          {Date.getDate(item.dueDate, {
                            day: 'numeric',
                            year: 'numeric',
                            month: 'long',
                          })}
                        </S.ItemDate>
                      </S.TitleContainer>
                    </S.ItemWrapper>
                  </Dropdown.Item>
                </>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      {selectedMilestone ? (
        <>
          <S.ProgressBar value={openCnt} max={openCnt + closeCnt} />
          <S.SelectedItem>{selectedMilestone.title}</S.SelectedItem>
        </>
      ) : (
          <div>No Milestone</div>
        )}
    </LS.LabelContainer>
  );
}

export default Milestone;
