"use client";
import React, { FC, useEffect, useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import CoursePreview from "./CoursePreview";
import {
  useEditCourseMutation,
  useGetAllCoursesQuery,
} from "../../../../redux/features/courses/coursesApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

type Props = {
  id: string;
};

const EditCourse: FC<Props> = ({ id }) => {
  const [editCourse, { isSuccess, error }] = useEditCourseMutation();
  const { data, refetch } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const editCourseData = data && data.courses.find((i: any) => i._id === id);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Course Updated successfully");
      redirect("/admin/courses");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (editCourseData) {
      setCourseInfo({
        name: editCourseData.name,
        description: editCourseData.description,
        price: editCourseData.price,
        estimatedPrice: editCourseData?.estimatedPrice,
        tags: editCourseData.tags,
        level: editCourseData.level,
        categories: editCourseData.categories,
        demoUrl: editCourseData.demoUrl,
        thumbnail: editCourseData?.thumbnail?.url,
      });
      setLearn(editCourseData.learn);
      setForwhom(editCourseData.forwhom);
      setEligibility(editCourseData.eligibility);
      setAccreditation(editCourseData.accreditation);
      setBrief(editCourseData.brief);
      setBenefits(editCourseData.benefits);
      setBrochure(editCourseData.brochure);
      setCourseContentData(editCourseData.courseData);
    }
  }, [editCourseData]);

  const [courseInfo, setCourseInfo] = useState<any>({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    categories: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [learn, setLearn] = useState([{ title: "" }]);
  const [forwhom, setForwhom] = useState([{ title: "" }]);
  const [eligibility, setEligibility] = useState([{ title: "" }]);
  const [accreditation, setAccreditation] = useState([{ title: "" }]);
  const [brief, setBrief] = useState([{ title: "" }]);
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [brochure, setBrochure] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState([
    {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "Untitled Section",
      videoLength: "",
      links: [
        {
          title: "",
          url: "",
        },
      ],
      suggestion: "",
    },
  ]);

  const [courseData, setCourseData] = useState({});

  const handleSubmit = async () => {
    // Format learn array
    const formattedLearn = learn.map((learn) => ({
      title: learn.title,
    }));

    // Format fowhom array
    const formattedForwhom = forwhom.map((forwhom) => ({
      title: forwhom.title,
    }));

    // Format eligibility array
    const formattedEligibility = eligibility.map((eligibility) => ({
      title: eligibility.title,
    }));

    // Format eligibility array
    const formattedAccreditation = accreditation.map((accreditation) => ({
      title: accreditation.title,
    }));

    // Format brief array
    const formattedBrief = brief.map((brief) => ({
      title: brief.title,
    }));

    // Format benefits array
    const formattedBenefits = benefits.map((benefits) => ({
      title: benefits.title,
    }));
    // Format brochure array
    const formattedBrochure = brochure.map((brochure) => ({
      title: brochure.title,
    }));

    // Format course content array
    const formattedCourseContentData = courseContentData.map(
      (courseContent) => ({
        videoUrl: courseContent.videoUrl,
        title: courseContent.title,
        description: courseContent.description,
        videoSection: courseContent.videoSection,
        videoLength: courseContent.videoLength,
        links: courseContent.links.map((link) => ({
          title: link.title,
          url: link.url,
        })),
        suggestion: courseContent.suggestion,
      })
    );

    //   prepare our data object
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      categories: courseInfo.categories,
      price: courseInfo.price,
      estimatedPrice: courseInfo.estimatedPrice,
      tags: courseInfo.tags,
      thumbnail: courseInfo.thumbnail,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      learn: formattedLearn,
      forwhom: formattedForwhom,
      eligibility: formattedEligibility,
      accreditation: formattedAccreditation,
      brief: formattedBrief,
      benefits: formattedBenefits,
      brochure: formattedBrochure,
      courseData: formattedCourseContentData,
    };

    setCourseData(data);
  };

  const handleCourseCreate = async (e: any) => {
    const data = courseData;
    console.log(data);
    await editCourse({ id: editCourseData?._id, data });
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 1 && (
          <CourseData
            learn={learn}
            setLearn={setLearn}
            forwhom={forwhom}
            setForwhom={setForwhom}
            eligibility={eligibility}
            setEligibility={setEligibility}
            accreditation={accreditation}
            setAccreditation={setAccreditation}
            brief={brief}
            setBrief={setBrief}
            benefits={benefits}
            setBenefits={setBenefits}
            brochure={brochure}
            setBrochure={setBrochure}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 2 && (
          <CourseContent
            active={active}
            setActive={setActive}
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            handleSubmit={handleSubmit}
          />
        )}

        {active === 3 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleCourseCreate={handleCourseCreate}
            isEdit={true}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default EditCourse;
