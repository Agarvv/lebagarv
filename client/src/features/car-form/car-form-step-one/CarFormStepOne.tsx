import React from 'react';
import { useFormContext } from 'react-hook-form';

const CarFormStepOne = () => {
    const { register } = useFormContext();

    return (
        <div className="first-step">
            <div className="fs-h">
                <p className="step-p">Let's Get Started!</p>
            </div>
            <div className="fs-fields">
                <div className="field">
                    <label htmlFor="title">What's The Title Of Your Ad?</label>
                    <input type="text" {...register('title')} placeholder="Your Title" />
                </div>
            </div>
        </div>
    );
};

export default CarFormStepOne;