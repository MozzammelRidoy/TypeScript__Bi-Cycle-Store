"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationZodSchema = void 0;
const zod_1 = require("zod");
// Zod schema for order validation
exports.orderValidationZodSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is required. Provide it as a string: "email".',
        invalid_type_error: 'Email must be a string.',
    })
        .email('Email must be a valid email address.')
        .nonempty('Email is required.'),
    product: zod_1.z
        .string({
        required_error: 'Product is required. Provide it as a string: "product".',
        invalid_type_error: 'Product must be a string.',
    })
        .regex(/^[0-9a-fA-F]{24}$/, 'Product must be a valid ObjectId.')
        .nonempty('Product is required.'),
    quantity: zod_1.z
        .number({
        required_error: 'Quantity is required. Provide it as a number: "quantity".',
        invalid_type_error: 'Quantity must be a number.',
    })
        .nonnegative('Quantity must be a non-negative number.')
        .min(1, 'Quantity must be greater than or equal to 1.'),
    totalPrice: zod_1.z
        .number({
        required_error: 'Total Price is required. Provide it as a number: "totalPrice".',
        invalid_type_error: 'Total Price must be a number.',
    })
        .nonnegative('Total Price must be a non-negative number.'),
});
