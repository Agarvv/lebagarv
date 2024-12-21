import React from 'react'

import styles from './LoadingComponent.module.css'

const LoadingComponent = () => {
    return(   
      <>
         <div className={styles.loading}>
            <p>Please Wait...</p> 
         </div> 
      </>
    )
}

export default LoadingComponent 