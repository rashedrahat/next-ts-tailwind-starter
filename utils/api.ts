import axios, {AxiosRequestConfig} from "axios";

export const parseGET = <Res>(url: string, options?: AxiosRequestConfig) => {
    return axios.get<Res>(url, options).then(response => response.data);
};

export const parsePOST = <Req, Res>(
    url: string,
    body: Req,
    options?: AxiosRequestConfig,
) => {
    return axios.post<Res>(url, body, options).then(response => response.data);
};
