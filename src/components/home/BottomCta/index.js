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
 * @module CopyCard
 */
import CopyCard from 'components/cards/CopyCard'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

/**
 * @name BottomCta
 * @param { Object } props
 * @property { String } props.text
 * @return { React.Component }
 */
const BottomCta = props => {
  const { className } = props

  const modifiedClassNames = classNames('bottom-cta', className)

  return (
    <div className={modifiedClassNames}>
      <div className="bottom-cta__wave-line wave-bg"></div>
      <div className="container">
        <div className="row relative">
          <div className="bottom-cta__video-container col-md-5 col-sm-12">
            <Image
              isImage={true}
              imageSrc='assets/images/video.png'
              alt='video' />
          </div>
          <div className="col-md-6 col-md-offset-6 col-sm-10 col-sm-offset-2">
            <CopyCard
              headline="are you with us?">
              <p>“The Racing Manager could be the breath of fresh air that racing needs to bring a new, engaged audience into the sport we all love ”</p>
              <p className="bottom-cta__quote-author micro"><b>- Eamon Wilmott</b>
                <br/>Non Exec Director, BHA | Managing Director, Horses First Racing</p>
              <br/><br/>
              <p>Sign up for free or try a demo account if there’s more you want to learn.</p>
            </CopyCard>
            <div className="bottom-cta__buttons">
              <Link to='/register'>
                <TextButton
                  text="Register for FREE"
                  className="bottom-cta__button"
                  onClick={() => {}}/>
              </Link>
              <TextButton
                text="Try a Demo"
                modifier="secondary"
                className="bottom-cta__button"
                onClick={() => {}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
BottomCta.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
BottomCta.defaultProps = {
  className: ''
}

export default BottomCta