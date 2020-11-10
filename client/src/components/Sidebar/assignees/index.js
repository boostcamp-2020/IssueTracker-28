import React, { useState, useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUsers } from '@contexts/UsersContext';
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

function Assignees({ selectedAssignees, handleAssigneeClick }) {
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
  if (!users) return <input type="button" onClick={fetchData} value="불러오기" />;

  const handleSelfClick = () => {
    handleAssigneeClick({
      id: parseInt(localStorage.getItem('id')),
      userId: localStorage.getItem('user_id'),
    });
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
            {users &&
              users.map((item) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => handleAssigneeClick(item)}
                  >
                    <LS.TitleContainer>
                      <LS.LabelPic src={EmptyUserPic} />
                      <div>{item.userId}</div>
                    </LS.TitleContainer>
                  </Dropdown.Item>
                </>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      {selectedAssignees.size === 0 ? (
        isAssignSelf ? (
          <S.SelectedItem>{localStorage.getItem('user_id')}</S.SelectedItem>
        ) : (
          <S.AssignSelf onClick={() => handleSelfClick()}>No one-assign yourself</S.AssignSelf>
        )
      ) : (
        Array.from(selectedAssignees).map((assignee) => (
          <S.SelectedAssigneeWrapper>
            <LS.LabelPic src={EmptyUserPic} />
            <S.SelectedItem>{assignee}</S.SelectedItem>
          </S.SelectedAssigneeWrapper>
        ))
      )}
    </LS.LabelContainer>
  );
}

export default Assignees;
