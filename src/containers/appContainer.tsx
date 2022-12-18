import { Component } from 'react'

import { Sidebar } from 'components/Sidebar'

import { IPersonalData } from 'types/IPersonalData'

class AppContainer extends Component<IPersonalData> {
  render() {
    return (
      <main>
        <Sidebar {...this.props} />
      </main>
    )
  }
}

export default AppContainer
