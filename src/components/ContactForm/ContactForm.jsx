import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
export default function ContactForm({ onAdd }) {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().min(3).max(50).required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAdd(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.input}>
          Name
          <Field name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>
        <label className={css.input}>
          Number
          <Field name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
