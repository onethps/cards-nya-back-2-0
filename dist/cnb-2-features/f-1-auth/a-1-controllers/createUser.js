"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = __importDefault(require("../a-2-models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validators_1 = require("../a-3-helpers/h-2-users/validators");
const config_1 = require("../../../cnb-1-main/config");
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (validators_1.validateAuth(req, res, "createUser")) {
        try {
            // error: "some error, email may already exist",
            const user = yield user_1.default.create({
                email: req.body.email,
                password: yield bcrypt_1.default.hash(req.body.password, 10),
                rememberMe: false,
                isAdmin: false,
                name: req.body.email,
                verified: false,
                // avatar: "",
                publicCardPacksCount: 0,
                // token: "",
                // tokenDeathTime: 0,
                // resetPasswordToken: "",
                // resetPasswordTokenDeathTime: 0,
                created: new Date(),
                updated: new Date(),
                _doc: {},
            });
            const addedUser = Object.assign({}, user._doc);
            delete addedUser.password; // don't send password to the front
            delete addedUser.resetPasswordToken;
            delete addedUser.resetPasswordTokenDeathTime;
            res.status(201).json({ addedUser, success: true });
        }
        catch (e) {
            res.status(500).json({
                error: "some error: " + e.message,
                errorObject: config_1.DEV_VERSION && Object.assign({}, e),
                in: "createUser/User.create",
            });
        }
    }
});
//# sourceMappingURL=createUser.js.map