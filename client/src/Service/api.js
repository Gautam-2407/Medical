import { commonrequest } from "./apiCall";
import { backend_url } from "./helper";

export const loginfunction = async( contact, otp ) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, { contact:contact, otp:otp});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const phoneValidation = async(username) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/login`, {username: username});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}