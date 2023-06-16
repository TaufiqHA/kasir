import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Home = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 350, pv: 2800, amt: 2200 },
    { name: "Page C", uv: 450, pv: 2700, amt: 2100 },
    { name: "Page E", uv: 250, pv: 2900, amt: 2100 },
    { name: "Page F", uv: 150, pv: 2100, amt: 2300 },
  ];

  return (
    <>
      {/* modal box satuan start */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Satuan</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">
                Nama Produk
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="nama produk"
                className="input input-bordered w-full"
              />
            </label>
            <label className="label">
              <span className="label-text font-semibold text-sm mt-5">
                Jumlah
              </span>
            </label>
            <div className="join">
              <div className="join-item btn bg-dark rounded-s-full">
                <ion-icon name="remove-outline"></ion-icon>
              </div>
              <div className="join-item btn bg-dark text-light2">12</div>
              <div className="join-item btn bg-dark rounded-e-full">
                <ion-icon name="add-outline"></ion-icon>
              </div>
            </div>
            <span className="label-text font-semibold text-sm mt-5">
              Total Harga
            </span>
            <h2 className="font-semibold text-lg">Rp. 300.000</h2>
            <div className="form-control w-fit mt-5">
              <label className="label cursor-pointer flex gap-1">
                <input type="checkbox" className="checkbox" />
                <span className="label-text font-semibold">Print Nota</span>
              </label>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn">Submit</button>
          </div>
        </form>
      </dialog>
      {/* modal box stauan end */}
      {/* modal box grosir start */}
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Grosir</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">
                Nama Produk
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="nama produk"
                className="input input-bordered w-full"
              />
            </label>
            <label className="label">
              <span className="label-text font-semibold text-sm mt-5">
                Jumlah
              </span>
            </label>
            <div className="join">
              <div className="join-item btn bg-dark rounded-s-full">
                <ion-icon name="remove-outline"></ion-icon>
              </div>
              <div className="join-item btn bg-dark text-light2">12</div>
              <div className="join-item btn bg-dark rounded-e-full">
                <ion-icon name="add-outline"></ion-icon>
              </div>
            </div>
            <span className="label-text font-semibold text-sm mt-5">
              Total Harga
            </span>
            <h2 className="font-semibold text-lg">Rp. 300.000</h2>
            <div className="form-control w-fit mt-5">
              <label className="label cursor-pointer flex gap-1">
                <input type="checkbox" className="checkbox" />
                <span className="label-text font-semibold">Print Nota</span>
              </label>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {/* modal box grosir end */}
      <div className="relative w-screen flex flex-row h-auto bg-light">
        <Navbar />
        <div className="content h-screen w-full flex flex-col box-border">
          <div className="content-title w-full bg-light2 h-[120px] flex flex-row items-center px-10 justify-between">
            <div className="title-body">
              <h2 className="text-[30px] font-semibold ">
                Welcome back, Nawir
              </h2>
              <p className="text-[#8c8c8d] ">
                Here are today's stats from your online cashier!
              </p>
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                className="input w-96 rounded-full border-2 border-light"
              />
            </div>
          </div>
          <div className="content-body w-full">
            <div className="content-card w-full p-10 flex flex-row gap-14">
              <div
                className="card w-80 bg-light2 hover:bg-dark text-dark hover:text-light2 shadow-xl rounded-[34px]"
                onClick={() => window.my_modal_1.showModal()}
              >
                <div className="card-body flex flex-col ">
                  <div className="card-title flex flex-row justify-between">
                    <div className="title-head-1 flex flex-row gap-5">
                      <div className="icon w-[46px] h-[46px] rounded-lg flex justify-center items-center bg-[#9c9c9c]">
                        <ion-icon name="bag-outline" size="large"></ion-icon>
                      </div>
                      <div className="content">
                        <div className="title">Satuan</div>
                        <p className="font-thin text-sm">731 Orders</p>
                      </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                  <div className="body">
                    <h1 className="font-bold text-2xl">Rp. 300.000</h1>
                  </div>
                </div>
              </div>
              <div
                className="card w-80 bg-light2 hover:bg-dark hover:text-light2 shadow-xl rounded-[34px]"
                onClick={() => window.my_modal_2.showModal()}
              >
                <div className="card-body flex flex-col">
                  <div className="card-title flex flex-row justify-between">
                    <div className="title-head-1 flex flex-row gap-5">
                      <div className="icon w-[46px] h-[46px] rounded-lg flex justify-center items-center bg-[#9c9c9c]">
                        <ion-icon name="cart-outline" size="large"></ion-icon>
                      </div>
                      <div className="content">
                        <div className="title">Grosir</div>
                        <p className="font-thin text-sm">200 Orders</p>
                      </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                  <div className="body">
                    <h1 className="font-bold text-2xl">Rp. 250.000</h1>
                  </div>
                </div>
              </div>
              <Link
                to={"/product"}
                className="card w-80 bg-light2 hover:bg-dark hover:text-light2 shadow-xl rounded-[34px]"
              >
                <div className="card-body flex flex-col justify-center">
                  <div className="card-title flex flex-row justify-between">
                    <div className="title-head-1 flex flex-row gap-5">
                      <div className="icon w-[46px] h-[46px] rounded-lg flex justify-center items-center bg-[#9c9c9c]">
                        <ion-icon name="cube-outline" size="large"></ion-icon>
                      </div>
                      <div className="content">
                        <div className="title">Product</div>
                        <p className="font-thin text-sm">10 Product</p>
                      </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </div>
              </Link>
            </div>
            <div className="content-statistic w-full px-10 flex flex-row gap-9">
              <div className="card w-2/3 h-[250px] bg-light2 shadow-xl rounded-[34px] ">
                <div className="card-body">
                  <h2 className="card-title">Data Penjualan</h2>
                  <LineChart
                    width={600}
                    height={150}
                    data={data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  >
                    <Line type={"monotone"} dataKey={"uv"} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray={"5 5"} />
                    <XAxis dataKey={"name"} />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
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
