/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module View
 */
import View from 'components/common/View'

/**
 *  @module title
 */
import { BROWSE_HORSES as title } from 'data/titles'

/**
 *  @module TitleHero
 */
import TitleHero from 'components/common/TitleHero'

/**
 *  @module HorseCardGallery
 */
import HorseCardGallery from 'components/cards/HorseCardGallery'

/**
 *  @module SearchAndFilterBar
 */
import SearchAndFilterBar from 'components/browsehorses/SearchAndFilterBar'

/**
 *  @module FilterPanel
 */
import FilterPanel from 'components/browsehorses/FilterPanel'

/**
 *  @module classNames
 */
import classNames from 'classnames'

/**
 *  @module searchHorses
 */
import { searchHorses } from 'actions/browsehorses'

/**
 *  @module AjaxLoader
 */
import AjaxLoader from 'components/ajaxloader'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

const getSortValue = name => {
  switch (name) {
    case 'price lowest to highest':
      return {
        'field': 'monthlyCost',
        'order': 'asc'
      }
    case 'price highest to lowest':
      return {
        'field': 'monthlyCost',
        'order': 'desc'
      }

    case 'shares lowest to highest':
      return {
        'field': 'sharesAvailable',
        'order': 'asc'
      }

    case 'shares highest to lowest':
      return {
        'field': 'sharesAvailable',
        'order': 'asc'
      }

    default:
      return ''
  }
}

