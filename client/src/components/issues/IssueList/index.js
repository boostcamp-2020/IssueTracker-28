import React, {useState} from 'react';
import ListHeader from './ListHeader';
import List from './List';
import { ListWrapper } from './style';
import { useIssuesState} from '@contexts/IssuesContext';
import {filterIssue} from '@utils/filterIssue'
import { test_items } from '../issueList/List/testItems'

function IssueList() {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const state = useIssuesState();
  const {filters} = state;
  const filteredIssues = test_items.filter((issue)=>{return filterIssue(issue, filters)})
  console.log('현재 적용중인 필터 : ', filters)

  const allCheckedHandler = (isChecked) => {
    if (isChecked) {
      setCheckedItems(new Set(filteredIssues.map(({ id }) => id)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setIsAllChecked(false);
    }
  };
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  return (
    <ListWrapper>
      <ListHeader allCheckedHandler={allCheckedHandler} />
      <List filteredIssues={filteredIssues} isAllChecked={isAllChecked} checkedItemHandler={checkedItemHandler}/>
    </ListWrapper>
  );
}

export default IssueList;
