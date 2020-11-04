import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
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
                          onClick={() => {
                            filterHandler(item.userId, 'author');
                          }}
                          text={item.userId}
                          key={item.id}
                        />
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
                    onClick={() => {
                      filterHandler(null, 'label');
                    }}
                    text={NO_FILTER_ITEM[0]}
                  />
                  {labels &&
                    labels.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={() => {
                            filterHandler(item.name, 'label');
                          }}
                          key={item.id}
                        >
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
            </S.FilterDropdown>
            <S.FilterDropdown>
              <Dropdown className="milestons-dropdown dropdown" text="Milestons">
                <Dropdown.Menu className="dropdown-menu" direction="left">
                  <Dropdown.Header className="dropdown-header" content="Filter by milestons" />
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => {
                      filterHandler(null, 'milestone');
                    }}
                    text={NO_FILTER_ITEM[1]}
                  />
                  {milestones &&
                    milestones.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={() => {
                            filterHandler(item.title, 'milestone');
                          }}
                          key={item.id}
                        >
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
            <S.FilterDropdown>
              <Dropdown className="assignee-dropdown dropdown" text="Assignee">
                <Dropdown.Menu className="dropdown-menu" direction="left">
                  <Dropdown.Header className="dropdown-header" content="Filter by assignee" />
                  <hr className="dropdown-divider" />
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => {
                      filterHandler(null, 'assignees');
                    }}
                    text={NO_FILTER_ITEM[2]}
                  />
                  {users &&
                    users.map((item) => (
                      <>
                        <hr className="dropdown-divider" />
                        <Dropdown.Item
                          className="dropdown-item"
                          onClick={() => {
                            filterHandler(item.userId, 'assignees');
                          }}
                          text={item.userId}
                          key={item.id}
                        />
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
