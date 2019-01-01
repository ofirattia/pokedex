import { connect } from 'react-redux'
import * as pageActions from '../redux/actions/page'
import Page from '../components/page'

/**
 * mapStateToProps
 * @param {*} state
 */
function mapStateToProps(state) {
  const { displayedPokemons, isFetched, error } = state.page

  return {
    displayedPokemons,
    isFetched,
    error
  }
}

/**
 * New Object - mapDispatchToProps
 */
const mapDispatchToProps = {
  getPokemons: pageActions.getPokemons,
  filterPokemons: pageActions.filterPokemons
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
