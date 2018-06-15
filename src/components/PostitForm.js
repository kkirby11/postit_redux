import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addPostIt } from '../reducers/postits';
import { incId } from '../reducers/nextid'

class PostItForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name } = this.state
    const { dispatch, id } = this.props
    const postit = { name, id, complete: false }
    dispatch(addPostIt(postit))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }


  render() {
    const { name } = this.state
    return (
      <Fragment>
        <h1>Add a Post-It Note</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          value={name}
          onChange={this.handleChange}
          required
        />
        </form>

      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
    return { id: state.nextId }
}

export default connect(mapStateToProps)(PostItForm)