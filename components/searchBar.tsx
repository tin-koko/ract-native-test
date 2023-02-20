import { StyleSheet, TextInput, SafeAreaView } from "react-native";

interface searchBarProps {
    search: string;
    setSearch(value: string): void;
}
export default function Searchbar({ search, setSearch }: searchBarProps ) {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search by country name..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontWeight: "700",
    fontSize: 28,
  },
  search: {
    backgroundColor: "#fff",
    height: 50,
    width: '100%',
    padding: 4,
    margin: 4,
    borderBottomWidth: .2,

  },
});
