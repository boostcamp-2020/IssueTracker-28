import React from 'react';
import Label from '../components/label';
import { LabelProvider } from '@contexts/LabelContext';

function NewIssuePage() {
  return (
    <LabelProvider>
      <Label />
    </LabelProvider>
  )
}

export default NewIssuePage;