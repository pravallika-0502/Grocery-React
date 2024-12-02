import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/Products"); // Redirect to Products page
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: " #ff6347" ,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <NavigationBar />
      </div>

      {/* Carousel Section */}
      <div
        style={{
          height: "100vh", // Full height of the viewport
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          background: "linear-gradient(to right, #e0f7fa, #80deea)", // Soft gradient background
          overflow: "hidden", // Prevent scrollbar
        }}
      >
        <Carousel
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
          interval={1000}
        >
          {/* Slide 1: Fruits */}
          <Carousel.Item style={{ height: "100%" }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5677627/pexels-photo-5677627.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fresh Fruits"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "70%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centering the caption
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker background for better text visibility
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center", // Center the text
                width: "100%", // Ensure it doesn't overflow
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "3rem" }}>Fresh Fruits</h3>
              <p style={{ color: "#fff", fontSize: "1.2rem" }}>
                Shop the best and fresh fruits directly from the farm!
              </p>
              <Button
                variant="success"
                onClick={handleExploreClick}
                style={{
                  marginTop: "15px", // Spacing between caption and button
                  padding: "1rem 2rem",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                }}
              >
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2: Fruits */}
          <Carousel.Item style={{ height: "100%" }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fresh Fruits"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centering the caption
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker background for better text visibility
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center", // Center the text
                width: "100%", // Ensure it doesn't overflow
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "3rem" }}>Fresh Fruits</h3>
              <p style={{ color: "#fff", fontSize: "1.2rem" }}>
                Shop the best and fresh fruits directly from the farm!
              </p>
              <Button
                variant="success"
                onClick={handleExploreClick}
                style={{
                  marginTop: "15px", // Spacing between caption and button
                  padding: "1rem 2rem",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                }}
              >
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3: Vegetables */}
          <Carousel.Item style={{ height: "100%" }}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Fresh Vegetables"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "70%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centering the caption
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker background for better text visibility
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center", // Center the text
                width: "100%", // Ensure it doesn't overflow
              }}
            >
              <h1 style={{ color: "#fff", fontSize: "3rem" }}>Fresh Vegetables</h1>
              <h2 style={{ color: "#fff", fontSize: "1.5rem" }}>
                Organic and fresh vegetables for a healthy lifestyle!
              </h2>
              <Button
                variant="success"
                onClick={handleExploreClick}
                style={{
                  marginTop: "15px", // Spacing between caption and button
                  padding: "1rem 2rem",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                }}
              >
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
