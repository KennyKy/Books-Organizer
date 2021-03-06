import {createAppContainer, createSwitchNavigator }  from "react-navigation";

import Main from "./pages/main";
import Book from "./pages/Book";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Book
    }, {
      initialRouteName: "Main",
      backBehavior: "history"
    }
  )
);

export default Routes;