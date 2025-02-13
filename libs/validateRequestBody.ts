import Joi from "joi";

// Define TypeScript interfaces for the expected request body
interface Sale {
  name: string;
  email: string;
  product: string;
  category: string;
  amount: number;
  date: string;
  state: string;
}

interface SalesRequestBody {
  sales: Sale[];
}

// Define the validation schema using Joi
const salesSchema = Joi.object({
  sales: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      product: Joi.string().required(),
      category: Joi.string().required(),
      amount: Joi.number().positive().required(),
      date: Joi.string().required(), // Use string instead of date for API validation
      state: Joi.string().required(),
    })
  ).required(),
});

// Function to validate the request body
export function validateRequestBody(body: SalesRequestBody) {
  const { error } = salesSchema.validate(body);

  if (error) {
    return {
      isValid: false,
      message: "Invalid input data",
      details: error.details,
    };
  }

  return { isValid: true };
}
