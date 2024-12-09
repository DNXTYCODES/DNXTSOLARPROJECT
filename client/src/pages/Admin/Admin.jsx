import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import AddPropertyModal from "../../AddPropertyModal/AddPropertyModal";
import AddPropertyModal from "../../components/AddPropertyModal/AddPropertyModal";
import "./Admin.css";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/user/allusers");
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/residency/allresd");
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/residency/${id}`);
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`/api/residency/${selectedProduct.id}`, selectedProduct);
      toast.success("Product updated successfully");
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({
      ...selectedProduct,
      [name]: value,
    });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="actions">
        <button onClick={() => setModalOpened(true)} className="add-product-button">
          Add Product
        </button>
      </div>

      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

      <section className="users-list">
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Favorites</th>
              <th>Bookings</th>
            </tr>
          </thead>
          {/* <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>
                  <ul>
                    {user.favResidenciesID.map((productId, index) => (
                      <li key={index}>{productId}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {user.bookedVisits.map((visit, index) => (
                      <li key={index}>{visit.date}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </section>

      <section className="products-list">
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleEditProduct(product)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </section>

      {selectedProduct && (
        <section className="edit-product">
          <h3>Edit Product</h3>
          <input
            type="text"
            name="title"
            value={selectedProduct.title}
            onChange={handleChange}
            placeholder="Product Title"
          />
          <textarea
            name="description"
            value={selectedProduct.description}
            onChange={handleChange}
            placeholder="Product Description"
          />
          <input
            type="number"
            name="price"
            value={selectedProduct.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
        </section>
      )}
    </div>
  );
};

export default Admin;



