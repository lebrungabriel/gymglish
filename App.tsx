import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import filter from "./reducers/filter";
import movie from "./reducers/movie";

const store = configureStore({
  reducer: { filter, movie },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
