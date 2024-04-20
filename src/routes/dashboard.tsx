import { placeholderData } from "../data.ts";
import Chart from "../components/Chart.tsx";

const Dashboard = () => {
  // Name
  // Image
  // Personal Details
  // Past Report
  // Progress
  // medicine course
  //

  const profileImage =
    "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg";

  return (
    <main className={"h-full"}>
      <section
        className={
          "h-fit bg-neutral-300 p-4 rounded-2xl w-4/5 flex items-center space-x-4"
        }
      >
        <img
          src={profileImage}
          alt={"Profile picture"}
          className={"w-32 h-32 object-cover rounded-full"}
        />
        <h2 className={"text-3xl"}>
          Hello <span className={"font-medium"}>Kunal Rana</span>
        </h2>
      </section>

      <section
        className={"h-fit bg-neutral-300 p-4 rounded-2xl w-4/5 flex flex-col"}
      >
        <h3>Your Personal Details</h3>
        <hr className={"my-3 bg-black h-px"} />
        <div className={"grid gap-y-4 md:grid-cols-2"}>
          <div>
            <span className={"font-medium"}>Age:</span> 25
          </div>
          <div>
            <span className={"font-medium"}>Blood Group:</span> B+
          </div>
        </div>
      </section>

      <section
        className={
          "h-fit bg-neutral-300 p-4 rounded-2xl w-4/5 flex flex-col space-y-4"
        }
      >
        <h3>Your Past Appointments</h3>
        <div
          className={
            "w-full flex flex-col space-y-2 overflow-x-scroll divide-y divide-neutral-400"
          }
        >
          {/*<div c lassName={"w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 overflow-x-scroll"}>*/}
          {/*{chronicDiseases.slice(0, 4).map(({name}) => {*/}
          {/*  return (*/}
          {/*    <li className={"w-fit h-10 border border-black rounded-full text-lg p-2 px-3 items-center flex hover:bg-black hover:text-white cursor-pointer duration-100"}>*/}
          {/*      <span>{name}</span>*/}
          {/*    </li>*/}
          {/*  )*/}
          {/*})}*/}

          {placeholderData
            .slice(0, 4)
            .map(({ doctor, lastAppointment, nextAppointment, disease }) => {
              return (
                <div className={"flex flex-col xl:flex-row"}>
                  <div
                    className={
                      "flex flex-col xl:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 w-full h-fit p-4"
                    }
                  >
                    {doctor.image ? (
                      <img
                        alt={doctor.name}
                        src={doctor.image}
                        className={"h-16 w-16 object-cover rounded-full"}
                      />
                    ) : (
                      <div
                        className={
                          "min-w-16 max-w-16 h-16 bg-emerald-600 text-md font-semibold flex items-center justify-center rounded-full"
                        }
                      >
                        <span>
                          {doctor.name
                            .split(" ")
                            .filter(
                              (value, index) => value !== " " && index !== 0,
                            )
                            .map((value) => value[0])}
                        </span>
                      </div>
                    )}
                    <div
                      className={"flex flex-col items-center md:items-start"}
                    >
                      <span>{doctor.name}</span>
                      <span className={"text-base text-center md:text-start"}>
                        Diagnosed {disease}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      "flex flex-col items-center md:items-start justify-center w-full"
                    }
                  >
                    <div className={"w-fit"}>
                      <span className={"text-base font-semibold"}>
                        Last Appointment:{" "}
                      </span>
                      <span className={"text-sm w-full"}>
                        {lastAppointment.toDateString()}
                      </span>
                    </div>
                    <div>
                      <span className={"text-base font-semibold"}>
                        Next Appointment:{" "}
                      </span>
                      <span className={"text-sm"}>
                        {nextAppointment.toDateString()}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      "text-base cursor-pointer w-full justify-center my-2 md:my-0 text-blue-700 flex md:w-1/3 items-center"
                    }
                  >
                    <span>More Details &rarr;</span>
                  </div>
                  {/*<hr className={"mt-5 bg-black h-px"} />*/}
                </div>
              );
            })}
        </div>
      </section>

      <section
        className={"h-fit bg-neutral-300 p-4 space-y-4 rounded-2xl w-4/5"}
      >
        <h3>Your Progress</h3>
        <div>
          <Chart data={[10, 80, 30, 40, 33, 90, 58]} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
