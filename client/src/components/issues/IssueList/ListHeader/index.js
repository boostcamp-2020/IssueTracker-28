import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import S from './style';

const AUTHOR_MENU = ['Peter Kim', 'Crong Go', 'johnyejin'];
const LABEL_MENU = ['Unlabeled', 'front-end', 'back-end', 'Bug', 'High-priority'];
const MILESTONE_MENU = ['Issues with no milestone', '스프린트 1', '스프린트 2'];
const ASSIGNEE_MENU = ['Assigned to nobody', 'Peter Kim', 'johnyejin'];

function ListHeader() {
  return (
    <S.ListWrapper>
      <input className="all-checkbox" type="checkbox" />
      <S.ListFilters>
        <S.FilterDropdown>
          <Dropdown className="author-dropdown dropdown" text="Author">
            <Dropdown.Menu className="dropdown-menu" direction="left">
              <Dropdown.Header className="dropdown-header" content="Filter by author" />
              {AUTHOR_MENU.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" text={item} key={index} />
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </S.FilterDropdown>
        <S.FilterDropdown>
          <Dropdown className="label-dropdown dropdown" text="Label">
            <Dropdown.Menu className="dropdown-menu" direction="left">
              <Dropdown.Header className="dropdown-header" content="Filter by label" />
              {LABEL_MENU.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" text={item} key={index} />
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </S.FilterDropdown>
        <S.FilterDropdown>
          <Dropdown className="milestons-dropdown dropdown" text="Milestons">
            <Dropdown.Menu className="dropdown-menu" direction="left">
              <Dropdown.Header className="dropdown-header" content="Filter by milestons" />
              {MILESTONE_MENU.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" text={item} key={index} />
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </S.FilterDropdown>
        <S.FilterDropdown>
          <Dropdown className="assignee-dropdown dropdown" text="Assignee">
            <Dropdown.Menu className="dropdown-menu" direction="left">
              <Dropdown.Header className="dropdown-header" content="Filter by assignee" />
              {ASSIGNEE_MENU.map((item, index) => (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item className="dropdown-item" text={item} key={index} />
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </S.FilterDropdown>
      </S.ListFilters>
    </S.ListWrapper>
  );
}

export default ListHeader;
