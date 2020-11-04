import React, { useState, useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUsers } from '@contexts/UsersContext';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import S from './style';
import LS from '@components/labels/style';
import DS from '@components/issues/IssueList/ListHeader/style';

const trigger = (
  <LS.LabelHeader>
    <div className="title">Assignees</div>
    <GearIcon className="gear-icon" size={16} />
  </LS.LabelHeader>
);

function Assignees() {
  const [assignees, setAssignees] = useState(new Set());
  const [isAssignSelf, setIsAssignSelf] = useState(false);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  const handleItemClick = (assignee) => {
    for (let user of Array.from(assignees)) {
      if (user.id === assignee.id) return;
    }

    const newAssignees = new Set(assignees);
    newAssignees.add(assignee)
    setAssignees(newAssignees);
  };

  const handleSelfClick = () => {
    const newAssignees = new Set(assignees);
    newAssignees.add({
      id: parseInt(localStorage.getItem('id')),
      userId: localStorage.getItem('user')
    });
    setAssignees(newAssignees);
    setIsAssignSelf(true);
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
            {users && users.map((item, index) => (
              <>
                <hr className="dropdown-divider" />
                <Dropdown.Item className="dropdown-item" key={index} onClick={() => handleItemClick(item)}>
                  <LS.TitleContainer>
                    <div>{item.userId}</div>
                  </LS.TitleContainer>
                </Dropdown.Item>
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      {
        assignees.size === 0
          ? isAssignSelf
            ? <S.SelectedItem>{localStorage.getItem('user')}</S.SelectedItem>
            : <S.AssignSelf onClick={() => handleSelfClick()}>No one-assign yourself</S.AssignSelf>
          : Array.from(assignees).map((assignee) => (
            <S.SelectedItem>{assignee.userId}</S.SelectedItem>
          ))
      }
    </LS.LabelContainer>
  );
}

export default Assignees;