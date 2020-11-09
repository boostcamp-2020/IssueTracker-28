import React, { useEffect } from 'react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '@contexts/MilestonesContext';
import Milestone from './Milestone';
import { MilestoneIcon, CheckIcon } from '@primer/octicons-react';
import S from './style';

function List() {
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
    <S.ListWrapper>
      <S.ListHeader>
        <S.CountWrapper>
          <MilestoneIcon />
          <S.Count>{openCnt} Open</S.Count>
        </S.CountWrapper>
        <S.CountWrapper>
          <CheckIcon />
          <S.Count>{closedCnt} Closed</S.Count>
        </S.CountWrapper>
      </S.ListHeader>
      <S.List>
        {milestones && milestones.map(milestone => (
          <Milestone key={milestone.id} milestone={milestone} />
        ))}
      </S.List>
    </S.ListWrapper>
  );
}

export default List;