"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const finalObj = {};
    for (const k of keys) {
        if (obj && Object.hasOwnProperty.call(obj, k)) {
            finalObj[k] = obj[k];
        }
    }
    return finalObj;
};
exports.default = pick;
