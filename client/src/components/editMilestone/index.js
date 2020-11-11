import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  useMilestonesDispatch,
  updateMilestone,
  updateMilestoneStatus
} from '@contexts/MilestonesContext';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import IS from '@components/newMilestone/input/style';
import MS from '@components/milestones/header/style';
import S from './style';

function EditMilestone() {
  const history = useHistory();
  const location = useLocation();
  const { milestone } = location.state;
  const dispatch = useMilestonesDispatch();

  const [title, setTitle] = useState(milestone.title);
  const [description, setDescription] = useState(milestone.desc);

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleStatusClick = () => {
    updateMilestoneStatus(dispatch, {
      id: milestone.id,
      status: milestone.status === 'open' ? 1 : 0
    });

    history.push('/milestone');
  };

  const handleSaveClick = () => {
    const date = document.querySelector('.edit-date').value;

    if (title.length === 0) return;

    updateMilestone(dispatch, {
      id: milestone.id,
      title,
      due_date: date,
      desc: description
    });

    history.push('/milestone');
  };

  return (
    <S.EditMilestoneWrapper>
      <S.Header>
        <S.LabelMilestone>
          <MS.LabelsButton onClick={() => history.push('/label')}>
            <TagIcon size={14} />
            <MS.ButtonText>Labels</MS.ButtonText>
          </MS.LabelsButton>
          <MS.MilestonesButton onClick={() => history.push('/milestone')}>
            <MilestoneIcon />
            <MS.ButtonText>Milestones</MS.ButtonText>
          </MS.MilestonesButton>
        </S.LabelMilestone>
      </S.Header>
      <IS.InputWrapper>
        <IS.Title>Title</IS.Title>
        <IS.InputTitle
          className='form-control'
          placeholder='Title'
          type='text'
          defaultValue={milestone.title}
          onChange={handleTitle}
        />
        <IS.Title>Due Date (optional)</IS.Title>
        <IS.InputDate
          className='form-control edit-date'
          type='date'
          defaultValue={milestone.due_date}
        />
        <IS.Title>Description (optional)</IS.Title>
        <IS.InputDescription
          className='form-control'
          type='text'
          defaultValue={milestone.desc}
          onChange={handleDescription}
        />
      </IS.InputWrapper>
      <S.ButtonWrapper>
        <S.CancelButton onClick={() => history.push('/milestone')}>Cancel</S.CancelButton>
        <S.CancelButton onClick={handleStatusClick}>
          {milestone.status === 'open' ? 'Close' : 'Open'} milestone
        </S.CancelButton>
        <S.SubmitButton
          isValid={title.length > 0 ? true : false}
          onClick={handleSaveClick}
        >Save Changes</S.SubmitButton>
      </S.ButtonWrapper>
    </S.EditMilestoneWrapper>
  );
}

export default EditMilestone;
