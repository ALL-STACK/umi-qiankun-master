// import { queryUsers, queryUser } from '../../services/user';

export default {
  state: {
    tableList: { current: 1, size: 10, record: [] },
  },

  effects: {
    *queryUser({ payload }, { call, put }) {
      // const { data } = yield call(queryUser, payload);
      yield put({
        type: "queryUserSuccess",
        payload: {
          current: 1,
          size: 10,
          record: [],
        },
      });
    },
  },

  reducers: {
    queryUserSuccess(state, { payload }) {
      return {
        ...state,
        tableList: payload,
      };
    },
  },
};
