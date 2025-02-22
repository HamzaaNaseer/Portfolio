import { createClient } from "contentful";
const space = import.meta.env.VITE_SPACE;
const environment = import.meta.env.VITE_ENVIRONMENT;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
console.log("access token ", accessToken);
export const client = createClient({
  space: space,
  environment: environment,
  accessToken: accessToken,
});
