import { forwardRef, ReactElement, Ref } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';

const DialogTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default DialogTransition;
