import React from 'react'

import sharedContactStyles from '../aside-contact/AsideContact.module.css'
import logo from 'src/logo.svg'

const AsideGroup: React.FC = () => {
    return(
      <div className={`${sharedContactStyles.group} ${sharedContactStyles['aside-chat']}`}>
        <div className={sharedContactStyles['ac-user']}>
          <img src={logo} alt="ñ" />
          <div className={sharedContactStyles['ac-content']}>
            <h4>Los Papus :P</h4>
            <p>Siii</p>
          </div>
        </div>
      </div>
    )
}

export default AsideGroup