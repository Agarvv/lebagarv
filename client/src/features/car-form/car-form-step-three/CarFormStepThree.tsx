import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CarFormStepThree.module.css';
import sharedCarFormStyles from '../CarForm.module.css';

const CarFormStepThree = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="third-step">
            <div className="ts-h">
                <p className={sharedCarFormStyles.stepP}>We Are Almost Done!</p>
                <div className={sharedCarFormStyles.field}>
                    <label>Description</label>
                    <textarea 
                        {...register('description', { required: 'Description is required' })} 
                        placeholder="Describe your car"
                    />
                    {errors.description && <small className="formError">{errors.description.message}</small>}
                </div>
            </div>
        </div>
    );
};

export default CarFormStepThree;