import {
  UPDATE_MESSAGE_RECEIVER,
  UPDATE_MESSAGE_SENDER,
  UPDATE_HORSES_INFORMATIONS,
  UPDATE_USERS_INFORMATIONS,
  POSTED_MESSAGE_RESULT,
  POSTED_FAILED,
  POSTING_DATA
} from 'actions/dashboard'

import {
  LOG_OUT
} from 'actions/auth'

import update from 'immutability-helper'

import _ from 'lodash'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
const initialState = {
  sender: '',
  receiver: null,
  error: false,
  horseInfo: [],
  userInfo: [],
  isPosting: false,
  showMessage: false
}

/**
*  @name reducer
*  @type { function }
*  @param { object } state
*  @param { object } action
*  @return { object }
*/
const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  /**
  *  @type { switch }
  *  @return { object }
  */
  switch (action.type) {
    case LOG_OUT:
      return initialState

    case UPDATE_MESSAGE_RECEIVER:
      return update(state, {
        receiver: {
          $set: action.data
        },
        showMessage: {
          $set: false
        }
      })

    case UPDATE_MESSAGE_SENDER:
      return update(state, {
        sender: {
          $set: action.data
        },
        showMessage: {
          $set: false
        }
      })

    case UPDATE_HORSES_INFORMATIONS:
      newState.horseInfo = action.data
      return newState

    case UPDATE_USERS_INFORMATIONS:
      newState.userInfo = action.data
      return newState

    case POSTED_MESSAGE_RESULT:
      newState.sender = ''
      newState.receiver = null
      newState.isPosting = false
      newState.showMessage = true
      return newState

    case POSTING_DATA:
      newState.isPosting = true
      return newState

    default:
      return state
  }
}

/**
 *  @name reducer
*/
export default reducer
