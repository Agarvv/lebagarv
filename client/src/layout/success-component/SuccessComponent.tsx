import React from 'react'

import styles from './SuccessComponent.module.css'


interface Props {
    successMessage: string 
}

const SuccessComponent: React.FC<Props> = ({ successMessage }) => {
    return(
       <>
          <div className={styles.success}>
             <p>{ successMessage }</p>
          </div> 
       </>
    )
}

export default SuccessComponent 