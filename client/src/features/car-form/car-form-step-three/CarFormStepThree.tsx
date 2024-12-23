import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CarFormStepThree.module.css'
import sharedCarFormStyles from '../CarForm.module.css';


const CarFormStepThree = () => {
    const { register } = useFormContext();

    return (
        <div className="third-step">
            <div className="ts-h">
                <p className={sharedCarFormStyles.stepP}>We Are Almost Done!</p>
                <div className={sharedCarFormStyles.field}>
                    <label>Description</label>
                    <textarea {...register('description')} placeholder="Describe your car"></textarea>
                </div>
            </div>
        </div>
    );
};

export default CarFormStepThree;