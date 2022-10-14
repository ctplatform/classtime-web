import { AppProps } from "next/app";
import CourseBlock from "../components/courseblock";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  const courseName = "Computer Science";
  const sectionNum = 7;
  const type = "Lecture";
  return (
    <CourseBlock courseName={courseName} sectionNum={sectionNum} type={type} />
  );
}

export default App;
