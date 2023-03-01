import axios from "axios";

export default async function (username, password) {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/Account/Signin`,
      {
        username,
        password,
      }
    );

    return await res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
