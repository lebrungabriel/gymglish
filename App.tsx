import { NativeBaseProvider } from "native-base";
import RootNavigator from "./navigation";

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
};

export default App;
