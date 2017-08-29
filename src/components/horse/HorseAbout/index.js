import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import CtaLink from 'components/links/CtaLink'

import TextButton from 'components/buttons/TextButton'

const HorseAbout = (props) => {
  const {
    className,
    title,
    description,
    timeformComments,
    syndicateLink
  } = props

  const modifiedClassNames = classNames('horse-about', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        description={description}>

        <h4 className='horse-header__timeford-title uppercase'>
          Timeform comment
        </h4>
        {(!timeformComments.flat && !timeformComments.jump) && (
          <p className='horse-header__paragraph'>
            No timeform comments..
          </p>
        )}
        {timeformComments.flat && (
          <p className='horse-header__paragraph'>
            Flat: {timeformComments.flat}
          </p>
        )}
        {timeformComments.jump && (
          <p className='horse-header__paragraph'>
            Jump: {timeformComments.jump}
          </p>
        )}

        <CtaLink to={syndicateLink}>
          <TextButton
            text='Syndicate page'
            modifier='md'
            className='horse-syndicate-btn'
          />
        </CtaLink>

      </TitleDescriptionSection>
    </div>
  )
}

HorseAbout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  timeformComments: PropTypes.object,
  syndicateLink: PropTypes.string
}

HorseAbout.defaultProps = {
  title: 'About the syndicate',
  description: '',
  timeformComments: {},
  syndicateLink: ''
}

export default HorseAbout
