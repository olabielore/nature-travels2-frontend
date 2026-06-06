'use client';

import css from "@/components/RegistrationForm/RegistrationForm.module.css"
import { useRouter } from 'next/navigation';
import { register } from '@/services/api/clientApi';
import { useAuthStore } from '@/services/store/authStore';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}
  
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Мінімум 2 символи')
    .required('Обовʼязкове поле'),
    
  email: Yup.string()
    .email('Невалідна пошта')
    .required('Обовʼязкове поле'),

  password: Yup.string()
    .min(6, 'Мінімум 6 символів')
    .required('Обовʼязкове поле'),
});

const RegistrationForm = () => {
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    const handleSubmit = async (
        values: RegisterRequest,
        actions: FormikHelpers<RegisterRequest>
    ) => {
     try {
       const response = await register(values);

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
          <Formik<RegisterRequest>
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={css.form}>
                <h2 className={css.formTitle}>Реєстрація</h2>
    
                <p>Раді вас бачити у спільноті мандрівників!</p>
    
                <div className={css.formGroup}>
                  <label htmlFor="name">Імʼя та Прізвище*</label>
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    className={css.input}
                  />
                  <ErrorMessage name="name" component="p" className={css.error} />
                        </div>
                        
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
                    Зареєструватись
                  </button>
                </div>
    
              </Form>
            )}
          </Formik>
        </main>
      );
    };
    
export default RegistrationForm;