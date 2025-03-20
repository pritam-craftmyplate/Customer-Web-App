import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "../axiosclient";

export const getPlattersByGroupIdAsync = createAsyncThunk(
  "platter/getPlattersByGroupIdAsync",
  async (data, toolkit) => {
    try {
      const response = await AxiosClient({
        toolkit,
        url: `/groupId/${data.quoteGroupId}/${data.phoneNumber}`, // Ensure this matches the API path
        method: "GET",
      });

      // console.log("Full API response:", response);
      // console.log("Response data:", response.data);

      if (response.data?.statusCode === 200) {
        toast.success(response.data?.message || "Data fetched successfully");
      }

     // console.log("Fetched getPlatter Data by group id==>", response);
      return response; // Ensure only response.data is returned
    } catch (error) {
      toast.error(error.response?.data?.message || "API Error"); // Fixed typo and added fallback
     // console.error("API Call Error:", error);
      return toolkit.rejectWithValue(error.response?.data || "API Error");
    }
  }
);
