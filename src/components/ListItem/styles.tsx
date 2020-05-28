import { createUseStyles } from 'react-jss';

export default createUseStyles({
  card: {
    height: '100%',
    width: '100%',
    transformOrigin: 'center center',
    display: 'flex',
    flexFlow: 'column nowrap',
    overflow: 'hidden',
    borderRadius: '50%',
    alignItems: 'center',
    border: 'solid 2px #f0f0f0',
  },
});
