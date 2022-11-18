import React, { useEffect, useState } from "react";

const Button = (props) => {
  const [click, setClick] = useState(0);
  useEffect(() => {
    document.title = `Вы нажали кнопку ${click} раз`;
  });

  console.log(click);
  return (
    <div>
      <button onClick={() => setClick(click + 1)}>{props.text}</button>
      <p>{click}</p>
    </div>
  );
};

Button.defaultProps = {
  text: "button",
};

export default Button;
