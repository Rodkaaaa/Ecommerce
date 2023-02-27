import React from "react";
import IMG from "../../images/img01.jpg";

function ProductoItem({
  id,
  title,
  price,
  image,
  category,
  img1,
  img2,
  cantidad,
}) {
  return (
    <div className="producto">
      <a to="#">
        <div className="producto_img">
          <img src={image} alt="" />
        </div>
      </a>
      <div className="producto_footer">
        <h1> {title} </h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="buttom">
        <button className="btn">añadir al carrito</button>
        <diV>
          <a to="" className="btn">
            Vista
          </a>
        </diV>
      </div>
    </div>
  );
}

export { ProductoItem };
