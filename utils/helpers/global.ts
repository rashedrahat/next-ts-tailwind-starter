export const objToFormData = (obj: { [key: string]: string }) => {
    const formData = new FormData();
    Object.keys(obj).forEach(key => formData.append(key, obj[key]));
    return formData;
};