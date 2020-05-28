import { createUseStyles } from 'react-jss';
import { COLUMN_WIDTH } from 'src/constants/styles';

const listStyles = createUseStyles({
  cardLayout: {
    display: 'grid',
    gap: '1.5em',
    gridAutoRows: COLUMN_WIDTH,
    gridTemplateColumns: `repeat(auto-fill, ${COLUMN_WIDTH})`,
    justifyContent: 'center',
  },
});

export default listStyles;
