/**
 *  @module React
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Input
 */
import Input from 'components/input/Input'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @module CSSTransitionGroup
 */
import { CSSTransitionGroup } from 'react-transition-group'

/**
 *  @class
 *  @name SearchInput
 *  @extends {PureComponent}
 */
class SearchInput extends PureComponent {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      open: false
    }

    // Bind custom fn
    this.openSearch = this.openSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
    this.updateOpenFromProps = this.updateOpenFromProps.bind(this)
    this.handleSearchResult = this.handleSearchResult.bind(this)
  }

  componentWillMount () {
    if (this.props.open) {
      this.updateOpenFromProps()
    }
  }

  updateOpenFromProps (open = this.props.open) {
    this.setState({
      open
    })
  }

  /**
   *  openSearch
   *  @description Will open the search bar on mobile
   */
  openSearch () {
    this.setState({
      open: true
    })
  }

  /**
   *  closeSearch
   *  @description Will close the search bar on mobile.
   */
  closeSearch () {
    this.setState({
      open: false
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      this.updateOpenFromProps(nextProps.open)
    }
  }

  handleSearchResult (event) {
    const value = event.target.value

    const {
      onChange
    } = this.props

    onChange && onChange(value)
  }

  render () {
    const {
      containerClassName
    } = this.props

    const {
      open
    } = this.state

    const modifiedClassNames = classNames('mobile-search-input', containerClassName, {
      'active': open
    })

    // Props for the input excluding any props meant for parent component.
    const inputProps = omit(this.props, ['containerClassName', 'handleChange'])

    return (
      <div className={modifiedClassNames}>
        <Icon
          onClick={this.openSearch}
          className='mobile-search-input__glass absolute-center-v'
          modifier='magnifying-glass' />
        <Input
          inputLineClassName='hidden'
          handleChange={this.handleSearchResult}
          {...inputProps} />
        <div className='mobile-search-input__close-container'>
          <CSSTransitionGroup
            transitionName="fade-in"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}>
            {
              open && <Icon
              onClick={this.closeSearch}
              className='mobile-search-input__close'
              modifier='close'/>
            }
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

SearchInput.propTypes = {
  containerClassName: PropTypes.string,
  onChange: PropTypes.func,
  open: PropTypes.bool
}

SearchInput.defaultProps = {
  open: false
}

/**
 *  @module SearchInput
 */
export default SearchInput
