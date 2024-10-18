"use client"
import imgPng from "../_assets/png-cart/bag-png-33922.png";
import { Rating } from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
const ProductCart = (props: { sale?: number | string; newItem?: boolean; listColor?: any; rating?: any; price: number | string; salePrice?: number | string; reviewCount?: number | undefined; name: string | undefined; imgSrc?: any; }) => {
  const { sale,
    newItem,
    listColor,
    rating,
    price = "160",
    salePrice = "120",
    reviewCount = 55,
    name = "HAVIT HV-G92 Gamepad",
    imgSrc } = props
  const [colorPicked, setColorPicked] = useState(listColor ? listColor[0] : "");
  const handleColorPicked = (color: any) => {
    setColorPicked(color);
  };
  return (
    <div className="cart-item-container mx-auto bg-white rounded max-w-64 min-h-[420px] flex gap-1 flex-col relative">
      <div className="img-container relative w-fit rounded bg-white overflow-hidden group">
        <img src={imgSrc ? imgSrc : "https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg"} alt="product-image" className="size-[260px] object-cover"></img>
        {newItem && <div className="new-item item-tag absolute text-white rounded text-center w-fit py-[4px] px-2 top-2 left-2 bg-green-500">New</div>}
        {sale && <div className="sale-item item-tag absolute text-white rounded text-center w-fit py-[4px] px-2 top-2 left-2 bg-red-500">{sale}%</div>}
        <div className="add-to-card-text absolute bottom-[-60px] right-0 left-0 h-auto text-center p-2 text-white bg-black text-xl font-normal cursor-pointer group-hover:-translate-y-[60px] duration-200 hover:bg-slate-800">Add to card</div>
        <div className="product-icon-container flex flex-col gap-2 top-1 right-1 absolute">
          <div className="product-icon flex items-center justify-center size-7 rounded-full bg-slate-200 cursor-pointer favorite-icon  hover:bg-slate-400">
            <MdFavoriteBorder />
          </div>
          <div className="product-icon flex items-center justify-center size-7 rounded-full bg-slate-200 cursor-pointer eye-icon hover:bg-slate-400">
            <IoEyeOutline />
          </div>
        </div>
      </div>
      <div className="item-name w-full font-medium text-xl overflow-hidden inline-block text-ellipsis whitespace-nowrap cursor-pointer">{name}</div>
      {sale && (
        <div className="price-container flex flex-row font-medium">
          <div className="sale-price text-red-600">{salePrice}$</div>
          <div className="price ml-1 line-through text-slate-500">{price}$</div>
        </div>
      )}
      {sale && (
        <div className="review flex flex-row items-start">
          {rating && (
            <>
              <div className="review-star">
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="review-number ml-3 font-medium text-slate-500">({reviewCount})</div>
            </>
          )}
        </div>
      )}
      {!sale && (
        <div className="not-on-sale">
          <div className="price-and-stars d-flex flex-row">
            <div className="price">{price}$</div>
            {rating && (
              <>
                <div className="review-star ml-1">
                  <Rating
                    name="half-rating-read"
                    defaultValue={rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="review-number">({reviewCount})</div>
              </>
            )}
          </div>
        </div>
      )}
      {listColor && (
        <div className="d-flex flex-row gap-2 color-picker-container align-item-center min-h-4 p-0">
          {listColor.map((color: any, index: number) => {
            return (
              <div
                className={`color-pick color-${index + 1} size-[20px] bg-red-500 rounded-full cursor-pointer`}
                key={`color-picker-${index + 1}`}
                style={{ backgroundColor: `${color}` }}
                onClick={() => handleColorPicked(color)}
              >
                {colorPicked === color && (
                  <div className="border-color-picked d-flex justify-content-center align-item-center size-full rounded-full border-solid border-black border-2 z-20">
                    <div className="size-full rounded-full border-solid border-white border-2 z-10 "></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductCart;
