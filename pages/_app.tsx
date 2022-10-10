import { AppProps } from "next/app";
import CourseBlock from "../components/courseblock";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return <CourseBlock />;
}

export default App;
