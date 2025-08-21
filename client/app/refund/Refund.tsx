import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Refund = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2 flex justify-center`}>
          <b>Refund & Cancellation Policy </b>
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Refund & Cancellation Policy It is common for educational
            institutions to have a “no refund policy” once a student has
            enrolled in a course or program. This means that if a student
            decides to withdraw from the course or program, they will not
            receive a refund of the fees paid. CFNES Fitness Academy LLP (referred to
            as “CNES” herein) also follows this policy. the “cookie preferences”
            link located at the bottom of our website.
          </p>
          <ol>
            1. Registration fee once paid is non refundable & non
            adjustable.(whichever course is Applicable)
          </ol>
          <ol>
            2. After the course fee has been paid no request for refund
            /adjustment / transfer will be entertained under any circumstances.
          </ol>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <b>Cancellation Policy:</b> CFNES Fitness Academy LLP has got right to make
            changes/modify/cancel any terms and conditions.
          </p>
          
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <b>Terms of Enrollment:</b>
          </p>
          
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            A reference in these terms and conditions to “we,” “us” or “our” is
            a referred to by CNES.
            <br />
            <br />
            In case of any assistance or clarification with any of the below
            points, you can reach to us contactus@cnes.online or call
            +91-8708218446.
          </p>
          <ol>1. CNES reserves rights of admission</ol>
          <ol>
            2. When enrolment form is signed by student, it is assumed that
            student must have read all the rules and regulations of CNES.
          </ol>
          <ol>
            3. The terms of enrollment are legally binding when signed by the
            applicant and accepted by CFNES Fitness Academy LLP (Only Applicable for University
            course).
          </ol>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <b>Course Change:</b>
          </p>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            You are not permitted to change your training course. Training
            course modification demand could merely be approved for an upgrade;
            no downgrade demand will be approved, training course can be altered
            with additional fee will be imposed depending upon the chosen
            programme. If you have any inquiries further, please send an email
            to contactus@cnes.online
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Refund;
