import React from 'react'

export default React.createClass({
  render() {
    const { repoName, userName } = this.props.params
    return (
      <div>
        <h2>{`${repoName} / ${userName}`}</h2>
      </div>
    )
  }
})
