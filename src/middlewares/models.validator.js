import { body } from 'express-validator';

export const registerValidation = [
    body('username')
        .notEmpty().withMessage('El username es obligatorio.')
        .isLength({ min: 3, max: 20 }).withMessage('El username debe tener entre 3 y 20 caracteres.'),

    body('email')
        .notEmpty().withMessage('El email es obligatorio.')
        .isEmail().withMessage('Debe ingresar un email válido.'),

    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria.')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
];

export const articleValidation = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio.')
        .isLength({ min: 3, max: 200 }).withMessage('El título debe tener entre 3 y 200 caracteres.'),

    body('content')
        .notEmpty().withMessage('El contenido es obligatorio.')
        .isLength({ min: 50 }).withMessage('El contenido debe tener al menos 50 caracteres.')
];

export const tagValidation = [
    body('name')
        .notEmpty().withMessage('El nombre de la etiqueta es obligatorio.')
        .isLength({ min: 2, max: 30 }).withMessage('La etiqueta debe tener entre 2 y 30 caracteres.')
];