import "./App.scss";
import PageContainer from "./components/PageContainer";
import WebFont from "webfontloader";
import PageRouter from "./router/PageRouter";

function App() {
  WebFont.load({
    google: {
      families: ["Ubuntu","Montserrat"],
    },
  });
  return (
    <PageContainer>
      <PageRouter />
    </PageContainer>
  );
}

export default App;