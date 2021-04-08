import axios, { Method } from "axios";

const DOMAIN = "https://sonchaegeon.shop";

export const request = (method: Method, url: string, data: any) => {
  console.log(method, url, data);
  return axios({
    method: method,
    url: DOMAIN + url,
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
