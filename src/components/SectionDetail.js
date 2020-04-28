import React from 'react'
import { connect } from 'react-redux'

const SectionDetail = ({ selectedSection }) => {
  if (!selectedSection) {
    return <div>select section!</div>
  }
  return (
    <div>
      <h3>
        Title: { selectedSection.title }
      </h3>
      <p>
        Description: { selectedSection.description }
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedSection: state.selectedSection}
}

export default connect(mapStateToProps)(SectionDetail);
