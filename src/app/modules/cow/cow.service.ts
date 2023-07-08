import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { CowSearchableFields } from "./cow.constant";
import { ICow, ICowFilters } from "./cow.interface";
import Cow from "./cow.model";

const createCow = async (payload: ICow): Promise<ICow> => {
	const result = await Cow.create(payload);
	return result;
};

const getAllCows = async (
	filters: ICowFilters,
	paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICow[]>> => {
	const { searchTerm, ...filtersData } = filters;

	const andCondition = [];

	if (searchTerm) {
		andCondition.push({
			$or: CowSearchableFields.map((field) => ({
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
				} else {
					return {
						[field]: value,
					};
				}
			}),
		});
	}

	const { page, limit, skip, sortBy, sortOrder } =
		paginationHelpers.calculatePagination(paginationOptions);
	const sortConditions: { [key: string]: SortOrder } = {};
	if (sortBy && sortOrder) {
		sortConditions[sortBy] = sortOrder;
	}

	const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
	const result = await Cow.find(whereCondition)
		.populate({
			path: "seller",
			model: "User",
		})
		.sort(sortConditions)
		.skip(skip)
		.limit(limit);
	const total = await Cow.countDocuments();

	return {
		meta: {
			page: page,
			total: total,
			limit: limit,
		},
		data: result,
	};
};

const getSingleCow = async (id: string): Promise<ICow | null> => {
	const result = await Cow.findById(id).populate({
		path: "seller",
		model: "User",
	});
	return result;
};

const deleteCow = async (id: string): Promise<ICow | null> => {
	const result = await Cow.findByIdAndDelete(id);
	return result;
};

const updateCow = async (
	id: string,
	payload: Partial<ICow>
): Promise<ICow | null> => {
	const result = await Cow.findByIdAndUpdate(id, payload, { new: true });
	return result;
};

export const CowService = {
	createCow,
	getSingleCow,
	deleteCow,
	updateCow,
	getAllCows,
};
