import TodosScreen from "./pages/TodosScreen";

import { TodosContextProvider } from "./store/todosContext";

const App = () => {
  return (
    <TodosContextProvider>
      <TodosScreen />
    </TodosContextProvider>
  );
}

export default App;
