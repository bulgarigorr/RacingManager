import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Routes,
} from 'react-router-dom'

import AuthRoute from 'components/routing/AuthRoute'

import Startup from 'containers/Startup'

import Layout from 'layouts/Layout'
import ScrollTop from 'components/routing/ScrollTop'
import PageNotFound from 'views/PageNotFound'

import Home from 'views/home'
import Register from 'views/register'
import RegistrationSuccessful from 'views/RegistrationSuccessful'
import RegistrationConfirmation from 'views/RegistrationConfirmation'
import MemberDashboard from 'views/Dashboard/MemberDashboard'
import BrowseHorses from 'views/BrowseHorses'

import Account from 'views/Account/AccountLayout'

import PrivateHorse from 'views/horse/PrivateHorse'
import PublicHorse from 'views/horse/PublicHorse'
import PrivateHorseStatistics from 'views/horse/PrivateHorseStatistics'
import PrivateHorseInformation from 'views/horse/PrivateHorseInformation'

import PrivateSyndicate from 'views/syndicate/PrivateSyndicate'
import PublicSyndicate from 'views/syndicate/PublicSyndicate'

const router = (
  <Routes>
    <Startup>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/register' authenticatedPath='/' redirect={Register} />
            <Route path='/registration-successful' component={RegistrationSuccessful} />
            <Route path='/browse-horses' component={BrowseHorses} />
            <AuthRoute path='/dashboard' component={MemberDashboard} redirectPath='/' />

            <AuthRoute exact path='/horse/:name' component={PrivateHorse} redirect={PublicHorse} />
            <AuthRoute exact path='/horse/:name/statistics' component={PrivateHorseStatistics} redirectPath='/404' />
            <AuthRoute exact path='/horse/:name/information' component={PrivateHorseInformation} redirectPath='/404' />

            <AuthRoute exact path='/account' component={Account} redirectPath='/' />

            <AuthRoute exact path='/syndicate/:name' component={PrivateSyndicate} redirect={PublicSyndicate} />
            <Route path='/user/verify/:token' component={RegistrationConfirmation} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Layout>
    </Startup>
  </Routes>
)

export default router
