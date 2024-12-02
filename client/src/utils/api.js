// import axios from "axios";
// import dayjs from "dayjs";
// import { toast } from "react-toastify";

// export const api = axios.create({
//   // baseURL: "solarfrontend-c9rcwk11o-matthewcodezs-projects.vercel.app/api",
//   baseURL: "https://dnxtsolarprojectttbackend.onrender.com/api",
// });

// export const getAllProperties = async () => {
//   try {
//     const response = await api.get("/residency/allresd", {
//       timeout: 10 * 1000,
//     });

//     if (response.status === 400 || response.status === 500) {
//       throw response.data;
//     }
//     return response.data;
//   } catch (error) {
//     toast.error("Something went wrong");
//     throw error;
//   }
// };

// export const getProperty = async (id) => {
//   try {
//     const response = await api.get(`/residency/${id}`, {
//       timeout: 10 * 1000,
//     });

//     if (response.status === 400 || response.status === 500) {
//       throw response.data;
//     }
//     return response.data;
//   } catch (error) {
//     toast.error("Something went wrong");
//     throw error;
//   }
// };

// export const createUser = async (email, token) => {
//   try {
//     await api.post(
//       `/user/register`,
//       { email },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error) {
//     toast.error("Something went wrong, Please try again");
//     throw error;
//   }
// };

// export const bookVisit = async (date, propertyId, email, token) => {
//   try {
//     await api.post(
//       `/user/bookVisit/${propertyId}`,
//       {
//         email,
//         id: propertyId,
//         date: dayjs(date).format("DD/MM/YYYY"),
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error) {
//     toast.error("Something went wrong, Please try again");
//     throw error;
//   }
// };

// export const removeBooking = async (id, email, token) => {
//   try {
//     await api.post(
//       `/user/removeBooking/${id}`,
//       {
//         email,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error) {
//     toast.error("Something went wrong, Please try again");

//     throw error;
//   }
// };

// export const toFav = async (id, email, token) => {
//   try {
//     await api.post(
//       `/user/toFav/${id}`,
//       {
//         email,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (e) {
//     throw e;
//   }
// };

// export const getAllFav = async (email, token) => {
//   if (!token) return;
//   try {
//     const res = await api.post(
//       `/user/allFav`,
//       {
//         email,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return res.data["favResidenciesID"];
//   } catch (e) {
//     toast.error("Something went wrong while fetching favs");
//     throw e;
//   }
// };

// export const getAllBookings = async (email, token) => {
//   if (!token) return;
//   try {
//     const res = await api.post(
//       `/user/allBookings`,
//       {
//         email,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return res.data["bookedVisits"];
//   } catch (error) {
//     toast.error("Something went wrong while fetching bookings");
//     throw error;
//   }
// };

// export const createResidency = async (data, token) => {
//   console.log(data);
//   try {
//     const res = await api.post(
//       `/residency/create`,
//       {
//         data,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error) {
//     throw error;
//   }
// };




import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://dnxtsolarprojectttbackend.onrender.com/api", // Adjusted baseURL
});

// Get all properties
export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", { timeout: 10 * 1000 });
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch properties");
    throw error;
  }
};

// Get a specific property by ID
export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, { timeout: 10 * 1000 });
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch property details");
    throw error;
  }
};

// Create a new user
export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to create user. Please try again.");
    throw error;
  }
};

// Book a visit to a property
export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to book visit. Please try again.");
    throw error;
  }
};

// Remove a booking
export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to remove booking. Please try again.");
    throw error;
  }
};

// Add a property to favorites
export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to add to favorites.");
    throw error;
  }
};

// Get all favorite properties
export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/allFav`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data.favResidenciesID;
  } catch (error) {
    toast.error("Failed to fetch favorites");
    throw error;
  }
};

// Get all bookings
export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/allBookings`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data.bookedVisits;
  } catch (error) {
    toast.error("Failed to fetch bookings");
    throw error;
  }
};

// Create a residency
export const createResidency = async (residencyData, token) => {
  try {
    const res = await api.post(
      `/residency/create`,
      residencyData, // Sending as a flat object
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    toast.error("Failed to create residency. Please try again.");
    throw error;
  }
};
