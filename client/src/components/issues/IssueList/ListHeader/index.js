import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { CheckIcon } from '@primer/octicons-react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';
import { useIssuesState, useIssuesDispatch, updateIssueStatus } from '@contexts/IssuesContext';
import { useUsersState, useUsersDispatch, getUsers } from '@contexts/UsersContext';
import { useCheckedItemState, useCheckedItemDispatch } from '@contexts/CheckedItemContext';
import { SELECT_ALL, DESELECT_ALL, UPDATE_FILTER } from '@constants/actionTypes';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import LS from '@sidebar/labels/style';
import S from './style';
import handler from './handler';

const NO_FILTER_ITEM = ['Unlabeled', 'Issues with no milestone', 'Assigend to nobody'];

function ListHeader() {
  const issuesState = useIssuesState();
  const issuesDispatch = useIssuesDispatch();

  const labelState = useLabelState();
  const labelDispatch = useLabelDispatch();
  const milestoneState = useMilestonesState();
  const milestoneDispatch = useMilestonesDispatch();
  const usersState = useUsersState();
  const usersDispatch = useUsersDispatch();

  const { data: labels } = labelState.labels;
  const { data: users } = usersState.users;
  const { data } = milestoneState.milestones;
  const milestones = data?.milestones;

  const [beCheckState, SetBeCheckState] = useState(false);

  const checkState = useCheckedItemState();
  const checkDispatch = useCheckedItemDispatch();
  const { checkedItems, isAllChecked } = checkState;

  const checkHandler = (e) => {
    const isChecked = e.target.checked;
    SetBeCheckState(!beCheckState);
    isChecked ? checkDispatch({ type: SELECT_ALL }) : checkDispatch({ type: DESELECT_ALL });
  };

  // 필터, issue데이터 등 issue상태가 변하면 전체 선택해제
  useEffect(() => {
    checkDispatch({ type: DESELECT_ALL });
  }, [issuesState]);

  // 전체 선택 상태에 변화가 생기면 체크상태 변경
  useEffect(() => {
    if (beCheckState !== isAllChecked) SetBeCheckState(isAllChecked);
  }, [isAllChecked]);

  const fetchData = () => {
    getLabels(labelDispatch);
    getUsers(usersDispatch);
    getMilestones(milestoneDispatch);
  };

  const clickHandler = (e, filter, isNothing = false) => {
    const menu = e.target.closest('.dropdown-menu');
    const item = e.target.closest('.dropdown-item');
    const check = item.querySelector('.check-icon');

    if (filter === 'author' || filter === 'milestone' || isNothing) {
      const checkedList = menu.querySelectorAll('.show');
      checkedList.forEach((element) => {
        if (element !== check) element.classList.toggle('show');
      });
    }
    check.classList.toggle('show');
  };

  const markAsOpenHandler=()=>{
    updateIssueStatus(issuesDispatch, checkedItems, 0)
  }
  const markAsCloseHandler=()=>{
    updateIssueStatus(issuesDispatch, checkedItems, 1)
  }
  

  const filterHandler = handler(issuesState, issuesDispatch);

  useEffect(() => {
    fetchData();
  }, [labelDispatch, milestoneDispatch, usersDispatch]);

  return (
    <S.ListWrapper>
      <input
        type="checkbox"
        checked={isAllChecked}
        onChange={(e) => checkHandler(e)}
        className="all-checkbox"
      />
      {checkedItems.size === 0 ? null : (
        <span className="checked-item-count">{checkedItems.size} selected</span>
      )}
      <S.ListFilters>
        {checkedItems.size === 0 ? (
          <>
            <S.FilterDropdown>
              <Dropdown className="author-dropdown dropdown" text="Author">
                <Dropdown.Menu className="dropdown-menu" direction="left">
                  <Dropdown.Header className="dropdown-header" content="Filter by author" />
                  {users &&
                    users.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={(e) => {
                            clickHandler(e, 'author');
                            filterHandler(item.userId, 'author');
                          }}
                          key={item.id}
                        >
                          <S.ItemContainer>
                            <CheckIcon size={16} className="check-icon" />
                            <LS.LabelName>{item.userId}</LS.LabelName>
                          </S.ItemContainer>
                        </Dropdown.Item>
                      </>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </S.FilterDropdown>
            <S.FilterDropdown>
              <Dropdown className="label-dropdown dropdown" text="Label">
                <Dropdown.Menu className="dropdown-menu" direction="left">
                  <Dropdown.Header className="dropdown-header" content="Filter by label" />
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={(e) => {
                      clickHandler(e, 'label', true);
                      filterHandler(null, 'label');
                    }}
                  >
                    <S.ItemContainer>
                      <CheckIcon size={16} className="check-icon" />
                      <LS.LabelName>{NO_FILTER_ITEM[0]}</LS.LabelName>
                    </S.ItemContainer>
                  </Dropdown.Item>
                  {labels &&
                    labels.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={(e) => {
                            clickHandler(e, 'label');
                            filterHandler(item.name, 'label');
                          }}
                          key={item.id}
                        >
                          <LS.TitleContainer>
                            <CheckIcon size={16} className="check-icon" />
                            <LS.BoxColor background={item.color} />
                            <LS.LabelName>{item.name}</LS.LabelName>
                          </LS.TitleContainer>
                          <LS.LabelDesc>{item.desc}</LS.LabelDesc>
                        </Dropdown.Item>
                      </>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </S.FilterDropdown>
            <S.FilterDropdown>
              <Dropdown className="milestons-dropdown dropdown" text="Milestons">
                <Dropdown.Menu className="dropdown-menu" direction="left">
                  <Dropdown.Header className="dropdown-header" content="Filter by milestons" />
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={(e) => {
                      clickHandler(e, 'milestone', true);
                      filterHandler(null, 'milestone');
                    }}
                  >
                    <S.ItemContainer>
                      <CheckIcon size={16} className="check-icon" />
                      <LS.LabelName>{NO_FILTER_ITEM[1]}</LS.LabelName>
                    </S.ItemContainer>
                  </Dropdown.Item>
                  {milestones &&
                    milestones.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={(e) => {
                            clickHandler(e, 'milestone');
                            filterHandler(item.title, 'milestone');
                          }}
                          key={item.id}
                        >
                          <LS.TitleContainer>
                            <CheckIcon size={16} className="check-icon" />
                            <div>{item.title}</div>
                            <div>{item.due_date}</div>
                          </LS.TitleContainer>
                        </Dropdown.Item>
                      </>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </S.FilterDropdown>
            <S.FilterDropdown>
              <Dropdown className="assignee-dropdown dropdown" text="Assignee">
                <Dropdown.Menu className="dropdown-menu" direction="left">
                  <Dropdown.Header className="dropdown-header" content="Filter by assignee" />
                  <hr className="dropdown-divider" />
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={(e) => {
                      clickHandler(e, 'assignees', true);
                      filterHandler(null, 'assignees');
                    }}
                  >
                    <S.ItemContainer>
                      <CheckIcon size={16} className="check-icon" />
                      <LS.LabelName>{NO_FILTER_ITEM[2]}</LS.LabelName>
                    </S.ItemContainer>
                  </Dropdown.Item>
                  {users &&
                    users.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={(e) => {
                            clickHandler(e, 'assignees');
                            filterHandler(item.userId, 'assignees');
                          }}
                          key={item.id}
                        >
                          <S.ItemContainer>
                            <CheckIcon size={16} className="check-icon" />
                            <LS.LabelName>{item.userId}</LS.LabelName>
                          </S.ItemContainer>
                        </Dropdown.Item>
                      </>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </S.FilterDropdown>
          </>
        ) : (
          <S.FilterDropdown>
            <Dropdown className="mark-as-dropdown dropdown" text="Mark as">
              <Dropdown.Menu className="dropdown-menu" direction="left">
                <Dropdown.Header className="dropdown-header" content="Actions" />
                <hr className="dropdown-divider" />
                <Dropdown.Item className="dropdown-item" text="Open" onClick={markAsOpenHandler}/>
                <hr className="dropdown-divider" />
                <Dropdown.Item className="dropdown-item" text="Closed" onClick={markAsCloseHandler}/>
              </Dropdown.Menu>
            </Dropdown>
          </S.FilterDropdown>
        )}
      </S.ListFilters>
    </S.ListWrapper>
  );
}

export default ListHeader;
