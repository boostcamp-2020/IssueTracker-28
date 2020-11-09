import React, {useEffect} from 'react';
import Label from './Label';
import {
  useLabelState,
  useLabelDispatch,
  getLabels,
} from '@contexts/LabelContext';
import S from './style';

function List() {
  const state = useLabelState();
  const dispatch = useLabelDispatch();
  const { data, loading, error } = state.labels;

  const fetchData = () => {
    getLabels(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <div> 로딩중.. </div>;
  if (error) return <div> 에러가 발생했습니다 </div>;
  if (!data) return <button onClick={fetchData}>불러오기</button>;

  return (
    <S.ListWrapper>
      <S.ListHeader>
        <S.CountWrapper>
          <S.Count>{data.length} labels</S.Count>
        </S.CountWrapper>
      </S.ListHeader>
      <S.List>
        {data.map((label)=>
          <Label key={label.id} label={label}/>
        )}
      </S.List>
    </S.ListWrapper>
  );
}

export default List;