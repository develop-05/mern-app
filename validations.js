import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Incorrect mail format').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Incorrect mail format').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  body('fullName', 'Specify the name').isLength({ min: 3 }),
  body('avatarUrl', 'Incorrect avatar link').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Enter the title of the article').isLength({ min: 3 }).isString(),
  body('text', 'Enter the text of the article').isLength({ min: 3 }).isString(),
  body('tags', 'Incorrect tag format').optional().isString(),
  body('imageUrl', 'Incorrect image link').optional().isString(),
];
