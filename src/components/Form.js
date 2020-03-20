import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Dropdown, Label } from "semantic-ui-react";
import TextInput from "./TextInput";
import * as Yup from "yup";
import "./Form.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  age: Yup.number()
    .required("Required")
    .integer()
    .positive("Must be an age")
    .lessThan(125, "You are probably not that old")
});

const MemberForm = ({ formData, setFormData }) => {
  return (
    <Formik
      initialValues={{ name: "", age: "", streetNo: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setFormData([...formData, values]);
        setSubmitting(false);
        resetForm({});
      }}
    >
      {({ values }) => (
        <FormikForm className="form">
          <TextInput label="Name" name="name" />
          <TextInput label="Age" name="age" type="number" />
          <TextInput label="Street Number" name="streetNo" type="number" />
          <Button type="submit" color="purple">
            Add
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default MemberForm;
