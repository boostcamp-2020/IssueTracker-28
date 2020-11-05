import React, {Fragment, useState, useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react';
import S from './style';
import { useIssuesState, useIssuesDispatch } from '@contexts/IssuesContext';
import { useCheckedItemState, useCheckedItemDispatch } from '@contexts/CheckedItemContext';
import { SELECT_ALL, DESELECT_ALL, UPDATE_FILTER } from '@constants/actionTypes';

const AUTHOR_MENU = [
  'yeji9175',
  'sang-gyeong',
  'dooking',
  'johnyejin',
  'a'
];
const LABEL_MENU = [
  'Bug',
  'front-end',
  'back-end',
  'High-priority',
  'feature'
];
const MILESTONE_MENU = [
  '스프린트1',
  '스프린트2',
  '스프린트3'
];
const ASSIGNEE_MENU = [
  'yeji9175',
  'sang-gyeong',
  'dooking',
  'johnyejin',
  'a'
];

const NO_FILTER_ITEM = [
  'Unlabeled',
  'Issues with no milestone',
  'Assigend to nobody'
]

function ListHeader() {
  const [beCheckState, SetBeCheckState] = useState(false);
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters} = state;

  const checkState = useCheckedItemState();
  const checkDispatch = useCheckedItemDispatch();
  const {checkedItems, isAllChecked} = checkState;

  const checkHandler=(e)=>{
    const isChecked = e.target.checked;
    SetBeCheckState(!beCheckState);
    isChecked ? checkDispatch({type:SELECT_ALL}) : checkDispatch({type:DESELECT_ALL});
  }

  //필터, issue데이터 등 issue상태가 변하면 전체 선택해제
  useEffect(()=>{
    checkDispatch({type:DESELECT_ALL})
  },[state])

  //전체 선택 상태에 변화가 생기면 체크상태 변경
  useEffect(()=>{
    if(beCheckState!==isAllChecked)
      SetBeCheckState(isAllChecked)
  },[isAllChecked])


  const filterHandler=(item, type)=>{
    switch(type){
      case 'author':
        return dispatch({type:UPDATE_FILTER, filters : {...filters, author : item}});
      case 'label':
        if (item===null) return dispatch({type:UPDATE_FILTER, filters : {...filters,  labels : []}})
        if (filters.labels === '*') return dispatch({type:UPDATE_FILTER, filters : {...filters,  labels : [item]}})
        return dispatch({type:UPDATE_FILTER, filters : {...filters,  labels : [...filters.labels, item]}})
      case 'milestone':
        return dispatch({type:UPDATE_FILTER, filters : {...filters, milestone : item}})
      case 'assignees':
        if (item===null) return dispatch({type:UPDATE_FILTER, filters : {...filters,assignees : []}})
        return dispatch({type:UPDATE_FILTER, filters : {...filters, assignees : [item]}})
    }
  }

  return (
    <S.ListWrapper>
      <input type='checkbox' checked={beCheckState} onChange={(e)=>checkHandler(e)} className='all-checkbox'  />
      {checkedItems.size === 0 ? null : <span className="checked-item-count">{checkedItems.size} selected</span>}
      <S.ListFilters>
      {checkedItems.size === 0 ? 
      <>
      <S.FilterDropdown>
      <Dropdown className='author-dropdown dropdown' text='Author'>
        <Dropdown.Menu className="dropdown-menu" direction='left'>
          <Dropdown.Header className="dropdown-header" content='Filter by author' />
            {AUTHOR_MENU.map((item, index) => (
              <Fragment>
                <hr className="dropdown-divider"/>
                <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(item, 'author')}} text={item} key={index} />
              </Fragment>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.FilterDropdown>
    <S.FilterDropdown>
      <Dropdown className='label-dropdown dropdown' text='Label'>
        <Dropdown.Menu className="dropdown-menu" direction='left'>
          <Dropdown.Header className="dropdown-header" content='Filter by label' />
          <hr className="dropdown-divider"/>
          <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(null, 'label')}} text={NO_FILTER_ITEM[0]} />
          {LABEL_MENU.map((item, index) => (
              <Fragment>
                <hr className="dropdown-divider"/>
                <Dropdown.Item className="dropdown-item"  onClick={()=>{filterHandler(item, 'label')}} text={item} key={index} />
              </Fragment>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.FilterDropdown>
    <S.FilterDropdown>
      <Dropdown className='milestons-dropdown dropdown' text='Milestons'>
        <Dropdown.Menu className="dropdown-menu" direction='left'>
          <Dropdown.Header className="dropdown-header" content='Filter by milestons' />
          <hr className="dropdown-divider"/>
          <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(null, 'milestone')}} text={NO_FILTER_ITEM[1]} />
          {MILESTONE_MENU.map((item, index) => (
              <Fragment>
                <hr className="dropdown-divider"/>
                <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(item, 'milestone')}} text={item} key={index} />
              </Fragment>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.FilterDropdown>
    <S.FilterDropdown>
      <Dropdown className='assignee-dropdown dropdown' text='Assignee'>
        <Dropdown.Menu className="dropdown-menu" direction='left'>
          <Dropdown.Header className="dropdown-header" content='Filter by assignee' />
          <hr className="dropdown-divider"/>
          <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(null, 'assignees')}} text={NO_FILTER_ITEM[2]} />
          {ASSIGNEE_MENU.map((item, index) => (
              <Fragment>
                <hr className="dropdown-divider"/>
                <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(item, 'assignees')}} text={item} key={index} />
              </Fragment>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.FilterDropdown>
    </>
      : 
        <S.FilterDropdown>
        <Dropdown className='mark-as-dropdown dropdown' text='Mark as'>
        <Dropdown.Menu className="dropdown-menu" direction='left'>
          <Dropdown.Header className="dropdown-header" content='Actions' />
          <hr className="dropdown-divider"/>
          <Dropdown.Item className="dropdown-item" text='Open'/>
          <hr className="dropdown-divider"/>
          <Dropdown.Item className="dropdown-item" text='Closed'/>
        </Dropdown.Menu>
      </Dropdown>
      </S.FilterDropdown>
      }
      </S.ListFilters>
    </S.ListWrapper>
  );
}

export default ListHeader;
