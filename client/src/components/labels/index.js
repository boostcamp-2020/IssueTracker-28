import React, { useEffect } from 'react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import S from './style';
import DS from '../issues/IssueList/ListHeader/style';

const trigger = (
  <S.LabelHeader>
    <div className="title">Labels</div>
    <GearIcon className="gear-icon" size={16} />
  </S.LabelHeader>
);

function Labels({ selectedLabels, handleLabelClick }) {
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
    <S.LabelContainer>
      <DS.FilterDropdown className="label-dropdown">
        <Dropdown className="dropdown" multiple trigger={trigger} icon={null}>
          <Dropdown.Menu className="dropdown-menu" direction="left">
            <Dropdown.Header className="dropdown-header" content="Apply labels to this issue" />
            {labels &&
              labels.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" key={index} onClick={() => handleLabelClick(item)}>
                    <S.TitleContainer>
                      <S.BoxColor background={item.color} />
                      <S.LabelName>{item.name}</S.LabelName>
                    </S.TitleContainer>
                    <S.LabelDesc>{item.desc}</S.LabelDesc>
                  </Dropdown.Item>
                </>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      {
        selectedLabels.size === 0
          ? <div>None yet</div>
          : Array.from(selectedLabels).map((label) => (
            <S.SelectedItem background={label.color}>{label.name}</S.SelectedItem>
          ))
      }
    </S.LabelContainer>
  );
}

export default Labels;
