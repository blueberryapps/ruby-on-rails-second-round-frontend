/* eslint-disable */

exports.default = {
  "invoices": [
    {
      "id": 1,
      "invoice_number": 123,
      "price_with_vat": 12100.3,
      "price": 10000.3,
      "vat_rate": 21,
      "issued_at": "2016-07-30T20:01:52+02:00",
      "category": {
        "id": 2,
        "name": "Category name #2"
      }
    },
    {
      "id": 2,
      "invoice_number": 124,
      "price_with_vat": 10500,
      "price": 10000,
      "vat_rate": 5,
      "issued_at": "2016-07-30T20:01:52+02:00",
      "client": {
        "id": 2,
        "name": "Client name #2"
      },
      "category": {
        "id": 2,
        "name": "Category name #2"
      }
    }
  ]
}
