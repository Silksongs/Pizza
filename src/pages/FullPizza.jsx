import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get("https://630e91f337925634187f0c4f.mockapi.io/items/" + id);
        setPizza(data);
      } catch (error) {
        alert("error");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка ... ";
  }

  return (
    <div className="container">
      <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} р</h4>
    </div>
  );
};

export default FullPizza;
