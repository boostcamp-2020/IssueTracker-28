import React from 'react';
import Milestones from '../components/milestones';
import 'semantic-ui-css/semantic.min.css';
import { MilestonesProvider } from '@contexts/MilestonesContext';

function MilestonePage() {
  return (
    <MilestonesProvider>
      <Milestones />
    </MilestonesProvider>
  );
}

export default MilestonePage;
