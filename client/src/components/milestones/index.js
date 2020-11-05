import React, { useEffect } from 'react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import Header from './Header';
import List from './List';
import S from './style';

function Milestone() {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();
  const { data, loading, error } = state.milestones;
  const fetchData = () => {
    getMilestones(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!data) return <button onClick={fetchData}>불러오기</button>;

  const { milestoneCnt, milestones } = data;
  const [openCnt, closedCnt] = milestoneCnt;

  return (
    <S.MilestoneWrapper>
      <Header />
      <List />
    </S.MilestoneWrapper>
  );
}

export default Milestone;
