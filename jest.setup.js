import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";

export const renderInBocata = (component) => {
  const bocata = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(component, { wrapper: bocata });
};

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
