/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TileHeader
 */
import TileHeader from 'components/tiles/common/TileHeader'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/common/TileFooter'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/common/TileContent'

/**
 *  @module baseTile
 */
import baseTile from 'components/tiles/common/BaseTile'

/**
 *  @module TileSocialShare
 */
import TileSocialShare from 'components/tiles/common/TileSocialShare'

/**
 *  @name TextTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TextTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    showSocial,
    hideSocialSharing,
    showSocialSharing
  } = props

  const modifiedClassNames = classNames('text-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileHeader
        name={name}
        date={date} />
      <TileContent
        text={text}/>
      <TileFooter
        onSocialShare={showSocialSharing} />
      <TileSocialShare
        show={showSocial}
        onClose={hideSocialSharing}
        shareText={text} />
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TextTile.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
TextTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: ''
}

/**
 *  @module TextTile
 */
export default baseTile(TextTile)
