/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 * @module ParallaxHero
 */
import ParallaxHero from 'components/parallax/Hero'

/**
 * @module Partners
 */
import Partners from 'components/home/Partners'

/**
 * @module CopySection
 */
import CopySection from 'components/home/CopySection'

/**
 * @module BottomCta
 */
import BottomCta from 'components/home/BottomCta'

import {
  homeHero
} from 'assets/home'

import {
  m1,
  m2,
  m3,
  m4
} from 'assets/home/manager'

/**
 * @name Home
 * @class
 * @extends Component
 */
export class Home extends Component {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    return (
      <div className='home'>
        <ParallaxHero
          featuredImage={homeHero}>
          <div className='home__hero-content absolute-center'>
            <h1 className='home__hero-text'>We make setting up syndicates simple.</h1>
          </div>
          <p className='home__hero-tip micro semi-bold'>
            <span className='visible-md-up'>
              Use the arrow keys to change jockey. Click and drag to look around.
            </span>
            <span className='hidden-md-up'>
              Tap to change jockey.<br />Drag to look around.
            </span>
          </p>
        </ParallaxHero>
        <Partners />
        <div className='container'>
          <div className='home__section home__cta-section'>
            <div className="row">
              <div className="col-md-12">
                <h2 className="secondary-font home__cta-headline">The definitive platform for listing, managing and enjoying horse syndication</h2>
                <p>Our new technology allows horse trainers, syndicate managers and memebers to keep in touch more easily, manage their brands more effectively, and be more thoroughly involved in the excitement of horse racing at any time in any place than ever before.</p>
              </div>
            </div>
          </div>
        </div>
        <CopySection
          headline="take the reigns"
          featuredImage={m1}>
          <p>
            Managing a syndicate encompasses a lot and has never been easy, until now. The Racing Manager has a fully responsive site and app so you can:
          </p>
          <ul className='disc-list'>
            <li>Advertise for new and loyal members in one marketplace.</li>
            <li>Set a customised webpage for your syndicate’s brand and horses.</li>
            <li>Find all your accounting, messaging and management in one place.</li>
          </ul>
        </CopySection>
        <CopySection
          headline="stay organised"
          featuredImage={m2}>
          <ul className='disc-list'>
            <li>Schedule events, tickets and hospitality with ease for your members.</li>
            <li>Consolidate all of your management accounts to our new platform.</li>
            <li>Instantly message any members or trainers by desktop, tablet or app.</li>
            <li>Fast, secure and regular payment collection with our bank integration.</li>
            <li>Get an extra level of control with our tailored management settings.</li>
          </ul>
        </CopySection>
        <CopySection
          headline="engage members"
          featuredImage={m3}>
          <ul className='disc-list'>
            <li>Regularly prompted updates from your trainer, straight to your group.</li>
            <li>A wide range of custom media including photos, videos and polls.</li>
            <li>Build a community with a curated update feed and thread replies.</li>
            <li>On race day, experience live updates and a sleek user experience.</li>
            <li>Industry updates from partners such as the Racing Post and TRM.</li>
          </ul>
        </CopySection>
        <CopySection
          headline="safe and secure"
          featuredImage={m4}>
          <p>
            Managing a syndicate ultimately comes down to money:
          </p>
          <ul className='disc-list'>
            <li>Simple HMRC and VAT solutions for yourself and members.</li>
            <li>Syndicate, member and horse insurance against unforeseen events.</li>
            <li>Regular payment collection and distribution backed by our T&Cs.</li>
            <li>AML and KYC checks on new syndicate members.</li>
          </ul>
        </CopySection>
        <BottomCta />
      </div>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  return {}
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
