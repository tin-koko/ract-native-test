interface Continent {
  code: string;
  name: string;
  countries: [Country];
}
export interface RootState {
  countries: Country[];
  selectedCountry: Country | null;
}

interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: Continent;
  currency: string;
  flag: string;
  emoji: string;
  emojiU: string;
}

export type CountryItemProps = { item: Country; onPress: () => void };
