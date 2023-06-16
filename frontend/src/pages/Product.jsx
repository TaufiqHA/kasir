import React from "react";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <>
      <div className="relative w-screen flex flex-row h-auto bg-light">
        <Navbar />
        <div className="content h-screen w-full flex flex-col box-border">
          <div className="content-title w-full bg-light2 h-[120px] flex flex-row items-center px-10 justify-between">
            <div className="title-body">
              <h2 className="text-[30px] font-semibold ">Produk</h2>
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
            <div className="card bg-light2 my-5 mx-10 p-10">
              <button className="btn w-fit bg-dark text-light2 rounded-full">
                Tambah Produk
              </button>
              <div className="overflow-x-auto my-5">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Nama Produk</th>
                      <th>Ukuran</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="join self-center my-5">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
