import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CarFormStepOne.module.css'
import sharedCarFormStyles from '../CarForm.module.css';
import CarFormImages from './car-form-images/CarFormImages'

const CarFormStepOne = () => {
    const { register } = useFormContext();

    return (
        <div className="first-step">
            <div className={styles.fsH}>
                <p className={sharedCarFormStyles.stepP}>Let's Get Started!</p>
            </div>
            <div className={sharedCarFormStyles.fields}>
                <div className={sharedCarFormStyles.field}>
                    <label htmlFor="title">What's The Title Of Your Ad?</label>
                    <input type="text" {...register('title')} placeholder="Your Title" />
                </div>
                <CarFormImages /> 
            </div>
        </div>
    );
};

export default CarFormStepOne;