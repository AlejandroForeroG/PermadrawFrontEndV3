
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./router/router";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <section>
          <MyRoutes />
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
