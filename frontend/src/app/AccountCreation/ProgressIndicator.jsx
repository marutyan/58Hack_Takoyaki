"use client";
import React from 'react';

const ProgressIndicator = ({ active }) => (
  <div className={`indicator ${active ? 'indicator-active' : 'indicator-inactive'}`} />
);

export default ProgressIndicator;