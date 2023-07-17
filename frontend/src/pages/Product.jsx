import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/product");
    setProducts(response.data);
  };

  const getProductById = async (id) => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    setProduct(response.data);
    setName(response.data.name);
    setPrice(response.data.price);
    setSize(response.data.size);
  };

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/product", {
        name,
        size,
        price,
      });
      setName("");
      setSize("");
      setPrice("");
      getProducts();
    } catch (error) {
      console.info(error.message);
    }
  };

  const updateProduct = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/product/${id}`, {
        name,
        size,
        price,
      });
      setName("");
      setSize("");
      setPrice("");
      getProducts();
    } catch (error) {
      console.info(error.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      getProducts();
    } catch (error) {
      console.info(error.message);
    }
  };
  return (
    <>
      {/* modal box tambah produk start */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Tambah Produk</h3>
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
                value={name}
                className="input input-bordered w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">
                Ukuran Produk
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="ukuran produk"
                value={size}
                className="input input-bordered w-full"
                onChange={(e) => setSize(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">
                Harga Produk
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="harga produk"
                value={price}
                className="input input-bordered w-full"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="modal-action">
            <button className="btn" type="submit" onClick={createProduct}>
              Submit
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {/* modal box tambah produk end */}
      {/* modal box Edit produk start */}
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Edit Produk</h3>
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
                value={name}
                className="input input-bordered w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">
                Ukuran Produk
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="ukuran produk"
                value={size}
                className="input input-bordered w-full"
                onChange={(e) => setSize(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">
                Harga Produk
              </span>
            </label>
            <label className="input-group w-full">
              <input
                type="text"
                placeholder="harga produk"
                value={price}
                className="input input-bordered w-full"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="modal-action">
            <button
              className="btn"
              type="submit"
              onClick={() => {
                updateProduct(product.id);
              }}
            >
              Save
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {/* modal box Edit produk end */}
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
          <div className="content-body w-full overflow-auto">
            <div className="card bg-light2 my-5 mx-10 p-10">
              <button
                className="btn w-fit bg-dark text-light2 rounded-full"
                onClick={() => window.my_modal_3.showModal()}
              >
                Tambah Produk
              </button>
              <div className="overflow-x-auto my-5">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nama Produk</th>
                      <th>Ukuran</th>
                      <th>Harga</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <th> {index + 1} </th>
                        <td> {product.name} </td>
                        <td> {product.size} </td>
                        <td> {product.price} </td>
                        <td>
                          <a
                            className="btn me-3 btn-sm btn-info"
                            onClick={() => {
                              window.my_modal_4.showModal();
                              getProductById(product.id);
                            }}
                          >
                            Edit
                          </a>
                          <a
                            className="btn btn-sm btn-error"
                            onClick={() => deleteProduct(product.id)}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
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
