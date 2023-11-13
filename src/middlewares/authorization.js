import jwt from 'jsonwebtoken';
import ApiError from '../errors/api.error.js';

export const actionsByRole = {
   ADMIN: ['create', 'read', 'update', 'delete'],
   USER: ['read', 'update'],
};

export const isUserOrAdmin = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return next(ApiError.unauthorized());
    try{
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = decoded;
        if (user.role === 'admin' || user.role === 'user') {
            next();
        } else {
            throw new Error('Not User or Admin');
        }

    } catch(error){
        throw error;
    }
};

export const isUser = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return next(ApiError.unauthorized());
    try{
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = decoded;
        if (user.role === 'user') {
            next();
        } else {
            throw new Error('Not User');
        }

    } catch(error){
        throw error;
    }
};

export const isAdmin = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return next(ApiError.unauthorized());
    try{
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = decoded;
        if (user.role === 'admin') {
            next();
        } else {
            throw new Error('Not Admin');
        }

    } catch(error){
        throw error;
    }
}

