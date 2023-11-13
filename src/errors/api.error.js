import { errorMessages } from "../controllers/responses.messages.js";

export default class ApiError extends Error {
    constructor(errorCode, message){
        super(message);
        this.message = this.setMessage(message, errorCode);
        this.errorCode = errorCode;
    }

    setMessage(message, errorCode){
        if(message) return message;
        switch(errorCode){
            case 400: return errorMessages.NOT_FOUND;
            case 401: return errorMessages.UNAUTHORIZED;
            case 403: return errorMessages.FORBIDDEN;
            case 404: return errorMessages.NOT_FOUND;
            case 500: return errorMessages.INTERNAL_SERVER_ERROR;
            default: return errorMessages.UNTRACKED_ERROR;
        }
    }
}