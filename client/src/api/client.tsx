import { useQuery, gql } from "@apollo/client";
const loginUser = gql`
  query {
    Books{
      title
    }
  }
`;

const api = {
  loginUsingToken: async (token:any) => {
    return token;
  },
  
  Login: async (credential: any) => {
    console.log(credential);
    // const { loading, error, data } = await useQuery(loginUser);
    // console.log(loading, error, data);
  }
}
export default api;