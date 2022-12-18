import { Component } from 'react'

import { Sidebar } from 'components/sidebar'

import { IPersonalData } from 'types/IPersonalData'

import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  variable: '--ff-poppins',
})

class AppContainer extends Component<IPersonalData> {
  render() {
    return (
      <main>
        <div className={poppins.variable}>
          <Sidebar {...this.props} />
        </div>
      </main>
    )
  }
}

export default AppContainer
