import React from 'react';
import { MilestonesProvider } from '@contexts/MilestonesContext';
import Milestones from '../components/milestones';
import 'semantic-ui-css/semantic.min.css';

function MilestonePage() {
  return (
    <MilestonesProvider>
      <Milestones />
    </MilestonesProvider>
  );
}

export default MilestonePage;
