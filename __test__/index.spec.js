//Basic supertest for jest to understand ES6
import "regenerator-runtime/runtime";

const request = require("supertest");
const app = require("../src/server/index.js");

describe("Test the root path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });