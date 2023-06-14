import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative w-screen flex flex-row h-auto bg-light">
        <Navbar />
        <div className="content h-screen w-full flex flex-col box-border">
          <div className="content-title w-full bg-light2 h-[110px]"></div>
          <div className="content-body w-full">
            <div className="content-card w-full p-10 flex flex-row gap-14">
              <div className="card w-80 bg-dark shadow-xl rounded-[34px]">
                <div className="card-body">
                  <h2 className="card-title text-light2">Card title!</h2>
                  <p className="text-light2">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                </div>
              </div>
              <div className="card w-80 bg-light2 shadow-xl rounded-[34px]">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card w-80 bg-light2 shadow-xl rounded-[34px] ">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
            <div className="content-statistic w-full px-10 flex flex-row gap-9">
              <div className="card w-2/3 h-[250px] bg-light2 shadow-xl rounded-[34px] ">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card w-80 bg-light2 shadow-xl rounded-[34px] ">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
