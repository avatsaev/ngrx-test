import * as ThreadsActions from './thread.actions';
import {ThreadsState} from './threads.state';
import {INITIAL_THREADS_STATE} from './threads.state'


export function threadsReducer(state: ThreadsState = INITIAL_THREADS_STATE, action: ThreadsActions.All): ThreadsState {

  switch (action.type) {

    case ThreadsActions.LOAD_ALL_SUCCESS : {
      return {
        ...state,
        allThreads: action.payload['threads']
      }
    }

    case ThreadsActions.LOAD_SUCCESS: {
      return {
        ...state,
        currentThread: action.payload
      }
    }

    default: {
      return state;
    }

  }

}
