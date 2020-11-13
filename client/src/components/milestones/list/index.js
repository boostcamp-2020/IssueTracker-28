import React, { useState, useEffect } from 'react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
  updateMilestoneStatus,
  deleteMilestone,
} from '@contexts/MilestonesContext';
import { OPEN, CLOSE } from '@constants/status';
import { MilestoneIcon, CheckIcon } from '@primer/octicons-react';
import Spinner from '@images/spinner3.gif';
import Milestone from './milestone';
import S from './style';

function List() {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();
  const { data, loading, error } = state.milestones;
  const [status, setStatus] = useState(OPEN); // open: 0, close: 1

  useEffect(() => { }, [dispatch]);

  const fetchData = () => {
    getMilestones(dispatch);
  };

  const handleStatus = (statusCode) => {
    setStatus(statusCode);
  };

  const toggleStatus = () => {
    const $countWrapper = document.querySelectorAll('.count-wrapper');
    $countWrapper.forEach((element) => element.classList.remove('show'));

    const $open = document.querySelector('.open');
    const $close = document.querySelector('.close');

    if ($open === null) return;

    status === 0 ? $open.classList.add('show') : $close.classList.add('show');
  };

  useEffect(() => {
    toggleStatus();
  });

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusClick = (id, status) => {
    updateMilestoneStatus(dispatch, {
      id,
      status: status === 'open' ? CLOSE : OPEN,
    });

    fetchData();
  };

  const handleDeleteClick = (id) => {
    deleteMilestone(dispatch, { id });
    fetchData();
  };

  if (loading) return <S.LoadSpinner src={Spinner} />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return <button onClick={fetchData}>불러오기</button>;

  const { milestoneCnt, milestones } = data;
  const [openCnt, closedCnt] = milestoneCnt;

  return (
    <S.ListWrapper>
      <S.ListHeader>
        <S.CountWrapper className="count-wrapper open" onClick={() => handleStatus(OPEN)}>
          <MilestoneIcon />
          <S.Count>{openCnt} Open</S.Count>
        </S.CountWrapper>
        <S.CountWrapper className="count-wrapper close" onClick={() => handleStatus(CLOSE)}>
          <CheckIcon />
          <S.Count>{closedCnt} Closed</S.Count>
        </S.CountWrapper>
      </S.ListHeader>
      <S.List>
        {milestones &&
          milestones.map((milestone) => {
            const milestoneStatus = milestone.status === 'open' ? OPEN : CLOSE;
            if (milestoneStatus === status) {
              return (
                <Milestone
                  key={milestone.id}
                  milestone={milestone}
                  handleStatusClick={handleStatusClick}
                  handleDeleteClick={handleDeleteClick}
                />
              );
            }
          })}
      </S.List>
    </S.ListWrapper>
  );
}

export default List;
