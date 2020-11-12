import React, { useEffect } from 'react';
import { useLabelState, useLabelDispatch } from '@contexts/LabelContext';
import { GearIcon, CheckIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import * as api from '@api/issue';
import S from './style';
import DS from '../../issues/issueList/listHeader/style';

const trigger = (
  <S.LabelHeader>
    <div className="title">Labels</div>
    <GearIcon className="gear-icon" size={16} />
  </S.LabelHeader>
);

function Labels({ id = null }) {
  const state = useLabelState();
  const dispatch = useLabelDispatch();

  const { data: labels } = state.labels;
  const { selectedLabels } = state;

  useEffect(() => {}, [dispatch]);

  const clickHandler = async (item) => {
    let flag = true;
    const newLabels = new Set();
    for (const label of Array.from(selectedLabels)) {
      if (item.id !== label.id) newLabels.add(label);
      else flag = false;
    }
    if (flag) newLabels.add(item);
    dispatch({ type: 'UPDATE_SELECTED_LABELS', data: newLabels });
    if (id) await api.updateIssueLabel(id, item.id, flag);
  };

  return (
    <S.LabelContainer>
      <DS.FilterDropdown className="label-dropdown">
        <Dropdown className="dropdown" multiple trigger={trigger} icon={null}>
          <Dropdown.Menu className="dropdown-menu" direction="left">
            <Dropdown.Header className="dropdown-header" content="Apply labels to this issue" />
            {labels &&
              labels.map((item) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => clickHandler(item)}
                  >
                    <S.TitleContainer>
                      {Array.from(selectedLabels).some((label) => label.id === item.id) ? (
                        <CheckIcon size={16} className="sidebar-check-icon show" />
                      ) : (
                        <CheckIcon size={16} className="sidebar-check-icon" />
                      )}
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
      {selectedLabels.size === 0 || selectedLabels.length === 0 ? (
        <div>None yet</div>
      ) : (
          Array.from(selectedLabels).map((label, index) => (
            <S.SelectedItem key={index} background={label.color}>
              {label.name}
            </S.SelectedItem>
          ))
        )}
    </S.LabelContainer>
  );
}

export default Labels;
