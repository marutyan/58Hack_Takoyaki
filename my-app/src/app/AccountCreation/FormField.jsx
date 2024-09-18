"use client";
import React from 'react';

const FormField = ({ label, id, type = 'text' }) => (
  <>
    <label htmlFor={id} className="form-label">{label}</label>
    <input type={type} id={id} className="form-input" aria-label={label} />
  </>
);

export default FormField;