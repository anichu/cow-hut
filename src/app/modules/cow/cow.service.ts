import { ICow } from "./cow.interface";
import Cow from "./cow.model";

const createCow = async (payload: ICow): Promise<ICow> => {
	const result = await Cow.create(payload);
	return result;
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
};
