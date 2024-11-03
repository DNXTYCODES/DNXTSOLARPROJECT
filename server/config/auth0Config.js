import { auth } from 'express-oauth2-jwt-bearer';
import axios from 'axios';

// Set your Auth0 credentials
const clientId = 'vgHbkPBe3b4vcJK5kRtp3uQuGRDhbS4e';
const clientSecret = 's735oKP1AHC2HALHxnzAtT3b86wrI5O5fyEAji2BuG_pNbFxrhQSSjikelj4YQRN';
const audience = 'https://solarbackend-eight.vercel.app/';
const tokenUrl = 'https://dev-y7agkmqetvk26r0j.us.auth0.com/oauth/token';

// Prepare the token request data
const data = {
  client_id: clientId,
  client_secret: clientSecret,  // Pass the client secret here
  audience: audience,
  grant_type: 'client_credentials'
};

// Function to get the access token from Auth0
const getToken = async () => {
  try {
    const response = await axios.post(tokenUrl, data);
    console.log('Access Token:', response.data.access_token);
    return response.data.access_token;  // Return the token for further use
  } catch (error) {
    console.error('Error getting token:', error.response?.data || error.message);
    throw error;
  }
};

// Middleware to check JWT
const jwtCheck = auth({
  audience: audience,
  issuerBaseURL: 'https://dev-y7agkmqetvk26r0j.us.auth0.com',
  tokenSigningAlg: 'RS256'
});

console.log(tokenUrl)

// Export the JWT check middleware
export default jwtCheck;

// Example usage: get the JWT token (You can call this function where needed)
getToken().then(token => {
  // Use the token where necessary (e.g., in API requests or other logic)
}).catch(error => {
  console.error('Unable to retrieve JWT:', error);
});



// prior version

// import {auth} from 'express-oauth2-jwt-bearer'

// const jwtCheck = auth({
//     clientSecret: "s735oKP1AHC2HALHxnzAtT3b86wrI5O5fyEAji2BuG_pNbFxrhQSSjikelj4YQRN",
//     audience: "http://localhost:8000",
//     issuerBaseURL: "https://dev-y7agkmqetvk26r0j.us.auth0.com",
//     tokenSigningAlg: "RS256"
// })

// export default jwtCheck

