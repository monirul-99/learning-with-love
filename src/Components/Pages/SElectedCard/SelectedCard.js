import React from "react";

const SelectedCard = ({ selectItems }) => {
  const { title, price } = selectItems;
  return (
    <>
      <aside className="grid col-span-4 justify-start" data-aos="zoom-in-left">
        <h3 className="text-[16px]">{title}</h3>
      </aside>

      <aside className="grid col-span-3 justify-end" data-aos="zoom-in-left">
        <p className="text-[17px]">{price}</p>
      </aside>
    </>
  );
};

export default SelectedCard;
