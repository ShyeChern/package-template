/**
 * Change object into form data for multipart/form-data request
 * @param {object} data
 * @returns FormData
 */
export const convertFormData = (data: { [key: string]: any }) => {
	const fd = new FormData();
	for (const prop in data) {
		fd.append(prop, data[prop]);
	}
	return fd;
};
