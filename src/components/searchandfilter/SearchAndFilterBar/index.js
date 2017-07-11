/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module SearchInput
 */
import DesktopSearchInput from 'components/searchandfilter/SearchInput'

/**
 *  @module MobileSearchInput
 */
import MobileSearchInput from 'components/searchandfilter/MobileSearchInput'

/**
 *  @module SortSelect
 */
import SortSelect, { Option } from 'components/searchandfilter/SortSelect'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module MediaQuery
 */
import MediaQuery from 'react-responsive'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @name SearchAndFilterBar
 *  @class
 *  @extends {PureComponent}
 */
class SearchAndFilterBar extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      placeholder,
      sortTitle,
      resultsAmount,
      onFilterClick,
      filterActive,
      selectOptions,
      defaultSortValue,
      onSearchUpdate,
      onSelectUpdate,
      searchValue
    } = this.props

    const mobileFilterClassNames = classNames('search-filter-bar__filter-text', 'uppercase search-filter-bar__click-text', {
      'active': filterActive
    })

    const filterResultsDropdown = classNames('search-filter-bar__dropdown', '', {
      'active': filterActive
    })

    return (
      <div className='search-filter-bar section-shadow--bottom'>
        <div className='container'>
          <MediaQuery minWidth={768}>
            <div className='row relative'>
              <div className='col-md-5 col-sm-3 align-middle'>
                <DesktopSearchInput
                  name='search'
                  value={searchValue}
                  onChange={onSearchUpdate}
                  containerClassName='search-filter-bar__search-input'
                  placeholder={placeholder} />
              </div>
              <div className='col-xs-push-2 col-sm-4 col-sm-push-1 col-md-3 col-md-push-1 align-middle'>
                <SortSelect
                  onChange={onSelectUpdate}
                  defaultValue={defaultSortValue}
                  title={sortTitle}>
                  {
                    selectOptions.map((value, index) => {
                      return (
                        <Option key={index} value={value}>{value}</Option>
                      )
                    })
                  }
                </SortSelect>
              </div>
              <div className='col-xs-push-2 col-sm-4 col-sm-push-1 col-md-3 col-md-push-1 text-center align-middle search-filter-bar__click-text' onClick={onFilterClick}>
                <h5 className='uppercase search-filter-bar__filter-text'>
                  filter the {resultsAmount} results
                </h5>
                <Icon
                  className={filterResultsDropdown}
                  modifier='dropdown'/>
              </div>
            </div>
          </MediaQuery>

          {/* Mobile */}
          <MediaQuery maxWidth={767}>
            <div className='row relative'>
              <div className='search-filter-bar__mobile'>
                <div className='search-filter-bar__mobile-search'>
                  <MobileSearchInput
                    name='search'
                    value={searchValue}
                    onChange={onSearchUpdate}
                    containerClassName='search-filter-bar__search-input'
                    placeholder={placeholder} />
                </div>

                <h5 className={mobileFilterClassNames} onClick={onFilterClick}>
                  filter
                </h5>

                <h5 className='search-filter-bar__filter-text search-filter-bar__filter-text--pipe'>|</h5>

                <div className='search-filter-bar__mobile__sort-select'>
                  <SortSelect
                    onChange={onSelectUpdate}
                    mobileText={'Sort by'}
                    defaultValue={defaultSortValue}
                    title={sortTitle}>
                    {
                      selectOptions.map((value, index) => {
                        return (
                          <Option key={index} value={value}>{value}</Option>
                        )
                      })
                    }
                  </SortSelect>
                </div>

              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
    )
  }
}

SearchAndFilterBar.propTypes = {
  resultsAmount: PropTypes.number,
  placeholder: PropTypes.string,
  sortTitle: PropTypes.string,
  onFilterClick: PropTypes.func,
  filterActive: PropTypes.bool,
  selectOptions: PropTypes.array,
  defaultSortValue: PropTypes.string,
  onSearchUpdate: PropTypes.func,
  onSelectUpdate: PropTypes.func
}

SearchAndFilterBar.defaultProps = {
  resultsAmount: 0,
  placeholder: '',
  sortTitle: 'sort:',
  filterActive: false,
  selectOptions: []
}

/**
 *  @module SearchAndFilterBar
 */
export default SearchAndFilterBar
