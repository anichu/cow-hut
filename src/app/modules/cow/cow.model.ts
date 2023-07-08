import { Schema, model } from "mongoose";
import { ICow, ICowModel } from "./cow.interface";
import { cities, cowCategory, cowLabel } from "./cow.constant";

const CowSchema = new Schema<ICow, ICowModel>({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	price: { type: Number, required: true },
	location: {
		type: String,
		enum: cities,
		required: true,
	},
	breed: { type: String, required: true },
	weight: { type: Number, required: true },
	label: { type: String, enum: cowLabel, required: true },
	category: {
		type: String,
		enum: cowCategory,
		required: true,
	},
	seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Cow = model<ICow, ICowModel>("Cow", CowSchema);

export default Cow;
