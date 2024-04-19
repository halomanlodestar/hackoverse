import {chronicDiseases} from "../data.ts";
import Chart from "../components/Chart.tsx";

const Dashboard = () => {

  // Name
  // Image
  // Personal Details
  // Past Report
  // Progress
   // medicine course
   //

  const profileImage = "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"

  return (
    <main className={"h-full"}>
      <section className={"h-fit bg-neutral-300 p-4 rounded-2xl w-4/5 flex items-center space-x-4"}>
        <img src={profileImage} alt={"Profile picture"} className={"w-32 h-32 object-cover rounded-full"}/>
        <h2 className={"text-3xl"}>
          Hello <span className={"font-medium"}>Kunal Rana</span>
        </h2>
      </section>

      <section className={"h-fit bg-neutral-300 p-4 rounded-2xl w-4/5 flex flex-col"}>
        <h3>Your Personal Details</h3>
        <hr className={"my-3 bg-black h-px"}/>
        <div className={"grid grid-cols-2"}>
          <div>
            <span className={"font-medium"}>Age:</span> 25
          </div>
          <div>
            <span className={"font-medium"}>Blood Group:</span> B+
          </div>
        </div>
      </section>

      <section className={"h-fit bg-neutral-300 p-4 rounded-2xl w-4/5 flex flex-col space-y-4"}>
        <h3>Your Past Reports</h3>
        <div className={"w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 overflow-x-scroll"}>
          {chronicDiseases.slice(0, 4).map(({name}) => {
            return (
              <li className={"w-fit h-10 border border-black rounded-full text-lg p-2 px-3 items-center flex hover:bg-black hover:text-white cursor-pointer duration-100"}>
                <span>{name}</span>
              </li>
            )
          })}
        </div>
      </section>

      <section className={"h-fit bg-neutral-300 p-4 rounded-2xl w-4/5"}>
        <h3>Your Progress</h3>
        <div>
          <Chart data={[10, 80, 30, 40, 33, 90, 58]} />
        </div>
      </section>


    </main>
  );
};

export default Dashboard;