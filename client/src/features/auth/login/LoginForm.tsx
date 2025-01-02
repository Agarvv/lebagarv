import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { FormValues } from './types';
import { emailValidation, passwordValidation } from 'src/outils/form-validators';
import { usePost } from 'src/hooks/usePost';
import { loginUser } from 'src/api/services/auth/AuthService';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { mutate } = usePost<FormValues>(
      'Welcome Back',
      true,
      loginUser
  )
  
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
      const response = await mutate(data);
      console.log('Server Response:', response);
  }; 

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1 className={styles['lf-h1']}>Welcome Back To Chatssy!</h1>
          <p className={styles.description}>
            Experience seamless communication, elegant design, and unmatched simplicity. A chat app that redefines how you connect.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inp-box']}>
              <input
                className="formError"
                type="email"
                placeholder="Email"
                {...register('email', emailValidation)}
              />
              {errors.email && <small className="formError">{errors.email.message}</small>}
              <i className="fas fa-envelope icon"></i>
            </div>
            <div className={styles['inp-box']}>
              <input
                className="formError"
                type="password"
                placeholder="Your Password"
                {...register('password', passwordValidation)}
              />
              {errors.password && <small className={styles.error}>{errors.password.message}</small>}
              <i className="fas fa-lock icon"></i>
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Login</button>
            </div>
            <div className={styles['form-links']}>
              <div>
                <Link to="/send-reset-password">Forgot Password</Link>
              </div>
              <div>
                <Link to="/register">Don't Have An Account</Link>
              </div>
            </div>
          </form>
          <div className={styles['social-login']}>
            <p className={styles['social-login-title']}>Or log in with</p>
            <div className={styles['social-btns']}>
              <button className={`${styles['social-btn']} ${styles.facebook}`}>
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
              <button className={`${styles['social-btn']} ${styles.google}`}>
                <i className="fab fa-google"></i> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;