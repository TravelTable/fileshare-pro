import React from "react";
import FileDownloadContainer from "./Mainpag";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <FileDownloadContainer />
      <Analytics />
    </>
  );
}

export default App;