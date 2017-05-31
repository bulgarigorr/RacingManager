/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module TextTile
 */
import TextTile from 'components/tiles/TextTile'

/**
 *  @module ImageTiles
 */
import ImageTile from 'components/tiles/ImageTile'

/**
 *  @module Masonry
 */
import Masonry from 'react-masonry-component'

/**
 *  @name HorseOverview
 *  @class
 *  @extends {Component}
 */
export class HorseOverview extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='horse-overview'>
        <div className='horse-overview__grid container'>
          <Masonry
            options={{transitionDuration: 400}}>
            {
              this.props.tiles.map((el, index) => {
                return (
                    el === 2
                  ? <TextTile
                    key={index}
                    name='Nick the god'
                    date='2 days ago'
                    text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`} />

                  : <ImageTile
                    key={index}
                    name='Andy Tree'
                    date='5 days ago'
                    text={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`} />
                )
              })
            }
          </Masonry>
        </div>
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
  return {
    tiles: [1, 2, 1, 2, 1, 2, 1, 2]
  }
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
)(HorseOverview)
