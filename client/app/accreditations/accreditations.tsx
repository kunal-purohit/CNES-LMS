import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Accreditation = (props: Props) => {
  return (
    <div>
      <div className="w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3">
        <h1 className={`${styles.title} !text-center pt-2 !text-4xl`}>
          <b>Accreditation and Affiliation</b>
        </h1>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>American Council on Exercise</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366147/1_cxhkjf.jpg"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            ACE is a globally recognized leader in fitness education, providing
            accredited, science-driven programs designed to equip professionals
            with the knowledge and expertise to achieve excellence in the
            fitness industry.
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>National Academy of Sports Medicine (NASM)</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366152/2_qzlckk.jpg"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            NASM offers internationally recognized certifications grounded in
            evidence-based practices. With a focus on advanced coaching
            techniques and cutting-edge nutrition strategies, NASM empowers
            fitness professionals to deliver exceptional results and stay at the
            forefront of the industry.
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>Athletics and Fitness Association of America (AFAA)</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366148/3_gw6syu.jpg"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            AFAA provides industry-leading certifications that focus on
            sport-specific training and performance enhancement. AFAA
            accreditation ensures fitness professionals are equipped with
            specialized expertise to deliver tailored coaching and optimize
            athletic outcomes.
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>ISO 9001:2015</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1737369752/ISO_v0rjjs.png"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            ISO 9001:2015 specifies requirements for a quality management system
            when an organisation needs to demonstrate its ability to
            consistently provide products and services that meet customer and
            applicable statutory and regulatory requirements and aims to enhance
            customer satisfaction through the effective application of the
            system, including processes for improvement of the system and the
            assurance of conformity to customer and applicable statutory and
            regulatory requirements.
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>The International Association Of Therapists (IAOTH)</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366147/7_dizjbr.jpg"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            The International Association Of Therapists (IAOTH) is an
            organization that recognizes therapists globally. The IAOTH has
            approved all our courses. once you graduate from an IAOTH-approved
            course at Centre for Nutrition & Exercise Sciences, you can apply to
            become a member with them as a Therapist.
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>NIILM University</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1737370031/NIILM_University_Certificate_page-0001_u205hi.jpg"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            NIILM University is recognised by University Grant Commission (UGC),
            NIILM University has been accredited by the National Assessment and
            Accreditation Council (NAAC), All India Council for Technical
            Education (AICTE), Bar Council of India (BCI), National Council for
            Teacher Education (NCTE) and Pharmacy Council of India (PCI). NIILM
            University is a member of Association of Indian Universities (AIU).
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>Course Accreditation (UK)</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1725970239/Course_Accreditation_cwcbua.png"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Course Accreditation (UK) is recognised worldwide. The Trustmark
            carries global endorsement. This accreditation demonstrates that we
            provide services of the highest calibre. CA is a Global organisation
            which sets a Benchmark in Health and Beauty Courses.
          </p>
          <br />
        </ul>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <br />
          <h2 className={`${styles.title} pt-2 !text-center`}>
            <b>International Yoga Organization</b>
          </h2>
          {/* Centered Image with Attractive UI */}
          <div className="flex justify-center my-6">
            <img
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1725970239/IYO_1_rj89zy.jpg"
              alt="Accreditation Image"
              className="w-[500px] h-auto rounded-lg shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Attractive UI with hover effects
            />
          </div>
          <h2 className={`${styles.title} pt-2 !text-left`}>
            <b>Brief</b>
          </h2>
          <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
            International yoga organisation (IYO) is the Registered Affiliation
            body by GOVT OF INDIA, Yoga Registration board, IYO is Registered
            with USA FEDERAL & UNO- UNITED NATIONS ORGANISATION.
          </p>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Accreditation;
