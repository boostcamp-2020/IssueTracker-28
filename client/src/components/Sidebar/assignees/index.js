import React, { useState, useEffect } from 'react';
import { useUsersState, useUsersDispatch } from '@contexts/UsersContext';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import LS from '@sidebar/labels/style';
import DS from '@components/issues/issueList/listHeader/style';
import EmptyUserPic from '@images/empty-user.png';
import S from './style';

const trigger = (
  <LS.LabelHeader>
    <div className="title">Assignees</div>
    <GearIcon className="gear-icon" size={16} />
  </LS.LabelHeader>
);

function Assignees() {
  const [isAssignSelf, setIsAssignSelf] = useState(false);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users } = state.users;
  const { selectedUsers } = state;

  const handleSelfClick = () => {
    handleAssigneeClick({
      id: parseInt(localStorage.getItem('id')),
      userId: localStorage.getItem('user_id'),
    });
    setIsAssignSelf(true);
  };

  useEffect(() => {}, [dispatch]);

  const clickHandler = (item) => {
    let flag = true;
    const newAssignees = new Set();
    for (const assignee of Array.from(selectedUsers)) {
      if (item.id !== assignee.id) newAssignees.add(assignee);
      else flag = false;
    }
    if (flag) newAssignees.add(item);
    dispatch({ type: 'UPDATE_SELECTED_USERS', data: newAssignees });
  };

  return (
    <LS.LabelContainer>
      <DS.FilterDropdown className="label-dropdown">
        <Dropdown className="dropdown" multiple trigger={trigger} icon={null}>
          <Dropdown.Menu className="dropdown-menu" direction="left">
            <Dropdown.Header
              className="dropdown-header"
              content="Assign up to 10 people to thie issue"
            />
            {users &&
              users.map((item) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => clickHandler(item)}
                  >
                    <LS.TitleContainer>
                      <LS.LabelPic src={item.profileImg ? item.profileImg : EmptyUserPic} />
                      <div>{item.userId}</div>
                    </LS.TitleContainer>
                  </Dropdown.Item>
                </>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      {selectedUsers.size === 0 || selectedUsers.length === 0 ? (
        isAssignSelf ? (
          <S.SelectedItem>{localStorage.getItem('user_id')}</S.SelectedItem>
        ) : (
          <S.AssignSelf onClick={() => handleSelfClick()}>No one-assign yourself</S.AssignSelf>
        )
      ) : (
        Array.from(selectedUsers).map((user) => (
          <S.SelectedAssigneeWrapper>
            <LS.LabelPic src={user.profileImg ? user.profileImg : EmptyUserPic} />
            <S.SelectedItem>{user.userId}</S.SelectedItem>
          </S.SelectedAssigneeWrapper>
        ))
      )}
    </LS.LabelContainer>
  );
}

export default Assignees;
