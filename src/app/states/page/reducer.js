import types, { pages } from './types';

const initState = {
  currentPage: pages.top
};

export default function pageReducer(state = initState, action) {
  switch (action.type) {
    case types.goToTop:
      return {
        ...state,
        currentPage: pages.top
      };
    case types.goToUser:
      return {
        ...state,
        currentPage: pages.user
      };
    case types.goToSearch:
      return {
        ...state,
        currentPage: pages.search
      };
    default:
      return state;
  }
}
