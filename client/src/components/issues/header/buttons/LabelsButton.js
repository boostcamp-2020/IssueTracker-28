import React, { useEffect } from 'react';
import { TagIcon } from '@primer/octicons-react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';
import { useHistory } from 'react-router-dom';
import S from './style';

function LabelsButton() {
  const state = useLabelState();
  const dispatch = useLabelDispatch();
  const history = useHistory();

  const { data: labels, loading, error } = state.labels;

  const fetchData = () => {
    getLabels(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <S.LabelsButton onClick={() => history.push('/label')}>
      <TagIcon size={14} />
      <S.ButtonText>Labels</S.ButtonText>
      <S.ShowTotalNum>{labels ? labels.length : 0}</S.ShowTotalNum>
    </S.LabelsButton>
  );
}

export default LabelsButton;
