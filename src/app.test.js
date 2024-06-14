import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forgot";
import Dashboard from "./pages/dashboard/Dashboard";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import '@testing-library/jest-dom/extend-expect';

test("renders Home component with correct content", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );

  // Check if the heading and paragraph elements with the expected text are rendered
  const headingElement = screen.getByText(
    "Inventory & Stock Management Tabebuya"
  );
  const paragraphElement = screen.getByText(
    "Inventory system to control and manage products in the warehouse in real time and integrated to make it easier to develop your business."
  );

  // Ensure that both elements are in the document
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test("renders Login component with correct content", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByText("Forgot Password")).toBeInTheDocument();

});

test("renders Register component with correct content", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();

});

test("renders Forgot Password component with correct content", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText("Forgot Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Get Reset Email" })).toBeInTheDocument();

});

test("renders Dashboard component with correct content", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText("Inventory Stats")).toBeInTheDocument();
  expect(screen.getByText("Total Products")).toBeInTheDocument();
  expect(screen.getByText("Total Value")).toBeInTheDocument();
  expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  expect(screen.getByText("All Categories")).toBeInTheDocument();
  
});