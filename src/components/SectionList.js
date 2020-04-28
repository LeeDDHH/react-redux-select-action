import React from 'react'
import { connect } from 'react-redux'

import { selectSection } from '../actions/';

class SectionList extends React.Component{
  renderList() {
    return this.props.sections.map((section) => {
      return (
        <div className="item" key={section.title}>
          <div className="content">
            {section.title}
          </div>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSection(section)}>
              Select
            </button>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Section List</h3>
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { sections: state.section }
}

export default connect(mapStateToProps, {selectSection})(SectionList);
