import React from 'react';
import styles from './ResetPasswordForm.module.css';
import { FormValues } from './types';
import { useForm } from 'react-hook-form';
import { passwordValidation } from 'src/outils/form-validators';
import { usePost } from 'src/hooks/usePost';
import { useParams } from 'react-router-dom';
import { resetPassword } from 'src/api/services/auth/AuthService'
import { Link } from 'react-router-dom';

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate } = usePost<any>({
      serviceFunc: resetPassword,
      successMessage: "Your password is all set.",
      withError: true,
      withLoading: true 
  })

  const { token, email } = useParams(); 

  const onSubmit = (data: FormValues) => {
    const requestData = {
      ...data,
      resetToken: token,
      email: email,
    };
    console.log("request data", requestData)
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
