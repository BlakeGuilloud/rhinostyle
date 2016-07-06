import keymirror from 'keymirror';

const constants = {
  ActionTypes:    keymirror({
    ADD_NOTIFICATION:    null,
    REMOVE_NOTIFICATION: null,
  }),
  PayloadSources: keymirror({
    VIEW_ACTION: null,
  }),
  autodismissTime: 6000,
};

export default constants;
