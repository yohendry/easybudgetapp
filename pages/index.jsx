import React from 'react';
import Image from 'next/image';
import GetStartedButton from '../components/pages/home/getStarted';
import BasicPageLayout from '../components/layout/BasicPageLayout';

const headerImageLoader = (props) => {
  const {
    src, width,
  } = props;
  return `https://ik.imagekit.io/uvgmgdwe4zho/tr:w-${width}:pr-true:ar-750-540/${src}`;
};

const avatarImageLoader = ({
  src, width,
}) => `https://ik.imagekit.io/uvgmgdwe4zho/tr:w-${width}:pr-true:ar-1-1/${src}`;

function index() {
  return (
    <BasicPageLayout>
      <section className="container my-5 md:my-0 my-20 mx-auto" id="pricing">
        <div
          className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start"
        >
          <div className=" md:w-2/5 space-y-8 text-center md:text-left">
            <h1 className="font-bold text-4xl lg:text-5xl">
              Bring everyone together to build better products.
            </h1>
            <p className="  text-gray-600 lg:w-6/12">
              Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </p>
            <GetStartedButton variant="budget-blue" />
          </div>
          <div className="ml-0 md:ml-7 mb-7 md:mb-0 w-full md:w-3/5 relative">
            <Image loader={headerImageLoader} className="" src="ss.png" width={1024} height={720} alt="easybudget screenshot" sizes="(max-width: 768px) 100vw, 60vw" />
          </div>
        </div>
      </section>
      <section className="container my-20 mx-auto flex flex-col lg:flex-row justify-between relative" id="product">
        <div className="space-y-8 lg:w-1/3 text-center lg:text-center mb-8 lg:mb-0">
          <h2 className="font-bold text-4xl">
            What’s different about Manage?
          </h2>
          <p className="text-gray-600 max-w-[360px]">
            Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.
          </p>
        </div>
        <div className="lg:w-5/12 space-y-10">
          <div className="space-y-5">
            <h3 className="font-bold mt-1 py-2 rounded-full bg-budget-green-100 lg:bg-transparent -mr-5 lg:mr-0">
              <span
                className="bg-budget-green-700 px-5 text-center py-3 rounded-full text-white mr-3"
              >
                01
              </span>
              Track
              company-wide
              progress
            </h3>
            <p className="text-gray-600 ml-0 lg:ml-[4.8rem]">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="font-bold mt-1 py-2 rounded-full bg-budget-green-100 lg:bg-transparent -mr-5 lg:mr-0">
              <span
                className="bg-budget-green-700 px-5 text-center py-3 rounded-full text-white mr-3"
              >
                02
              </span>
              Advanced built-in reports
            </h3>
            <p className="text-gray-600 ml-0 lg:ml-[4.8rem]">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="flex space-x-5 items-start">
            <div className="space-y-5">
              <h3 className="font-bold mt-1 py-2 rounded-full bg-budget-green-100 lg:bg-transparent -mr-5 lg:mr-0">
                <span
                  className="bg-budget-green-700 px-5 text-center py-3 rounded-full text-white mr-3"
                >
                  03
                </span>
                Everything you need in one place
              </h3>
              <p className="text-gray-600 ml-0 lg:ml-[4.8rem]">
                Stop jumping from one service to another to communicate, store files,
                track tasks and share documents. Manage offers an all-in-one team
                productivity solution.
              </p>
            </div>
          </div>
        </div>

      </section>
      <section className="my-20 space-y-10 flex flex-col items-center" id="about-us">
        <h2 className="font-bold text-3xl lg:text-4xl mb-12">What they’ve said</h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-8">
          <div className="bg-gray-100 text-center p-8 space-y-4 relative">
            <Image loader={avatarImageLoader} src="avatar-anisha.png" alt="avatar" width={70} height={70} className="absolute -top-9 left-0 right-0 mx-auto" />
            <h3 className="font-bold">Anisha Li</h3>
            <p className="text-gray-600">
              “Manage has supercharged our team’s workflow. The ability to maintain
              visibility on larger milestones at all times keeps everyone motivated.”
            </p>
          </div>
          <div className="bg-gray-100 text-center p-8 space-y-4 relative">
            <Image loader={avatarImageLoader} src="avatar-ali.png" alt="avatar" width={70} height={70} className="absolute -top-9 left-0 right-0 mx-auto" />
            <h3 className="font-bold">Ali Bravo</h3>
            <p className="text-gray-600">
              “We have been able to cancel so many other subscriptions since using
              Manage. There is no more cross-channel confusion and everyone is much
              more focused.”
            </p>
          </div>
          <div className="bg-gray-100 text-center p-8 space-y-4 relative">
            <Image loader={avatarImageLoader} src="avatar-richard.png" alt="avatar" width={70} height={70} className="absolute -top-9 left-0 right-0 mx-auto" />
            <h3 className="font-bold">Richard Watts</h3>
            <p className="text-gray-600">
              “Manage allows us to provide structure and process. It keeps us organized
              and focused. I can’t stop recommending them to everyone I talk to!”
            </p>
          </div>

        </div>
        <GetStartedButton variant="budget-blue" />
      </section>

    </BasicPageLayout>
  );
}

export default index;
