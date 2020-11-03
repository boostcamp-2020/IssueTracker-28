import React, { useEffect } from 'react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import { BoxColor, LabelContainer, LabelHeader, TitleContainer, LabelName, LabelDesc } from './style';
import { FilterDropdown } from '../issues/IssueList/ListHeader/style';

const trigger = (
  <LabelHeader>
    <div className="title">Labels</div>
    <GearIcon className="gear-icon" size={16} />
  </LabelHeader>
);

function Label() {
  const state = useLabelState();
  const dispatch = useLabelDispatch();

  const { data: labels, loading, error } = state.labels;

  const fetchData = () => {
    getLabels(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!labels) return <button onClick={fetchData}> 불러오기 </button>;

  return (
    <LabelContainer>
      <FilterDropdown className='label-dropdown'>
        <Dropdown
          className='dropdown'
          multiple={true}
          trigger={trigger}
          icon={null}
        >
          <Dropdown.Menu className='dropdown-menu' direction='left'>
            <Dropdown.Header className='dropdown-header' content='Apply labels to this issue' />
            {labels && labels.map((item, index) => (
              <>
                <hr className='dropdown-divider' />
                <Dropdown.Item className='dropdown-item' key={index}>
                  <TitleContainer>
                    <BoxColor background={item.color} />
                    <LabelName>{item.name}</LabelName>
                  </TitleContainer>
                  <LabelDesc>{item.desc}</LabelDesc>
                </Dropdown.Item>
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </FilterDropdown>
      <div className='text'>None yet</div>
    </LabelContainer>
  );
}

export default Label;