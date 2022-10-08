const joi = require("joi");

const createUser = joi.object({
  name: joi.string().min(3).max(20),

  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,20}$")),

  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),

  instituteName: joi.string().min(3).max(40),
  registrationNo: joi
    .number()
    .integer()
    .min(10 ** 9)
    .max(10 ** 10 - 1),
});

const loginUser = joi.object({
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,20}$")),

  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});

const updateUser = joi.object({
  name: joi.string().min(3).max(20),

  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,20}$")),

  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});

const verifyPasswordUser = joi.object({
  userId: joi.string().alphanum().length(24),

  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,20}$")),

  otp: joi.number(),
});

module.exports = {
  createUser,
  loginUser,
  updateUser,
  verifyPasswordUser,
};
