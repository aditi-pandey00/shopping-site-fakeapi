import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage() {
  const query = useQuery().get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      });
  }, [query]);

  return (
    <div className="home-container">
      <h2>Search Results for "{query}"</h2>
      <div className="product-grid">
        {results.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}