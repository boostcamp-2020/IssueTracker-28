import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { CheckIcon } from '@primer/octicons-react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';
import { useIssuesState, useIssuesDispatch } from '@contexts/IssuesContext';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import { useUsersState, useUsersDispatch, getUsers } from '@contexts/UsersContext';
import { BoxColor, TitleContainer, LabelName, LabelDesc } from '../../../labels/style';
import S from './style';
import handler from './handler';

const NO_FILTER_ITEM = ['Unlabeled', 'Issues with no milestone', 'Assigend to nobody'];

function ListHeader({ checkedItems, isAllChecked }) {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

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

  const filterHandler = handler(state, dispatch);

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
                            <LabelName>{item.userId}</LabelName>
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
                      <LabelName>{NO_FILTER_ITEM[0]}</LabelName>
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
                          <TitleContainer>
                            <CheckIcon size={16} className="check-icon" />
                            <BoxColor background={item.color} />
                            <LabelName>{item.name}</LabelName>
                          </TitleContainer>
                          <LabelDesc>{item.desc}</LabelDesc>
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
                      <LabelName>{NO_FILTER_ITEM[1]}</LabelName>
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
                          <TitleContainer>
                            <CheckIcon size={16} className="check-icon" />
                            <div>{item.title}</div>
                            <div>{item.due_date}</div>
                          </TitleContainer>
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
                      <LabelName>{NO_FILTER_ITEM[2]}</LabelName>
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
                            <LabelName>{item.userId}</LabelName>
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
                <Dropdown.Item className="dropdown-item" text="Open" />
                <hr className="dropdown-divider" />
                <Dropdown.Item className="dropdown-item" text="Closed" />
              </Dropdown.Menu>
            </Dropdown>
          </S.FilterDropdown>
        )}
      </S.ListFilters>
    </S.ListWrapper>
  );
}

export default ListHeader;
