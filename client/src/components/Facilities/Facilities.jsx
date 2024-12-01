// import { useAuth0 } from "@auth0/auth0-react";
// import { Box, Button, Group, TextInput } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import React, { useContext } from "react";
// import UserDetailContext from "../../context/UserDetailContext";
// import useProperties from "../../hooks/useProperties.jsx";
// import { useMutation } from "react-query";
// import { toast } from "react-toastify";
// import { createResidency } from "../../utils/api";
// const Facilities = ({
//   prevStep,
//   propertyDetails,
//   setPropertyDetails,
//   setOpened,
//   setActiveStep,
// }) => {
//   const form = useForm({
//     initialValues: {
//       FirstFeature: propertyDetails.facilities.FirstFeature,
//       SecondFeature: propertyDetails.facilities.SecondFeature,
//       ThirdFeature: propertyDetails.facilities.ThirdFeature,
//       FourthFeature: propertyDetails.facilities.FourthFeature,
//       FifthFeature: propertyDetails.facilities.FifthFeature,
//     },
//     validate: {
//       // FirstFeature: (value) => (value < 1 ? "Must have atleast one room" : null),
//       // ThirdFeature: (value) =>
//       //   value < 1 ? "Must have atleast one bathroom" : null,
//     },
//   });

//   const { FirstFeature, SecondFeature, ThirdFeature, FourthFeature, FifthFeature } = form.values;

//   const handleSubmit = () => {
//     const { hasErrors } = form.validate();
//     if (!hasErrors) {
//       setPropertyDetails((prev) => ({
//         ...prev,
//         facilities: { FirstFeature, SecondFeature, ThirdFeature, FourthFeature, FifthFeature },
//       }));
//       mutate();
//     }
//   };

//   // ==================== upload logic
//   const { user } = useAuth0();
//   const {
//     userDetails: { token },
//   } = useContext(UserDetailContext);
//   const { refetch: refetchProperties } = useProperties();

//   const {mutate, isLoading} = useMutation({
//     mutationFn: ()=> createResidency({
//         ...propertyDetails, facilities: {FirstFeature, SecondFeature , ThirdFeature, FourthFeature, FifthFeature},
//     }, token),
//     onError: ({ response }) => toast.error(response.data.message, {position: "bottom-right"}),
//     onSettled: ()=> {
//       toast.success("Added Successfully", {position: "bottom-right"});
//       setPropertyDetails({
//         title: "",
//         description: "",
//         price: 0,
//         country: "",
//         city: "",
//         address: "",
//         image: null,
//         facilities: {
//           FirstFeature: "",
//           SecondFeature: "",
//           ThirdFeature: "",
//           FourthFeature: "",
//           FifthFeature: "",
//         },
//         userEmail: user?.email,
//       })
//       setOpened(false)
//       setActiveStep(0)
//       refetchProperties()
//     }

//   })

//   return (
//     <Box maw="30%" mx="auto" my="sm">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <TextInput
//           withAsterisk
//           label="FirstFeature"
//           // min={0}
//           {...form.getInputProps("FirstFeature")}
//         />
//         <TextInput
//           label="SecondFeature"
//           // min={0}
//           {...form.getInputProps("SecondFeature")}
//         />
//         <TextInput
//           withAsterisk
//           label="ThirdFeature"
//           // min={0}
//           {...form.getInputProps("ThirdFeature")}
//         />
//         <TextInput
//           withAsterisk
//           label="FourthFeature"
//           // min={0}
//           {...form.getInputProps("FourthFeature")}
//         />
//         <TextInput
//           withAsterisk
//           label="FifthFeature"
//           // min={0}
//           {...form.getInputProps("FifthFeature")}
//         />
//         <Group position="center" mt="xl">
//           <Button variant="default" onClick={prevStep}>
//             Back
//           </Button>
//           <Button type="submit" color="green" disabled={isLoading}>
//             {isLoading ? "Submitting" : "Add Property"}
//           </Button>
//         </Group>
//       </form>
//     </Box>
//   );
// };

// export default Facilities;


import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties.jsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../../utils/api";
const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      parkings: propertyDetails.facilities.parkings,
      bathrooms: propertyDetails.facilities.bathrooms,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? "Must have atleast one room" : null),
      bathrooms: (value) =>
        value < 1 ? "Must have atleast one bathroom" : null,
    },
  });

  const { bedrooms, parkings, bathrooms } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms },
      }));
      mutate();
    }
  };

  // ==================== upload logic
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const {mutate, isLoading} = useMutation({
    mutationFn: ()=> createResidency({
        ...propertyDetails, facilities: {bedrooms, parkings , bathrooms},
    }, token),
    onError: ({ response }) => toast.error(response.data.message, {position: "bottom-right"}),
    onSettled: ()=> {
      toast.success("Added Successfully", {position: "bottom-right"});
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user?.email,
      })
      setOpened(false)
      setActiveStep(0)
      refetchProperties()
    }

  })

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of Bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          label="No of Parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput
          withAsterisk
          label="No of Bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
