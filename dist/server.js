"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
// const PORT = 5000;
async function main() {
    try {
        await mongoose_1.default.connect(config_1.default.db_url);
        app_1.default.listen(config_1.default.port, () => {
            console.log(`Example app listening on PORT ${config_1.default.port}`);
        });
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process with a failure code
    }
}
main();
