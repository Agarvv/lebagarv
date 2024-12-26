import React from 'react';

import styles from './CarDetail.module.css'; 

interface CarDetailProps {
    icon: React.ReactNode,
    detail: string,
    detailValue: string 
}

const CarDetail: React.FC<CarDetailProps> = ({ icon, detail, detailValue }) => {
    return (
       <div className={styles.carDetailData}>
           <div className="cdd-icon">
               {icon}
           </div>
         
           <div>
              <span className={styles.cddSl}>{detail}</span>
              <p className={styles.cddAt}>{detailValue}</p>
           </div>
        </div>
    );
}

export default CarDetail;
