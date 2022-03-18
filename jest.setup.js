import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import "whatwg-fetch";

import store from "./redux/store";
import { server } from "./mocks/server";

const localStorageMock = (function () {
  const store = {
    token: "token",
  };
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

export const renderInBocata = (component) => {
  const bocata = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(component, { wrapper: bocata });
};

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
