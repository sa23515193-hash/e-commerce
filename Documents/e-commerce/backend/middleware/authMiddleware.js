require("dotenv").config();

exports.protectAdmin = (req, res, next) => {
    const { adminPassword } = req.headers;

    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ success: false, message: "Not authorized" });
    }

    next();
};