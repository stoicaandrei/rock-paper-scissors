import { StateManager, IndexedArray } from 'services';

import { API_URL, SOCKET_URL } from 'settings';

import * as types from './types';

export type AppState = {
  session: types.Session;
  selfId: number;
  players: IndexedArray<types.Player>;
  messages: types.Message[];
  offline: {
    players: IndexedArray<types.Player>;
  };
  received_picks: boolean;
};

export const appManager = new StateManager({
  moduleName: 'app',
  apiUrl: API_URL,
  socketUrl: SOCKET_URL,
  initialState: {
    players: {},
    messages: [],
    offline: {
      players: {},
    },
    received_picks: false,
  },
});
