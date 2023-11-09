import aboutimage from '../../Assets/Images/about.jpg'
import fillform from "../../Assets/Images/fillform.svg"
import call from "../../Assets/Images/call.svg"
import schedule from "../../Assets/Images/schedule.svg"
import payment from "../../Assets/Images/payment.svg"
import { Timeline, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="py-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Our Lawyer Consultancy
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to our esteemed lawyer consultancy service! At indLaw, we are dedicated to providing top-tier legal advice and
            guidance to our clients. With a team of seasoned legal experts, we
            specialize in various practice areas, ensuring that your rights and
            interests are protected.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <img
              src={aboutimage}
              alt="Lawyer Consultancy"
              className="rounded-lg shadow-lg h-auto w-full"
            />
          </div>
          <div>
            <p className="text-gray-700">
              Our law firm specializes in a wide range of legal practice areas,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li>Business and Corporate Law</li>
              <li>Family and Divorce Law</li>
              <li>Criminal Defense</li>
              <li>Real Estate Law</li>
              <li>Estate Planning and Probate</li>
              <li>Personal Injury Claims</li>
              <li>Intellectual Property</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Whether you're a business owner, an individual, or a family in
              need of legal assistance, our experienced attorneys are here to
              serve you. We're dedicated to providing personalized legal
              solutions tailored to your specific needs.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>Experienced and knowledgeable legal team</li>
            <li>Personalized legal solutions</li>
            <li>Client-focused approach</li>
            <li>Proven track record of success</li>
            <li>Transparent and fair billing</li>
          </ul>
        </div>
      </div>
      <div className="row flex flex-row w-full justify-evenly p-10 py-20">
        <div className="left w-[30%] border-b-2 border-blue-500 ">
          <p className="text-5xl font-bold font-serif pb-5">
            Legal Advice Online From Top Lawyers
          </p>
          <div className="w-[32rem]">
            <Timeline>
              <TimelineItem className="pb-4">
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon variant="ghost" className="p-2">
                    <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Affordable legal solutions from senior lawyers
                  </Typography>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="pb-4">
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon variant="ghost" className="p-2">
                    <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Full litigation, documentation and support
                  </Typography>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className="pb-4">
                <TimelineHeader>
                  <TimelineIcon variant="ghost" className="p-2">
                    <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Guaranteed satisfaction or your money back.
                  </Typography>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <div className="right border-t-2 border-blue-700 flex flex-row justify-evenly w-[55%] ">
          <div className="fillform w-[15%] flex flex-col justify-center ">
            <img src={fillform} alt="fill form" className="w-24 pb-4" />
            <p className="text-xl font-bold self-center text-blue-500">
              FILL THE FORM
            </p>
          </div>
          <hr className="border border-solid border-black w-14 h-1 bg-black self-center"></hr>
          <div className="fillform w-[15%] flex flex-col justify-center align-middle">
            <img src={schedule} alt="fill form" className="w-24 pb-4 " />
            <p className="text-xl font-bold self-center text-blue-500">
              SCHEDULE AN APPOINTMENT
            </p>
          </div>
          <hr className="border border-solid border-black w-14 h-1 bg-black self-center"></hr>
          <div className="fillform w-[15%] flex flex-col justify-center align-middle">
            <img src={payment} alt="fill form" className="w-24 pb-4" />
            <p className="text-xl font-bold self-center text-blue-500">
              MAKE A PAYMENT
            </p>
          </div>
          <hr className="border border-solid border-black w-14 h-1 bg-black self-center"></hr>
          <div className="fillform w-[15%] flex flex-col justify-center align-middle">
            <img src={call} alt="fill form" className="w-24 pb-4" />
            <p className="text-xl font-bold self-center text-blue-500">
              CALL THE LAWYER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


