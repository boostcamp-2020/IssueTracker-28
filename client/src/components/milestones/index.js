import React, { useEffect } from 'react';
import {
  useMilestonesState,
  useMilestonesDispatch,
  getMilestones,
} from '../../contexts/MilestonesContext';

function Milestone() {
  const state = useMilestonesState();
  const dispatch = useMilestonesDispatch();

  const { data: milestones, loading, size, open, closed, error } = state.milestones;
  const fetchData = () => {
    getMilestones(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!milestones) return <button onClick={fetchData}> 불러오기 </button>;

  return (
    <div className="list-wrapper">
      <h2>전체 크기 : {size}</h2>
      <h4>OPEN : {open}</h4>
      <h4>CLOSED : {closed}</h4>
      {milestones.map((milestone, index) => (
        <div key={index}>
          <p>ID : {milestone.id}</p>
          <p>상태 : {milestone.status}</p>
          <p>제목 : {milestone.title}</p>
          <p>마감기한 : {milestone.due_date}</p>
          <p>설명 : {milestone.desc}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Milestone;
