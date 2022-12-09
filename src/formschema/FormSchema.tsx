import * as Yup from "yup";

export const notificationFormSchema = Yup.object({
	title: Yup.string().trim().min(6, "Min length is 6").required("Title is Required"),
	body: Yup.string().trim().min(6, "Min length is 6").required("Body is Required"),
	screen: Yup.string().trim().required("Select a screen"),
});