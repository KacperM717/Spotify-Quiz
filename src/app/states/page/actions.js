import types from './types';

const pagesActions = {
  goToTop: () => ({ type: types.goToTop }),
  goToUser: () => ({ type: types.goToUser }),
  goToSearch: () => ({ type: types.goToSearch })
};

export default pagesActions;
