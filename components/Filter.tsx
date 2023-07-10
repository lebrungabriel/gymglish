import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setFilterInStore } from "../reducers/filter";
import {
  removeMoviesToStore,
  removeResultSearchToStore,
} from "../reducers/movie";

type Props = {};

const Filter = (props: Props) => {
  const dispatch = useDispatch();

  // Handler for filtering movies based on the selected filter
  const handleFilter = (textFilter: string) => {
    // Clear the current movie list and search results
    dispatch(removeMoviesToStore());
    dispatch(removeResultSearchToStore());
    // Set the selected filter in the store
    dispatch(setFilterInStore(textFilter));
  };
  return (
    <View style={styles.container}>
      <Button
        buttonText="Top rated"
        handleFilter={() => handleFilter("Top rated")}
      />
      <Button
        buttonText="Popular"
        handleFilter={() => handleFilter("Popular")}
      />
      <Button
        buttonText="Upcoming"
        handleFilter={() => handleFilter("Upcoming")}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 60,
  },
});
