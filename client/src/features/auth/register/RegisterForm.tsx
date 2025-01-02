import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import { FormValues } from './types';
import { usernameValidation, emailValidation, passwordValidation } from 'src/outils/form-validators';
import { usePost } from 'src/hooks/usePost';
import { registerUser } from 'src/api/services/auth/AuthService';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const { mutate } = usePost<FormValues>('Wekcome to Chatssy!', true, registerUser);
    mutate(); 
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1 className={styles['lf-h1']}>Welcome To Chatssy!</h1>
          <p className={styles.description}>
            Experience seamless communication, elegant design, and unmatched simplicity. A chat app that redefines how you connect.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inp-box']}>
              <input 
                {...register("username", usernameValidation)} 
                className={styles.name} 
                type="text" 
                placeholder="Username" 
              />
              <i className="fas fa-user icon"></i>
              {errors.username && <small className="formError">{errors.username.message}</small>}
            </div>
            <div className={styles['inp-box']}>
              <input 
                {...register("email", emailValidation)} 
                className="formError"
                type="email" 
                placeholder="Email" 
              />
              <i className="fas fa-envelope icon"></i>
              {errors.email && <small className={styles.error}>{errors.email.message}</small>}
            </div>
            <div className={styles['inp-box']}>
              <input 
                {...register("password", passwordValidation)} 
                className="formError"
                type="password" 
                placeholder="Secure Password" 
              />
              <i className="fas fa-lock icon"></i>
              {errors.password && <small className={styles.error}>{errors.password.message}</small>}
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Register</button>
            </div>
            <div className={styles['form-links']}>
              <div>
                <Link to="/login">Already Have An Account?</Link>
              </div>
            </div>
          </form>
          <div className={styles['social-login']}>
            <p className={styles['social-login-title']}>Or log in with</p>
            <div className={styles['social-btns']}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;