'use client';

import css from '@/components/LoginForm/LoginForm.module.css';
import { useRouter } from 'next/navigation';
import { login, AuthRequest } from '@/services/api/clientApi';
import { useAuthStore } from '@/services/store/authStore';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Невалідна пошта')
    .required('Обовʼязкове поле'),

  password: Yup.string()
    .min(6, 'Мінімум 6 символів')
    .required('Обовʼязкове поле'),
});

const LoginForm = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

    const handleSubmit = async (
        values: AuthRequest,
        actions: FormikHelpers<AuthRequest>
    ) => {
     try {
       const response = await login(values);

      if (response) {
        setUser(response);
        router.push('/');
      } 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? error.message ?? 'Помилка входу');
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Невідома помилка');
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <main className={css.mainContent}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <h2 className={css.formTitle}>Вхід</h2>

            <p>Вітаємо знову у спільноту мандрівників!</p>

            <div className={css.formGroup}>
              <label htmlFor="email">Пошта*</label>
              <Field
                id="email"
                type="email"
                name="email"
                className={css.input}
              />
              <ErrorMessage name="email" component="p" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="password">Пароль*</label>
              <Field
                id="password"
                type="password"
                name="password"
                className={css.input}
              />
              <ErrorMessage name="password" component="p" className={css.error} />
            </div>

            <div className={css.actions}>
              <button
                type="submit"
                className={css.submitButton}
                disabled={isSubmitting}
              >
                Увійти
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </main>
  );
};

export default LoginForm;