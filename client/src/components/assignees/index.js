import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUsers } from '@contexts/UsersContext';
import { GearIcon } from '@primer/octicons-react';
import { Dropdown } from 'semantic-ui-react';
import LS from '@components/labels/style';
import DS from '../issues/IssueList/ListHeader/style';

const trigger = (
  <LS.LabelHeader>
    <div className="title">Assignees</div>
    <GearIcon className="gear-icon" size={16} />
  </LS.LabelHeader>
);

function Assignees() {
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
                <Dropdown.Item className="dropdown-item" key={index}>
                  <LS.TitleContainer>
                    <div>{item.userId}</div>
                  </LS.TitleContainer>
                </Dropdown.Item>
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </DS.FilterDropdown>
      <div className="text">No one-assign yourself</div>
    </LS.LabelContainer>
  );
}

export default Assignees;
