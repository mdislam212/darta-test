const request = require('supertest');
const assert = require('assert');
const { ok } = require('assert');
const  app = 'https://api.github.com';


describe("GitHub  api test via Jest ", () => {

  beforeEach(() => {
    jest.setTimeout(30000);
  });

  test("TC1 - returns user's details", async () => {
      const response = await request(app)
     .get('/users/mdislam212')
    .set('User-Agent', 'request')
      expect(response.statusCode).toBe(200);
});

  test("TC 2 Verify List of Users", async () => {
    const response = await request(app)
    .get('/users')
   .set('User-Agent', 'request')
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true)
 });


test("TC3 Verify Response Body", async () => {
  const response = await request(app)
 .get('/users')
 .set('User-Agent', 'request')
  expect(response.statusCode).toBe(200)
  expect(response.body).not.toBeNull()
  expect(response.body).not.toBeNaN();
});

});


