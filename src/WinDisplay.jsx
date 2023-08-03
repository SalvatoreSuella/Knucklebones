import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import Button from '@mui/material/Button';
import Modal from '@mui/base/Modal';

export default function WinDisplay({open, restart}) {
 
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open.show}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">{open.winnerName} Wins</h2>
          <h3>Score: {open.finalScore}</h3>
          <Button onClick={restart} variant="contained">Restart</Button>
        </Box>
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

