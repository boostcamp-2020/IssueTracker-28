import React from 'react';
import Assignee from '../assignee';
import Label from '../label';
import Milestone from '../milestone';

function Input() {
  return (
    <>
      <Assignee />
      <Label />
      <Milestone />
    </>
  );
}

export default Input;