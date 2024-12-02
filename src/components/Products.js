import React, { useEffect, useState } from "react";
import NavigationBar from "./Navbar";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { Button, Row, Col, Form } from "react-bootstrap";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCreate = () => {
    setCurrentProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        setProducts(products.filter((product) => product.id !== id));
        window.alert("Product deleted successfully!");
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleFormSubmit = (product) => {
    if (currentProduct) {
      fetch(`http://localhost:4000/products/${currentProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update product");
          }
          return response.json();
        })
        .then((updatedProduct) => {
          setProducts(
            products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
          );
          setShowForm(false);
          alert("Product updated successfully!");
        })
        .catch((error) => console.error("Error updating product:", error));
    } else {
      const newId =
        products.length > 0 ? Math.max(...products.map((p) => p.row)) + 1 : 1;

      const newProduct = { ...product, row: newId };

      fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create product");
          }
          return response.json();
        })
        .then((createdProduct) => {
          setProducts([...products, createdProduct]);
          setShowForm(false);
          alert("Product added successfully!");
        })
        .catch((error) => console.error("Error creating product:", error));
    }
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Fixed Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#f8f9fa", // Same as the default Bootstrap navbar color
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // Optional: subtle shadow for better visibility
        }}
      >
        <NavigationBar /> 
      </div>

      {/* Add margin to avoid content overlapping with navbar */}
      <div style={{ marginTop: "80px" }}>
        <div
          style={{
            marginTop: "120px",
          }}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <h1>Products</h1>
        </div>

        <Row className="mb-4">
          <Col xs={12} md={6} className="d-flex justify-content-start">
            <Form.Control
              type="text"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-75 search-input"
              style={{
                border: "2px solid green",
                borderRadius: "4px",
                padding: "8px",
                marginLeft: "20px", // Move the search field to the right
              }}
            />
          </Col>

          <Col xs={12} md={5} className="d-flex justify-content-end">
            <Button
              variant="success"
              onClick={handleCreate}
              className="create-btn"
            >
              <h4>Create Product</h4>
            </Button>
          </Col>
        </Row>

        {/* Conditionally render "No Results Found" or ProductTable */}

        { searchTerm && filteredProducts.length === 0 ? (

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "200px",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "red",
            }}
          >
            No such results found!
          </div>
        ) : (
          <ProductTable
            products={filteredProducts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {showForm && (
          <ProductForm
            onSubmit={handleFormSubmit}
            onClose={() => setShowForm(false)}
            product={currentProduct}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
