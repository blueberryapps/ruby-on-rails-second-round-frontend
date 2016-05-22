const express = require('express');
const invoices = require('./fixtures/invoices').default;
const summaryByCategories = require('./fixtures/summaryByCategories').default;
const summaryByMonths = require('./fixtures/summaryByMonths').default;

const endpoints = app => {
  app.get('/invoices', (req, res) => {
    res.json(invoices);
  });

  app.get('/summary/months', (req, res) => {
    res.json(summaryByMonths);
  });

  app.get('/summary/categories', (req, res) => {
    res.json(summaryByCategories);
  });
};

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';

  const app = express();

  if (!isProd) {
    endpoints(app);
  }

  return app;
};
