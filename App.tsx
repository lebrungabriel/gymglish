import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import filter from "./reducers/filter";

const store = configureStore({
  reducer: { filter },
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
