'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import type { Category } from '@/types/category';
import { createStory, getCategories } from '@/services/api/clientApi';
import toast from 'react-hot-toast';
import css from './AddStoryForm.module.css';

interface AddStoryFormValues {
  title: string;
  category: string;
  article: string;
}

const addStoryFormValues: AddStoryFormValues = {
  title: '',
  category: '',
  article: '',
};

const validationSchema = Yup.object({
  title: Yup.string()
    .min(1)
    .required('Обовʼязкове поле'),

  category: Yup.string()
    .required('Оберіть категорію'),
  
  article: Yup.string()
    .min(20, 'Мінімум 20 символів')
    .required('Обовʼязкове поле'),
});

export default function AddStoryForm() {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => toast.error('Помилка завантаження категорій'));
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values:AddStoryFormValues, actions: FormikHelpers<AddStoryFormValues>) => {
    try {
      const story = await createStory({
        ...values,
        img: preview ?? '',
        date: new Date().toISOString(),
      })
      router.push(`/stories/${story._id}`);
    } catch {
      toast.error('Помилка створення історії');
    } finally {
      actions.setSubmitting(false);
    }
  }
    
  return (
    <Formik initialValues={addStoryFormValues}
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}>
      
      {({ isSubmitting, resetForm }) => (
        <Form className={css.form}>
          <h1 className={css.title}>Створити нову історію</h1>

          <p>Обкладинка статті</p>
            
          <Image
            alt="Обкладинка статті"
            src={preview ?? '/placeholder.jpg'}
            width={1091}
            height={726}
          />

          <label htmlFor="image">
            Завантажити фото
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          <div className={css.formGroup}>
            <label htmlFor="title">Заголовок</label>
            <Field id="title" name="title" type="text" className={css.input} placeholder='Введіть заголовок історії'/>
            <ErrorMessage name="title" component="p" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="category">Категорія</label>
            <Field as="select" id="category" name="category" className={css.select}>
              <option value="">Категорія</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.category}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="p" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="article">Текст історії</label>
            <Field as="textarea" id="article" name="article" className={css.textarea} placeholder='Ваша історія тут'/>
            <ErrorMessage name="article" component="p" className={css.error} />
          </div>

          <div className={css.actions}>
            <button type="submit" disabled={isSubmitting}>
              Зберегти
            </button>
            <button
              type="button"
              onClick={() => { resetForm(); setPreview(null); }}
            >
              Відмінити
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

