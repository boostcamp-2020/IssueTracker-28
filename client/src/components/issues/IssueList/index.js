import React, { useState, useEffect } from 'react';
import { useIssuesState, useIssuesDispatch, getIssues } from '@contexts/IssuesContext';
import filterIssue from '@utils/filterIssue';
import ListHeader from './ListHeader';
import List from './List';
import S from './style';

function IssueList() {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: issues, loading, error } = state.issues;
  const { filters } = state;

  const fetchData = () => {
    getIssues(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!issues) return <button onClick={fetchData}> 불러오기 </button>;

  const filteredIssues = issues.filter((issue) => {
    return filterIssue(issue, filters);
  });
  console.log('checkedItems : ', checkedItems);
  console.log('현재 적용중인 필터 : ', filters);
  
  const allCheckedHandler = (isChecked) => {
    if (isChecked) {
      setCheckedItems(new Set(filteredIssues.map(({ id }) => id)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(new Set([...checkedItems]));
      setIsAllChecked(false);
    }
  };
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems(new Set([...checkedItems, id]));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(new Set([...checkedItems]));
    }
  };
  return (
    <S.ListWrapper>
      <ListHeader
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        checkedItems={checkedItems}
        allCheckedHandler={allCheckedHandler}
      />
      <List
        filteredIssues={filteredIssues}
        isAllChecked={isAllChecked}
        checkedItemHandler={checkedItemHandler}
      />
    </S.ListWrapper>
  );
}
export default IssueList;
