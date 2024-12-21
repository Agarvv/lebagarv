import React from 'react';
import styles from './ResetPasswordForm.module.css';
import { FormValues } from './types';
import { useForm } from 'react-hook-form';
import { passwordValidation } from 'src/outils/form-validators';
import useSubmit from 'src/hooks/useSubmit';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate } = useSubmit({
    url: '/auth/reset_password/',
    successMessage: 'Your password has been reset!',
    errorMessage: 'Your URL may have expired or something went wrong...',
  });

  const { token, email } = useParams(); 

  const onSubmit = (data: FormValues) => {
    const requestData = {
      ...data,
      token,
      email,
    };
    mutate(requestData); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1>Reset Password</h1>
          <p className={styles.description}>
            Enter your new password and confirm it to complete the reset password process. Then log in with your new password.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inp-box']}>
              <input
                {...register('password', passwordValidation)}
                type="password"
                placeholder="New Password"
                required
              />
              {errors.password && <small className="formError">{errors.password.message}</small>}
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Reset Password</button>
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

export default ResetPasswordForm;
