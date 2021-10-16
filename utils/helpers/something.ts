import {AxiosRequestConfig} from "axios";
import {parseGET, parsePOST} from "../api";

const {NEXT_PUBLIC_API_ENDPOINT: API_ROOT} = process.env

class GetSomewhereRequestData {
}

class GetSomewhereResponseData {
}

export const postSomewhere = (
    body: GetSomewhereRequestData,
    options?: AxiosRequestConfig,
) => {
    return parsePOST<GetSomewhereRequestData, GetSomewhereResponseData>(
        `${API_ROOT}/somewhere`,
        body,
        options,
    );
};

export const getSomewhere = (options?: AxiosRequestConfig) => {
    return parseGET<GetSomewhereResponseData>(
        `${API_ROOT}/somewhere`,
        options,
    );
};
