import querystring from "querystring";

export const objectToFormUrlEncoded = (obj: Record<string, any>) => {
  return querystring.stringify(obj);
};

export const TOKEN = "04C78878FC183F4E780E99CA26CE975D46E9A801858C95DB7A484DBED539839C";
