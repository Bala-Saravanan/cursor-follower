import { useEffect, useRef } from "react";
import "./index.css";

export default function CursorFollower({ children }) {
  const cursorDot = useRef(null);
  const cursorRound = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", function (event) {
      const posX = event.clientX;
      const posY = event.clientY;

      if (cursorDot.current) {
        cursorDot.current.style.left = `${posX}px`;
        cursorDot.current.style.top = `${posY}px`;
      }
      if (cursorRound.current) {
        cursorRound.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    });
  }, []);

  return (
    <div>
      <div
        className="cursorDot"
        ref={cursorDot}
        style={{
          // transform: "translate(-50%, -50%)",
          width: "5px",
          height: "5px",
          backgroundColor: "white",
        }}
      ></div>
      <div
        className="cursorRound"
        ref={cursorRound}
        style={{
          width: "30px",
          height: "30px",
          border: "1px solid white",
        }}
      ></div>
      <div>{children}</div>
    </div>
  );
}
