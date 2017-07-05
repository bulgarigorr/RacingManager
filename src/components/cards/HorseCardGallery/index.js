/**
 *  @module React
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module HorseCard
 */
import HorseCard from 'components/cards/HorseCard'

/**
 *  @module constructStaticUrl
 */
import { constructStaticUrl } from 'utils/horseutils'

/**
 *  HorseCardGallery
 *  @param  {Object} props
 *  @return {PureComponent}
 */
class HorseCardGallery extends PureComponent {
  constructor (props) {
    super(props)

    // Bind custom fn
    this.renderChildren = this.renderChildren.bind(this)
  }

  /**
   *  renderChildren
   *  @param  {Object} entry
   *  @return {Component}
   */
  renderChildren (entry) {
    return (
      <HorseCard
        isActive={true}
        src={constructStaticUrl(entry.thumbnailImage)}
        title={entry.name}
        color={entry.syndColor}
        subtitle={`${entry.age}yo ${entry.gender}, ${entry.racingType}`} // Needs to have the STYLE too!
        stats={[{
          name: 'runs',
          value: entry.runs
        }, {
          name: 'wins',
          value: entry.wins
        }, {
          name: 'places',
          value: entry.places
        }, {
          name: 'OR',
          value: '-'
        }]}
        info={[{
          name: 'Trainer name',
          value: entry.trainer.name
        }, {
          name: 'Syndicate name',
          value: entry.owner.name
        }, {
          name: 'Initial cost per %',
          value: `£${entry.cost.initial} +VAT`
        }, {
          name: 'Monthly cost per %',
          value: `£${entry.cost.monthly} +VAT`
        }]}
        extra={{
          title: '12% available',
          text: '1.5% minimum purchase'
        }}
        isMember={false}
        bottomUrl={`/horse/${entry.slug}`}
        className='horse-card-gallery__card'/>
    )
  }

  render () {
    const {
      data
    } = this.props

    return (
      <div className='horse-card-gallery'>
        {
          data.map((entry, index) => {
            return (
              <div className='horse-card-gallery__item col-xs-12 col-sm-5 col-sm-push-1 col-md-4 col-md-push-0 col-lg-3' key={index}>
                {this.renderChildren(entry)}
              </div>
            )
          })
        }
      </div>
    )
  }
}

HorseCardGallery.propTypes = {
  data: PropTypes.array
}

HorseCardGallery.defaultProps = {
  data: []
}

/**
 *  @module HorseCardGallery
 */
export default HorseCardGallery