import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = {
      id: decoded.id
    };

    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Invalid token"
    });
  }
};

export default auth;