const constructPayload = (opts, applyFilters) => {
  return Object.keys(opts).reduce((obj, item) => {
    if (item === 'query') {
      obj[item] = opts[item]
    } else
    if (item === 'sortValue' && opts[item]) {
      obj['sort'] = getSortValue(opts[item])
    } else
    if (item === 'ownershipType' && applyFilters) {

    } else
    if (item === 'numberOfYears' && applyFilters) {
      obj.filter.push({
        'field': item,
        'value': opts[item].value
      })
    } else
    if (item === 'racingHistory' && applyFilters) {
    } else
    if (item === 'ageOfHorse' && applyFilters) {

    } else
    if (item === 'racingType' && applyFilters) {

    } else
    if (item === 'monthlyCostPerShare' && applyFilters) {
      const value = opts[item].value

      obj.filter.push({
        'field': 'monthlyCost',
        'range': {
          'min': value[0],
          'max': value[1]
        }
      })
    }

    return obj
  }, {
    filter: []
  })
}

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      filterOpen: false,
      ownershipType: {
        fixedPeriod: false,
        openEndedPeriod: false
      },
      numberOfYears: {
        value: 1,
        min: 1,
        max: 1000
      },
      racingHistory: {
        raced: false,
        unraced: false
      },
      ageOfHorse: {
        'young': false,
        'adult': false,
        'old': false
      },
      racingType: {
        nationalHunt: false,
        flatRacing: false,
        dualPurpose: false
      },
      monthlyCostPerShare: {
        min: 0,
        max: 20000,
        value: [0, 20000]
      },
      query: '',
      sortValue: 'price lowest to highest',
      sortOptions: [
        'price lowest to highest',
        'price highest to lowest',
        'shares lowest to highest',
        'shares highest to lowest'
      ],
      resultsAmount: 0,
      results: [],
      searchingHorses: false
    }

    // Bind custom Fn
    this.searchForHorses = this.searchForHorses.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
    this.onOwnerShipChange = this.onOwnerShipChange.bind(this)
    this.onNumberOfYearsChange = this.onNumberOfYearsChange.bind(this)
    this.onRacingHistoryChange = this.onRacingHistoryChange.bind(this)
    this.onAgeChange = this.onAgeChange.bind(this)
    this.onRacingTypeChange = this.onRacingTypeChange.bind(this)
    this.onMonthlyCostPerShareChange = this.onMonthlyCostPerShareChange.bind(this)
    this.onSearchUpdate = this.onSearchUpdate.bind(this)
    this.onSelectUpdate = this.onSelectUpdate.bind(this)
    this.debouncedSearch = debounce(this.searchForHorses, 500)
  }

  componentWillMount () {
    this.searchForHorses()
  }

  toggleFilter () {
    this.setState((state) => ({
      filterOpen: !state.filterOpen
    }))
  }

  /**
   *  onOwnerShipChange
   *  @description Will invert the ownership values
   *  @param  {String} name
   */
  onOwnerShipChange (name) {
    this.setState({
      ownershipType: {
        ...this.state.ownershipType,
        [name]: !this.state.ownershipType[name]
      }
    })
  }

  /**
   *  onNumberOfYearsChange
   *  @param  {Number} value
   */
  onNumberOfYearsChange (value) {
    this.setState({
      numberOfYears: {
        ...this.state.numberOfYears,
        value
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onRacingHistoryChange
   *  @param  {String} name
   *  @param  {Boolean} value
   */
  onRacingHistoryChange (name, value) {
    this.setState({
      racingHistory: {
        ...this.state.racingHistory,
        [name]: value
      }
    })
  }

  /**
   *  onAgeChange
   *  @param  {String} name
   *  @param  {Boolean} value
   */
  onAgeChange (name, value) {
    this.setState({
      ageOfHorse: {
        ...this.state.ageOfHorse,
        [name]: value
      }
    })
  }

  /**
   *  onRacingTypeChange
   *  @param  {String} name
   *  @param  {Boolean} value
   */
  onRacingTypeChange (name, value) {
    this.setState({
      racingType: {
        ...this.state.racingType,
        [name]: value
      }
    })
  }

  /**
   *  onMonthlyCostPerShareChange
   *  @param  {Array} value
   */
  onMonthlyCostPerShareChange (value) {
    this.setState({
      monthlyCostPerShare: {
        ...this.state.monthlyCostPerShare,
        value
      }
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onSearchUpdate
   *  @description Will update the query for searching
   *  @param  {String} value
   */
  onSearchUpdate (value) {
    this.setState({
      query: value
    }, () => {
      this.debouncedSearch()
    })
  }

  /**
   *  onSearchUpdate
   *  @description Will update the sort value for sorting
   *  @param  {String} value
   */
  onSelectUpdate (value) {
    this.setState({
      sortValue: value
    }, () => {
      this.debouncedSearch()
    })
  }

  searchForHorses () {
    this.setState({
      searchingHorses: true
    })

    const {
      ownershipType,
      numberOfYears,
      racingHistory,
      ageOfHorse,
      racingType,
      monthlyCostPerShare,
      query,
      sortValue,
      filterOpen
    } = this.state

    const payload = constructPayload({
      ownershipType,
      numberOfYears,
      racingHistory,
      ageOfHorse,
      racingType,
      monthlyCostPerShare,
      query,
      sortValue
    }, filterOpen)

    searchHorses(payload)
    .then(({resultsAmount, results}) => {
      this.setState({
        resultsAmount,
        results,
        searchingHorses: false
      })
    })
    .catch(error => {
      console.error(error)
      this.setState({
        searchingHorses: false
      })
    })
  }

  render () {
    const {
      filterOpen,
      ownershipType,
      numberOfYears,
      racingHistory,
      ageOfHorse,
      racingType,
      monthlyCostPerShare,
      query,
      sortValue,
      sortOptions,
      resultsAmount,
      results,
      searchingHorses
    } = this.state

    // Filter opts for the filter panel
    const filterOpts = {
      ownershipType,
      numberOfYears,
      racingHistory,
      ageOfHorse,
      racingType,
      monthlyCostPerShare
    }

    const modifiedClassGalleryCols = classNames('browse-horses__grid', 'col-xs-12')

    return (
      <View title={title}>
        <div className='browse-horses'>
          <TitleHero />
          <SearchAndFilterBar
            resultsAmount={resultsAmount}
            onFilterClick={this.toggleFilter}
            filterActive={filterOpen}
            placeholder='Search horses, trainer or syndicates'
            selectOptions={sortOptions}
            defaultSortValue={sortValue}
            onSearchUpdate={this.onSearchUpdate}
            onSelectUpdate={this.onSelectUpdate}
            searchValue={query}
          />
          <div className='container'>
            {
              filterOpen
              ? (
                  <FilterPanel
                    filterOpts={filterOpts}
                    onOwnerShipChange={this.onOwnerShipChange}
                    onNumberOfYearsChange={this.onNumberOfYearsChange}
                    onRacingHistoryChange={this.onRacingHistoryChange}
                    onAgeChange={this.onAgeChange}
                    onRacingTypeChange={this.onRacingTypeChange}
                    onMonthlyCostPerShareChange={this.onMonthlyCostPerShareChange} />
                )
              : null
            }
            <div className={modifiedClassGalleryCols}>
              <HorseCardGallery
                data={results}
              />
            </div>
          </div>
          { searchingHorses && <AjaxLoader /> }
        </div>
      </View>
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
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
