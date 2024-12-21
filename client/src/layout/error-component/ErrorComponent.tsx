import React from 'react'

import styles from './ErrorComponent.module.css'

interface props {
    errorMessage: string 
}

const ErrorComponent: React.FC<props> = ({ errorMessage }) => {
    return(
       <>
          <div className={styles.error}> 
              <p>{ errorMessage }</p>
          </div> 
       </>
    )
}

export default ErrorComponent 