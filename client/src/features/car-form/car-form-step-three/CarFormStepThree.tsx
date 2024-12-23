import React from 'react';
import { useFormContext } from 'react-hook-form';

const CarFormStepThree = () => {
    const { register } = useFormContext();

    return (
        <div className="third-step">
            <div className="ts-h">
                <p className="step-p">We Are Almost Done!</p>
                <div className="field">
                    <label>Description</label>
                    <textarea {...register('description')} placeholder="Describe your car"></textarea>
                </div>
            </div>
        </div>
    );
};

export default CarFormStepThree;