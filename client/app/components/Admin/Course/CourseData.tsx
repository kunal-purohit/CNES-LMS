import { styles } from "@/app/styles/style";
import React, { FC } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import { toast } from "react-hot-toast";

type Props = {
  learn: { title: string }[];
  setLearn: (learn: { title: string }[]) => void;
  forwhom: { title: string }[];
  setForwhom: (forwhom: { title: string }[]) => void;
  eligibility: { title: string }[];
  setEligibility: (eligibility: { title: string }[]) => void;
  accreditation: { title: string }[];
  setAccreditation: (accreditation: { title: string }[]) => void;
  brief: { title: string }[];
  setBrief: (brief: { title: string }[]) => void;
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  brochure: { title: string }[];
  setBrochure: (brochure: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  learn,
  setLearn,
  forwhom,
  setForwhom,
  eligibility,
  setEligibility,
  accreditation,
  setAccreditation,
  brief,
  setBrief,
  benefits,
  setBenefits,
  brochure,
  setBrochure,
  active,
  setActive,
}) => {

  const handleLearnChange = (index: number, value: any) => {
    const updatedLearn = [...learn];
    updatedLearn[index].title = value;
    setLearn(updatedLearn);
  };

  const handleAddLearn = () => {
    setLearn([...learn, { title: "" }]);
  };

  const handleForwhomChange = (index: number, value: any) => {
    const updatedForwhom = [...forwhom];
    updatedForwhom[index].title = value;
    setForwhom(updatedForwhom);
  };

  const handleAddForwhom = () => {
    setForwhom([...forwhom, { title: "" }]);
  };

  const handleEligibilityChange = (index: number, value: any) => {
    const updatedEligibility = [...eligibility];
    updatedEligibility[index].title = value;
    setEligibility(updatedEligibility);
  };

  const handleAddEligibility = () => {
    setEligibility([...eligibility, { title: "" }]);
  };

  const handleAccreditationChange = (index: number, value: any) => {
    const updatedAccreditation = [...accreditation];
    updatedAccreditation[index].title = value;
    setAccreditation(updatedAccreditation);
  };

  const handleAddAccreditation = () => {
    setAccreditation([...accreditation, { title: "" }]);
  };

  const handleBriefChange = (index: number, value: any) => {
    const updatedBrief = [...brief];
    updatedBrief[index].title = value;
    setBrief(updatedBrief);
  };

  const handleAddBrief = () => {
    setBrief([...brief, { title: "" }]);
  };

  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handleBrochureChange = (index: number, value: any) => {
    const updatedBrochure = [...brochure];
    updatedBrochure[index].title = value;
    setBrochure(updatedBrochure);
  };

  const handleAddBrochure = () => {
    setBrochure([...brochure, { title: "" }]);
  };


  const prevButton = () => {
    setActive(active - 1);
  }

  const handleOptions = () => {
    if (benefits[benefits.length - 1]?.title !== "" && eligibility[eligibility.length - 1]?.title !== "") {
      setActive(active + 1);
    } else{
        toast.error("Please fill the fields for go to next!")
    }
  };
  

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        What You Will Learn?
        </label>
        <br />
        {learn.map((learn: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Learn"
            placeholder="You will be able to train others"
            required
            className={`${styles.input} my-2`}
            value={learn.title}
            onChange={(e) => handleLearnChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddLearn}
        />
      </div>

      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        Who This Course Is For:
        </label>
        <br />
        {forwhom.map((forwhom: any, index: number) => (
          <input
            type="text"
            key={index}
            name="forwhom"
            placeholder="Fitness enthusiasts seeking to turn their passion into a rewarding career."
            required
            className={`${styles.input} my-2`}
            value={forwhom.title}
            onChange={(e) => handleForwhomChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddForwhom}
        />
      </div>

      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        Eligibility
        </label>
        <br />
        {eligibility.map((eligibility: any, index: number) => (
          <input
            type="text"
            key={index}
            name="eligibility"
            placeholder="You need basic knowledge of MERN stack"
            required
            className={`${styles.input} my-2`}
            value={eligibility.title}
            onChange={(e) => handleEligibilityChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}

          onClick={handleAddEligibility}
        />
      </div>
      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        Accreditation & Affiliations
        </label>
        <br />
        {accreditation.map((accreditation: any, index: number) => (
          <input
            type="text"
            key={index}
            name="accreditation"
            placeholder="Recognized by UK"
            required
            className={`${styles.input} my-2`}
            value={accreditation.title}
            onChange={(e) => handleAccreditationChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}

          onClick={handleAddAccreditation}
        />
      </div>

      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        Brief
        </label>
        <br />
        {brief.map((brief: any, index: number) => (
          <input
            type="text"
            key={index}
            name="brief"
            placeholder="This course gives you exposure to overall..."
            required
            className={`${styles.input} my-2`}
            value={brief.title}
            onChange={(e) => handleBriefChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}

          onClick={handleAddBrief}
        />
      </div>


      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        Benefits to our Students
        </label>
        <br />
        {benefits.map((benefits: any, index: number) => (
          <input
            type="text"
            key={index}
            name="benefits"
            placeholder="This accreditation demonstrates that we provide services of the highest calibre."
            required
            className={`${styles.input} my-2`}
            value={benefits.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefit}
        />
      </div>

      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
        Brochure
        </label>
        <br />
        {brochure.map((brochure: any, index: number) => (
          <input
            type="text"
            key={index}
            name="brochure"
            placeholder="This course gives you exposure to overall..."
            required
            className={`${styles.input} my-2`}
            value={brochure.title}
            onChange={(e) => handleBrochureChange(index, e.target.value)}
          />
        ))}
        <AiOutlinePlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}

          onClick={handleAddBrochure}
        />
      </div>
      <div className="w-full flex items-center justify-between">
      <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseData;
