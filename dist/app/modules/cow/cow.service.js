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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowService = void 0;
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const cow_constant_1 = require("./cow.constant");
const cow_model_1 = __importDefault(require("./cow.model"));
const createCow = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.create(payload);
    return result;
});
const getAllCows = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andCondition = [];
    if (searchTerm) {
        andCondition.push({
            $or: cow_constant_1.CowSearchableFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andCondition.push({
            $and: Object.entries(filtersData).map(([field, value]) => {
                if (field === "maxPrice" || field === "minPrice") {
                    const operator = field === "maxPrice" ? "$lte" : "$gte";
                    const fieldName = "price";
                    return {
                        [fieldName]: { [operator]: value },
                    };
                }
                else {
                    return {
                        [field]: value,
                    };
                }
            }),
        });
    }
    const { page, limit, skip, sortBy, sortOrder } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
    const result = yield cow_model_1.default.find(whereCondition)
        .populate({
        path: "seller",
        model: "User",
    })
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield cow_model_1.default.countDocuments();
    return {
        meta: {
            page: page,
            total: total,
            limit: limit,
        },
        data: result,
    };
});
const getSingleCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.findById(id).populate({
        path: "seller",
        model: "User",
    });
    return result;
});
const deleteCow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateCow = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.default.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.CowService = {
    createCow,
    getSingleCow,
    deleteCow,
    updateCow,
    getAllCows,
};
