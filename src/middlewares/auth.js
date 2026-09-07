import { verifyToken } from "../helpers/jwt.helper.js";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies["token"];

        if (!token) {
            return res.status(401).json({ message: "No se ha podido autenticar el token" });
        }

        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "No se ha podido autenticar el token" });
    }
};

export const adminCheckMiddleware = (req, res, next) => {
    if (req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: "No tenes privilegios de administrador para realizar esta accion" });
    }
    next();
};