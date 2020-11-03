import React, { useEffect } from 'react';
import S from './style';
import { TagIcon } from '@primer/octicons-react';
import { useLabelState, useLabelDispatch, getLabels } from '@contexts/LabelContext';

function LabelsButton() {
  const state = useLabelState();
  const dispatch = useLabelDispatch();

  const { data: labels, loading, error } = state.labels;

  const fetchData = () => {
    getLabels(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <S.LabelsButton>
      <TagIcon size={14} />
      <S.ButtonText>Labels</S.ButtonText>
      <S.ShowTotalNum>{labels ? labels.length : 0}</S.ShowTotalNum>
    </S.LabelsButton>
  );
};

export default LabelsButton;
