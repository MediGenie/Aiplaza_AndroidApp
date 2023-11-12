import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { Layout } from "./Layout";
import { Page } from "./pages";

// Changed from BrowserRouter to HashRouter in order to support for page loading in mobile app of react app
function App() {
  return (
    <HashRouter> 
      <AuthProvider>
        <Layout>
          <Page />
        </Layout>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
