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
import TileHeader from 'components/tiles/TileHeader'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/TileFooter'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/TileContent'

/**
 *  @module baseTile
 */
import baseTile from 'components/tiles/BaseTile'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @name ImageTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const ImageTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    src,
    rootPath
  } = props

  const modifiedClassNames = classNames('image-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <Image
        className='image-tile__image'
        imageSrc={`${rootPath}${src}`}
        alt={'Horse racing'} />
      <TileHeader
        name={name}
        date={date} />
      <TileContent
        text={text}/>
      <TileFooter/>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
ImageTile.propTypes = {
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
  text: PropTypes.string,
  src: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
ImageTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module ImageTile
 */
export default baseTile(ImageTile)
