// // // import asyncHandler from "express-async-handler";

// // // import { prisma } from "../config/prismaConfig.js";

// // // export const createResidency = asyncHandler(async (req, res) => {
// // //   const {
// // //     title,
// // //     description,
// // //     price,
// // //     address,
// // //     country,
// // //     city,
// // //     facilities,
// // //     image,
// // //     userEmail,
// // //   } = req.body.data;

// // //   console.log(req.body.data);
// // //   try {
// // //     const residency = await prisma.residency.create({
// // //       data: {
// // //         title,
// // //         description,
// // //         price,
// // //         address,
// // //         country,
// // //         city,
// // //         facilities,
// // //         image,
// // //         owner: { connect: { email: userEmail } },
// // //       },
// // //     });

// // //     res.send({ message: "Residency created successfully", residency });
// // //   } catch (err) {
// // //     if (err.code === "P2002") {
// // //       throw new Error("A residency with address already there");
// // //     }
// // //     throw new Error(err.message);
// // //   }
// // // });

// // // // function to get all the documents/residencies
// // // export const getAllResidencies = asyncHandler(async (req, res) => {
// // //   const residencies = await prisma.residency.findMany({
// // //     orderBy: {
// // //       createdAt: "desc",
// // //     },
// // //   });
// // //   res.send(residencies);
// // // });

// // // // function to get a specific document/residency
// // // export const getResidency = asyncHandler(async (req, res) => {
// // //   const { id } = req.params;

// // //   try {
// // //     const residency = await prisma.residency.findUnique({
// // //       where: { id },
// // //     });
// // //     res.send(residency);
// // //   } catch (err) {
// // //     throw new Error(err.message);
// // //   }
// // // });


// // import asyncHandler from "express-async-handler";
// // import { prisma } from "../config/prismaConfig.js";

// // // Function to create a residency
// // export const createResidency = asyncHandler(async (req, res) => {
// //   const {
// //     title,
// //     description,
// //     price,
// //     address,
// //     country,
// //     city,
// //     facilities,
// //     image,
// //     userEmail,
// //   } = req.body; // Adjusted to directly access req.body

// //   try {
// //     // Check if the owner (user) exists
// //     const ownerExists = await prisma.user.findUnique({
// //       where: { email: userEmail },
// //     });
// //     if (!ownerExists) {
// //       return res.status(400).send({ message: "User not found" });
// //     }

// //     // Check for duplicate residency by address
// //     const existingResidency = await prisma.residency.findUnique({
// //       where: { address },
// //     });
// //     if (existingResidency) {
// //       return res.status(400).send({ message: "A residency with this address already exists." });
// //     }

// //     // Create the residency
// //     const residency = await prisma.residency.create({
// //       data: {
// //         title,
// //         description,
// //         price,
// //         address,
// //         country,
// //         city,
// //         facilities,
// //         image,
// //         owner: { connect: { email: userEmail } },
// //       },
// //     });

// //     return res.send({ message: "Residency created successfully", residency });
// //   } catch (err) {
// //     console.error("Error creating residency:", err);
// //     if (err.code === "P2002") {
// //       return res.status(400).send({ message: "A residency with this address already exists." });
// //     }
// //     return res.status(500).send({ message: "An unexpected error occurred." });
// //   }
// // });

// // // Function to get all residencies
// // export const getAllResidencies = asyncHandler(async (req, res) => {
// //   try {
// //     const residencies = await prisma.residency.findMany({
// //       orderBy: {
// //         createdAt: "desc",
// //       },
// //     });
// //     return res.send(residencies);
// //   } catch (err) {
// //     console.error("Error fetching residencies:", err);
// //     return res.status(500).send({ message: "Failed to fetch residencies." });
// //   }
// // });

// // // Function to get a specific residency by ID
// // export const getResidency = asyncHandler(async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const residency = await prisma.residency.findUnique({
// //       where: { id },
// //     });

// //     if (!residency) {
// //       return res.status(404).send({ message: "Residency not found" });
// //     }

// //     return res.send(residency);
// //   } catch (err) {
// //     console.error("Error fetching residency:", err.message, err.stack);
// //     return res.status(500).send({ message: "Failed to fetch residency." });
// //   }
// // });




// import asyncHandler from "express-async-handler";
// import { prisma } from "../config/prismaConfig.js";

// // Create a residency
// export const createResidency = asyncHandler(async (req, res) => {
//   const {
//     title,
//     description,
//     price,
//     address,
//     country,
//     city,
//     facilities,
//     image,
//   } = req.body.data;

//   try {
//     const residency = await prisma.residency.create({
//       data: {
//         title,
//         description,
//         price,
//         address,
//         country,
//         city,
//         facilities,
//         image,
//       },
//     });

//     res.send({ message: "Residency created successfully", residency });
//   } catch (err) {
//     console.error("Error creating residency:", err.message);

//     if (err.code === "P2002") {
//       return res.status(400).send({ message: "Residency with this address already exists" });
//     }

//     res.status(500).send({ message: err.message });
//   }
// });

// // Get all residencies
// export const getAllResidencies = asyncHandler(async (req, res) => {
//   const residencies = await prisma.residency.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   res.send(residencies);
// });

// // Get a specific residency
// export const getResidency = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const residency = await prisma.residency.findUnique({
//       where: { id },
//     });
//     res.send(residency);
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });



import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
  } = req.body.data;

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
      },
    });

    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    console.error("Error creating residency:", err.message);

    if (err.code === "P2002") {
      return res.status(400).send({ message: "Residency with this address already exists" });
    }

    res.status(500).send({ message: err.message });
  }
});

// Get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  } catch (err) {
    res.status(500).send({ message: "Error fetching residencies" });
  }
});

// Get a specific residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });

    if (!residency) {
      return res.status(404).send({ message: "Residency not found" });
    }

    res.send(residency);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
