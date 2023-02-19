import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";

export default function Searchbar({ search, setSearch }: any) {
  return (
    <SafeAreaView>
      {/* @ts-ignore */}
      <SearchBar
        placeholder="Search by country name..."
        value={search}
        onChangeText={setSearch}
        lightTheme={true}
        round={false}
        showCancel={false}
      />
    </SafeAreaView>
  );
}