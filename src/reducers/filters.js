import { CHANGE_FILTER} from '../constants';

const BASE_FILTER = 'asc';

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
      break;
    default:
      return state;
  }
}

export default filter;
