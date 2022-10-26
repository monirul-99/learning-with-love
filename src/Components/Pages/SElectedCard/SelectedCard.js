import React from "react";

const SelectedCard = ({ selectItems }) => {
  const { title, price } = selectItems;
  return (
    <>
      <aside className="grid col-span-4  justify-start" data-aos="zoom-in-left">
        <h3 className="lg:text-[17px] text-sm ">{title}</h3>
      </aside>

      <aside className="grid col-span-3 justify-end" data-aos="zoom-in-left">
        <p className="lg:text-[17px] text-sm">{price}</p>
      </aside>
    </>
  );
};

export default SelectedCard;
