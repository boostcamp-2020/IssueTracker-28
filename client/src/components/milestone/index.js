import React, { useEffect } from 'react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import { LabelContainer, LabelHeader } from '../labels/style';
import { TitleContainer } from './style';
import S from '../issues/IssueList/ListHeader/style';

const trigger = (
  <LabelHeader>
    <div className="title">Milestone</div>
    <GearIcon className="gear-icon" size={16} />
  </LabelHeader>
);

function Milestone() {
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

  return (
    <LabelContainer>
      <S.FilterDropdown className="label-dropdown">
        <Dropdown className="dropdown" multiple trigger={trigger} icon={null}>
          <Dropdown.Menu className="dropdown-menu" direction="left">
            <Dropdown.Header className="dropdown-header" content="Set milestone" />
            {milestones &&
              milestones.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" key={index}>
                    <TitleContainer>
                      <div>{item.title}</div>
                      <div>{item.due_date}</div>
                    </TitleContainer>
                  </Dropdown.Item>
                </>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </S.FilterDropdown>
      <div className="text">No Milestone</div>
    </LabelContainer>
  );
}

export default Milestone;
