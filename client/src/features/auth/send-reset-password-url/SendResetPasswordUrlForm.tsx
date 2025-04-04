import React from 'react';
import styles from './SendResetPasswordForm.module.css';
import { FormValues } from './types';
import { useForm } from 'react-hook-form';
import { emailValidation } from 'src/outils/form-validators';
import { usePost } from 'src/hooks/usePost';
import { sendResetEmail } from 'src/api/services/auth/AuthService';

import { Link } from 'react-router-dom';

const SendResetPasswordUrlForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  
  const { mutate } = usePost<FormValues>({
    serviceFunc: sendResetEmail,         
    successMessage: 'Check your email for the reset link',  
    withError: true,                     
    withLoading: true                    
  });

  const onSubmit = (data: FormValues) => {
    mutate(data); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1>Reset Password</h1>
          <p className={styles.description}>
            Enter your email and we will send you the instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inp-box']}>
              <input
                type="email"
                placeholder="Email"
                required
                {...register("email", emailValidation)}  
              />
              {errors.email && <small className="formError">{errors.email.message}</small>}
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Send</button>
            </div>
          </form>
          <div className={styles['form-links']}>
            <Link to="/login">Go Back To Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendResetPasswordUrlForm;