"use client";
import React from 'react';

const ProgressIndicator = ({ isActive }) => (
  <div className={`indicator ${isActive ? 'indicator-active' : 'indicator-inactive'}`} />
);

export default ProgressIndicator;