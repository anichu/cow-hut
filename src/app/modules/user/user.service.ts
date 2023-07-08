import { IUser } from "./user.interface";
import User from "./user.model";

const getSingleUser = async (id: string): Promise<IUser | null> => {
	const result = await User.findById(id);
	return result;
};

const getAllUsers = async (): Promise<IUser[]> => {
	const result = await User.find();
	return result;
};

const updateUser = async (
	id: string,
	payload: Partial<IUser>
): Promise<IUser | null> => {
	const { name, ...updatedData } = payload;
	if (name && Object.keys(name).length > 0) {
		Object.keys(name).forEach((key) => {
			const keyName = `name.${key}`;
			(updatedData as any)[keyName] = name[key as keyof typeof name];
		});
	}
	const result = await User.findByIdAndUpdate(id, updatedData, { new: true });
	return result;
};
const deleteUser = async (id: string): Promise<IUser | null> => {
	const result = await User.findByIdAndDelete(id);
	return result;
};

export const UserService = {
	getSingleUser,
	updateUser,
	deleteUser,
	getAllUsers,
};
