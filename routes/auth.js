require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const authenticateToken = require("./authMiddleware");
const prisma = new PrismaClient();

router.use(express.json());

router.delete("/logout", authenticateToken, async (req, res) => {
  try {
    const deleteTokens = await prisma.refreshToken.deleteMany({
      where: {
        token: req.cookies.refreshToken,
      },
    });
    if (deleteTokens == null) {
      return res.status(400).json({ error: "Cannot find token" });
    } else {
      res.clearCookie("refreshToken");

      res.clearCookie("accessToken");

      res.status(200).json({ message: "User logged out" });
    }
  } catch (error) {
    res.status(500).json({ error: error });

    console.log(error);
  }
});

router.get("/token", authenticateToken, async (req, res) => {
  try {
    const accessToken = generateAccessToken({ email: req.user.email });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.json({ accessToken: accessToken });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ error: "One or more required fields are empty" });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (user == null) {
      return res.status(400).json({ error: "Cannot find user" });
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = generateAccessToken(user);
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

      await prisma.refreshToken.create({
        data: {
          token: refreshToken,
          userId: user.id,
        },
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      });

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      });

      res.json({
        Success: "Login Success",
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
      
    } else {
      res.status(400).json({ error: "Not Allowed" });
    }
  } catch (error) {
    res.status(500).json();
  }
});

function generateAccessToken(user) {
  if (user.email) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "90000s",
    });
  }
  return null;
}

module.exports = router;
