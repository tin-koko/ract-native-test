import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

import { ApolloClientConfig as client } from "src/config";
import { useAppDispatch, useAppSelector } from "src/store";
import { setCountries } from "src/store/reducers/countries";

import type { Country } from "src/types";

// Query all countries
const COUNTRIES_QUERY = gql`
  query GetCountries {
    countries {
      name
      emoji
      code
    }
  }
`;

// Query by country code
export const GET_COUNTRY_BY_CODE = gql`
  query GetInfo($code: ID!) {
    country(code: $code) {
      currency
      name
      emoji
      native
      phone
      continent {
        name
      }
    }
  }
`;

export const useCountries = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries);

  const { data, loading } = useQuery<{ countries: Country[] }>(
    COUNTRIES_QUERY,
    {
      client,
      skip: countries.length !== 0 ? true : false, // we only request for data if store is empty
    }
  );

  useEffect(() => {
    if (!data) return;
    console.info("Saving to local store");
    dispatch(setCountries(data.countries));
  }, [data]);

  const countryList =
    countries.length !== 0 ? countries : data?.countries || [];

  return {
    data: countryList,
    loading: loading || countryList.length === 0,
  };
};

export const useCountryByCode = (countryCode: string | null) => {
  return useQuery(GET_COUNTRY_BY_CODE, {
    client,
    variables: {
      code: countryCode,
    },
    skip: !countryCode, // user must select a country before making any request
  });
};
