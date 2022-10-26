import { AppProps } from "next/app";
import CourseBlock from "../components/courseblock";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  const courseName = "Computer Science";
  const sectionNum = 7;
  const type = "Lecture";
  const courseLength = 2;
  const courseQuantity = 2;
  const courseStart = new Date();
  return (
    <CourseBlock
      courseName={courseName}
      sectionNum={sectionNum}
      type={type}
      courseLength={courseLength}
      courseQuantity={courseQuantity}
      courseStart={courseStart}
    />
  );
}

export default App;
