import { createUseStyles } from 'react-jss';
import { COLUMN_WIDTH } from 'src/constants/styles';

export default createUseStyles({
  searchWrap: {
    maxWidth: COLUMN_WIDTH,
    width: '100%',
    margin: '20px auto',
  },
  searchInput: {
    width: '100%',
  },
});
