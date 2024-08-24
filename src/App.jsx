import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1675538078410-2cec60aa046c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGlnaCUyMFBlcmZvcm1hbmNlJTIwTGFwdG9wfGVufDB8fDB8fHww",
      title: "High-Performance Laptop",
      price: "$999.99",
      description:
        "A powerful laptop with 16GB RAM, 512GB SSD, and a sleek design for both work and play.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1616410072514-e92114cf1a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnRwaG9uZSUyMFBybyUyME1heHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Smartphone Pro Max",
      price: "$799.99",
      description:
        "Experience cutting-edge technology with a 6.7-inch display, 128GB storage, and a stunning camera.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdpcmVsZXNzJTIwTm9pc2UlMjBDYW5jZWxsaW5nJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Wireless Noise-Cancelling Headphones",
      price: "$199.99",
      description:
        "Immerse yourself in high-quality sound with these comfortable, wireless noise-cancelling headphones.",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1712761998611-c59db7dff27e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnR3YXRjaCUyMFNlcmllcyUyMDV8ZW58MHx8MHx8fDA%3D",
      title: "Smartwatch Series 5",
      price: "$249.99",
      description:
        "Track your fitness, monitor your health, and stay connected with this stylish and feature-packed smartwatch.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHVyYWJsZSUyMFRyYXZlbCUyMEJhY2twYWNrfGVufDB8fDB8fHww",
      title: "Durable Travel Backpack",
      price: "$89.99",
      description:
        "A spacious and rugged backpack, perfect for travelers and commuters alike, with multiple compartments and waterproof fabric.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
      title: "Running Shoes",
      price: "$129.99",
      description:
        "Lightweight and comfortable running shoes designed for optimal performance and support during long runs.",
    },
    {
      id: 7,
      image:
        "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RFNMUiUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "DSLR Camera",
      price: "$649.99",
      description:
        "Capture stunning photos and videos with this high-quality DSLR camera, featuring a 24MP sensor and 4K recording.",
    },
    {
      id: 8,
      image:
        "https://plus.unsplash.com/premium_photo-1715593513351-b3ed7088a845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0b21hdGljJTIwQ29mZmVlJTIwTWFrZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Automatic Coffee Maker",
      price: "$99.99",
      description:
        "Brew the perfect cup of coffee every morning with this easy-to-use, programmable coffee maker.",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1618275648002-9758fc97dbf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3J0YWJsZSUyMEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Portable Bluetooth Speaker",
      price: "$59.99",
      description:
        "Take your music anywhere with this compact, powerful, and waterproof Bluetooth speaker.",
    },
  ];

  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {products.map((data) => (
              <Cards
                key={data.id}
                image={data.image}
                title={data.title}
                price={data.price}
                description={data.description}
                onpress={() => {
                  alert(data.title);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
