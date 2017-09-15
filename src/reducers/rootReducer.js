import { combineReducers } from 'redux'

import reducerFactory from 'reducers/reducerFactory'

import register from './register'
import horse from './horse'
import syndicate from './syndicate'
import browseHorses from './browsehorses'
import login from './login'
import auth from './auth'
import registrationConfirmation from './registrationconfirmation'
import dashboard from './dashboard'
import account from './account'
import toast from './toast'
import feedComments from './feedcomments'

import submitFeedPost from './submitfeedpost'

const rootReducer = combineReducers({
  register,
  horse,
  syndicate,
  browseHorses,
  login,
  auth,
  registrationConfirmation,
  dashboard,
  account,
  toast,
  feedComments,

  /* submitting data for feed posts & feed commenting */
  horseFeedPost: reducerFactory(submitFeedPost, 'horseFeedPost'),
  submitFeedComments: reducerFactory(submitFeedPost, 'submitFeedComments')
})

export default rootReducer
