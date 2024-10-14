import axios from "axios";
// const API_URL = "https://secureme-5ayh.onrender.com";
// const API_URL = "/api";
const API_URL = import.meta.env.VITE_API_URL;

// console.log(API_URL);

const generatePassword = async (type, options) => {
  try {
    const response = await axios.post(`${API_URL}/api/generate`, {
      type,
      options,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating password:", error);
    throw error;
  }
};

export default generatePassword;
