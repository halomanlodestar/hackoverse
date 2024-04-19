import {useEffect, useState} from "react";

interface CardProps {
  data: number[]
}

const Chart = ({data}: CardProps) => {

  // const canvas = document.querySelector("canvas")!
  //
  //
  // //
  // canvas.width = 0.8 * window.innerWidth
  // canvas.height = 300
  //
  // const ctx = canvas.getContext("2d")!
  //
  // // const [prev, setPrev] = useState(0)
  //
  // data.forEach((value, index) => {
  //   ctx.strokeStyle = "red"
  //   ctx.lineTo(index * 50, value)
  //   ctx.stroke()
  // })

  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => setLoadProgress(1), 600)
  }, [])


  return (
    <div>
      <div className={"flex justify-evenly h-60 items-end border-b border-black"}>
        {data.map((value, index) => {
          return (
            <div className={"h-full flex items-end"}>
              <div className={"flex flex-col justify-end h-0 duration-700"} style={{height: `calc(${value}% * ${loadProgress})`}}>

              {/*<div className={"h-2 w-2 rounded-full bg-red-600"} />*/}
              <div key={index}
                   className={"relative bg-red-600 w-1 h-full rounded-t-xl flex justify-center space-x-2"}>
                <span className={"absolute -top-10"}>{value * loadProgress}</span>
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

    // <canvas className={"border border-black"}/>
  );
};

export default Chart;