import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql`
query Countries {
    countries {
      code
      continent {
        name
        code
      }
      emoji
      languages {
        name
        native
        rtl
        code
      }
      name
      phone
      native
    }
  }`