"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        setInterval(() => {
            console.log(store_1.games);
        }, 4000);
    });
}
exports.startLogger = startLogger;
