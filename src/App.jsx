import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import routes from "./routes";
// import { requestPermission } from "./NotificationService";

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    async function logPageView() {
      try {
        await fetch(
          "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-760717bf-8d87-41e7-ad6d-783ae14d56f9/requests/Telemetry",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ path: location.pathname }),
          }
        );
      } catch (err) {
        console.error("API error:", err);
      }
    }
    console.log(location.pathname)
    logPageView();
  }, [location.pathname]);

  return null; // nothing to render, just side-effect
}

function App() {
  return (
    <Router>
      {/* tracker runs on every route change */}
      <RouteChangeTracker />

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
