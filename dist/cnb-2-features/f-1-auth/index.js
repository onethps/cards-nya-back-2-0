"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {getUsersForDev} from "./a-1-controllers/getUsersForDev";
const logIn_1 = require("./a-1-controllers/logIn");
const createUser_1 = require("./a-1-controllers/createUser");
// import {getMe} from "./a-1-controllers/getMe";
// import {passwordRecovery} from "./a-1-controllers/passwordRecovery";
// import {setNewPassword} from "./a-1-controllers/setNewPassword";
// import {findUserByToken} from "./a-3-helpers/h-2-users/findUserByToken";
// import {updateUser} from "./a-1-controllers/updateUser";
const auth = express_1.default.Router();
// auth.get("/", getUsersForDev); // for dev
auth.post("/login", logIn_1.logIn);
auth.post("/register", createUser_1.createUser);
// auth.post("/me", findUserByToken(getMe, "getMe"));
// auth.put("/me", findUserByToken(updateUser, "updateUser"));
// auth.post("/forgot", passwordRecovery);
// auth.post("/set-new-password", setNewPassword);
exports.default = auth;
//# sourceMappingURL=index.js.map