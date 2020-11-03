import React, { useEffect } from 'react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';

function Label() {
  const state = useLabelState();
  const dispatch = useLabelDispatch();

  const { data: labels, loading, error } = state.labels;
  const fetchData = () => {
    getLabels(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  console.log('labels :>> ', labels);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!labels) return <button onClick={fetchData}> 불러오기 </button>;

  return (
    <>
      {labels.map((label) => (
        <>
          <div>{label.name}</div>
          <div>{label.desc}</div>
          <div>{label.color}</div>
        </>
      ))}
    </>
  );
}

export default Label;
