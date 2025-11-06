import { StyleSheet } from "react-native";

const LIGHT_GRAY = "#f5f5f5";
const BORDER_COLOR = "#e0e0e0";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Quicksand_400Regular",
  },

  // 🔍 Search group
  searchGroup: {
    padding: 16,
    backgroundColor: "#34967C",
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: LIGHT_GRAY,
    borderRadius: 32,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
    paddingLeft: 16,
  },
  searchFormText: {
    fontSize: 12,
    color: "#161117",
    fontFamily: "Quicksand_600SemiBold",
  },
  searchControl: {
    paddingVertical: 4,
    color: "#161117",
  },
  searchButton: {
    backgroundColor: "#FFA800",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🏷️ Filter group
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 12,
    gap: 35,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingBottom: 16,
  },
  filterText: { fontFamily: "Quicksand_600SemiBold" },

  // 📋 Listings
  listingContainer: {
    flex: 1,
    padding: 16,
  },
  paginationContainer: {
    marginTop: 16,
    marginBottom: 32,
    alignItems: "center",
  },
  showMoreButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#161117",
    borderRadius: 85,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: " Quicksand_500Medium",
  },
});

export default styles;
