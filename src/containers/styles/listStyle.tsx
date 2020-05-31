import { createUseStyles } from 'react-jss';
import { GRID_RANGE } from 'src/constants/styles';

const listStyles = createUseStyles({
  cardLayout: {
    display: 'grid',
    gap: '1.5em',
    gridAutoRows: GRID_RANGE,
    gridTemplateColumns: `repeat(auto-fill, ${GRID_RANGE})`,
    justifyContent: 'center',
  },
});

export default listStyles;
