import React from 'react';
import { connect } from 'react-redux';
import Postit from './Postit';

const filtered = (postit, filter) => {
  switch (filter) {
    case 'All':
      return postit;
    case 'Active':
      return postit.filter( t => !t.complete )
    case 'Completed':
      return postit.filter( t => t.complete )
    default:
      return postit
  }
}

const PostitList = ({ postit, filter }) => (
  <ul>
    { filtered(postit, filter).map( (t) => {
        return ( <Postit key={t.id} {...t} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { postit: state.postit, filter: state.filter }
}

export default connect(mapStateToProps)(PostitList)