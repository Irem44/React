import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchema";

//initial state'de verilen isimler ile input id leri bir olmalı

function RegisterForm() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      againPassword: "",
      term: "",
    },

    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="email giriniz"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p className="errors">{errors.email}</p>}
        </div>
        <div>
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="yaşınızı giriniz"
            value={values.age}
            onChange={handleChange}
          ></input>
          {errors.age && <p className="errors">{errors.age}</p>}
        </div>
        <div>
          <label>Şifre</label>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="şifrenizi giriniz"
          ></input>
          {errors.password && <p className="errors">{errors.password}</p>}
        </div>
        <div>
          <label>Şifre Tekrarı</label>
          <input
            value={values.againPassword}
            onChange={handleChange}
            type="password"
            id="againPassword"
            placeholder="şifrenizi tekrar giriniz"
          ></input>
          {errors.againPassword && (
            <p className="errors">{errors.againPassword}</p>
          )}
        </div>

        <div className="kabul">
          <input
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          ></input>
          <label>Kullanıcı sözleşmesini kabul ediyorum</label>
        </div>
        {errors.term && <p className="errors">{errors.term}</p>}

        <div>
          <button type="submit" className="button">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
