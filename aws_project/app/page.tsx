import Image from "next/image";
import PersonalDeatils from "../app/component/PersonalDetails"
import EducationalDetails from "../app/component/EducationalDetails"
import Experience from "../app/component/Experience"
import Preview from "./component/Preview";

export default function Home() {
  return (
   <div className="text-center">
    Aws 
    <PersonalDeatils/>
    <EducationalDetails/>
    <Experience/>
    <Preview/>
   </div>
  );
}
