import { Routes, Route, Navigate } from "react-router-dom";

  export const AppRouter = () => {

      return (
        <Routes>

            <Route path="/index" />
            <Route path="*" element={<Navigate to="/index" />} />

        </Routes>
      );
  }