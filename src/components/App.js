import React from 'react'

import SectionList from './SectionList'
import SectionDetail from './SectionDetail'

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SectionList />
        </div>
        <div className="column eight wide">
          <SectionDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
