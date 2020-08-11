import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [loop, setLoop] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const text = ["Welcome,", "My name is", "Sirati Hirunthani."];

  useEffect(() => {
    const typingTime = 150;
    const deletingTime = 50;
    const delay = 1000;

    setTimeout(
      () => {
        if (!isDelete && index < text[loop].length)
          setIndex((index) => index + 1);
        else if (isDelete && index > 0) setIndex((index) => index - 1);
      },
      isDelete ? deletingTime : typingTime
    );

    if (index == text[loop].length - 1 && !isDelete) {
      setTimeout(() => {
        setIsDelete(!isDelete);
      }, delay);
    } else if (index == 0 && isDelete) {
      setIsDelete(!isDelete);

      if (loop >= text.length - 1) setLoop(0);
      else setLoop(loop + 1);
    }
  }, [loop, index, isDelete]);

  return (
    <div>
      <header className="header masthead" id="header">
        <div className="container d-flex align-items-center flex-column">
          <div className="masthead-avatar img-logo"></div>
          <h1 className="text-white font-size-res typed-res top">
            printf("{text[loop].substr(0, index)}");
          </h1>
        </div>
      </header>
    </div>
  );
}
