import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import CarFormStepOne from './car-form-step-one/CarFormStepOne';
import CarFormStepTwo from './car-form-step-two/CarFormStepTwo';
import CarFormStepThree from './car-form-step-three/CarFormStepThree';

import styles from './CarForm.module.css'

const CarForm = () => {
    const [step, setStep] = useState(0);
    const methods = useForm();
    const { trigger, handleSubmit } = methods;

    const nextStep = async () => {
        const isValid = await trigger(); 
        if (!isValid) return; 
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        if (step <= 0) return;
        setStep((prev) => prev - 1);
    };

    const onSubmit = (data: any) => {
        console.log('La multi ani!!!', data);
    };

    return (
        <> 
        <header className={styles.header}>
          <h1>Sell A Car</h1>
       </header>

        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.carForm}>
                <div className="form">
                    {step === 0 && (
                        <div className="firstStep">
                            <CarFormStepOne />
                        </div>
                    )}

                    {step === 1 && (
                        <div className="secondStep">
                            <CarFormStepTwo />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="thirdStep">
                            <CarFormStepThree />
                        </div>
                    )}

                    <div className={styles.nextPrev}>
                        {step > 0 && (
                            <button type="button" onClick={prevStep}>
                                <i className="fa fa-arrow-left"></i> Prev
                            </button>
                        )}
                        {step < 2 ? (
                            <button type="button" onClick={nextStep} className="np-next">
                                Next <i className="fa fa-arrow-right"></i>
                            </button>
                        ) : (
                            <button type="submit" className={styles.submitBtn}>
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </FormProvider>
      </> 
    );
};

export default CarForm;