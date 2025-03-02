import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";

// ✅ REGISTER CONTROLLER
export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Please enter all fields" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // Encrypt password before saving to DB
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, email, password: hashedPassword });

        return res.status(201).json({ success: true, message: "User created successfully", user: newUser });
    } catch (err) {
        next(err);
    }
};

// ✅ LOGIN CONTROLLER
import jwt from "jsonwebtoken";

export const loginControllers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ success: false, message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ success: false, message: "Incorrect password" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        return res.status(200).json({
            success: true,
            message: `Welcome back, ${user.name}`,
            token, // ✅ Send token
            user: { _id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


        // Remove password before sending response
        try {
            const { password: _, ...userData } = user._doc;

            return res.status(200).json({ success: true, message: `Welcome back, ${user.name}`, user: userData });
    } catch (err) {
        next(err);
    }

// ✅ GET USER PROFILE
export const getUserProfile = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, user });
    } catch (err) {
        next(err);
    }
};

// ✅ SET USER AVATAR
export const setAvatarController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { image } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { isAvatarImageSet: true, avatarImage: image },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, isSet: updatedUser.isAvatarImageSet, image: updatedUser.avatarImage });
    } catch (err) {
        next(err);
    }
};

// ✅ GET ALL USERS (EXCLUDING CURRENT USER)
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.params.id } }).select(["email", "name", "avatarImage", "_id"]);

        return res.status(200).json({ success: true, users });
    } catch (err) {
        next(err);
    }
};

// ✅ DELETE USER
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (err) {
        next(err);
    }
};
