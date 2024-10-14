import axios from "axios";
const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5000";

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
