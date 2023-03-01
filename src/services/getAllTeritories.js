import axios from "axios";

export default async function () {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/Teritories/All`
    );

    return await res.data;
  } catch (error) {
    throw error;
  }
}
