import Information from "./Information";
import Education from "./Education";
import Practical from "./Pratical";
import CVGen from "./CVgen";

export default function InformationSection() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-3">
          <Information />
          <Education />
          <Practical />
        </div>
        <CVGen />
      </div>
    </div>
  );
}
