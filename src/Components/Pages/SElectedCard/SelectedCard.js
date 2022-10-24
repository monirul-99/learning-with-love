import React from "react";

const SelectedCard = ({ selectItems }) => {
  const { title, price } = selectItems;
  return (
    <>
      <aside className="grid col-span-4 justify-start">
        <h3 className="text-[16px]">{title}</h3>
      </aside>
      <aside className="grid col-span-3 justify-end">
        <p className="text-[17px]">{price}</p>
      </aside>
    </>
  );
};

export default SelectedCard;
