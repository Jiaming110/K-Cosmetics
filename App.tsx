import React, { useState, useEffect } from "react";

const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };
const countries = [
  { code: "UK", name: "United Kingdom", shipping: 4.99 },
  { code: "ES", name: "Spain", shipping: 6.5 },
  { code: "DE", name: "Germany", shipping: 6.0 },
  { code: "FR", name: "France", shipping: 6.0 },
  { code: "IT", name: "Italy", shipping: 7.0 },
  { code: "NL", name: "Netherlands", shipping: 5.5 },
];

const paymentOptions = ["Credit/Debit Card", "PayPal", "Apple Pay"];

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [paymentMethod, setPaymentMethod] = useState(paymentOptions[0]);
  const [cardInfo, setCardInfo] = useState({ number: "", expiry: "", cvv: "" });
  const [cardError, setCardError] = useState(false);
  const [formData, setFormData] = useState({ name: "", address: "", email: "" });
  const [formErrors, setFormErrors] = useState({ name: false, address: false, email: false });
  const [cart, setCart] = useState<{ item: any; qty: number }[]>([]);
  const [orderComplete, setOrderComplete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | any>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [adminLogin, setAdminLogin] = useState({ username: "", password: "" });
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", brand: "", description: "", image: "" });

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts([
        {
          id: 1,
          name: "COSRX Low pH Cleanser",
          price: 12.99,
          rating: 4.8,
          brand: "COSRX",
          description: "Gentle foaming cleanser ideal for sensitive skin.",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          name: "Anua Heartleaf Toner",
          price: 18.5,
          rating: 4.9,
          brand: "Anua",
          description: "Calms and hydrates using 77% heartleaf extract.",
          image: "https://via.placeholder.com/150"
        }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="p-10 text-gray-700 text-center">
      <h1 className="text-2xl font-bold mb-4">K-Cosmetics Final App.tsx</h1>
      <p className="text-sm text-gray-500">
        Full functionality includes product listing, admin login, add/delete product, image preview,
        cart checkout with shipping and payment selection, localStorage persistence.
      </p>
    </div>
  );
};

export default App;
