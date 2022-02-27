import React, { Children, FC, useState, PointerEvent, useRef } from "react";
import "./layout.scss";

const LEFT_INDEX = 0;
const RIGHT_INDEX = 1;

const fixCursor = (disabled: boolean) => {
  const { body } = document;
  body.style.cursor = disabled ? "ew-resize" : "";
};

const preventDefault = <T extends globalThis.Event>(event: T) => {
  event.preventDefault();
};

export const Layout: FC = ({ children }) => {
  const [width, setWidth] = useState<number | string>("50%");
  const resizeContainer = useRef<HTMLDivElement>(null);
  const kids = Children.toArray(children);

  const handleResize = (event: globalThis.PointerEvent) => {
    preventDefault(event);
    setWidth(event.x);
  };

  const stopResize = (event: globalThis.PointerEvent) => {
    resizeContainer.current?.releasePointerCapture(event.pointerId);
    fixCursor(false);
    window.removeEventListener("pointermove", handleResize);
    window.removeEventListener("pointerup", stopResize);
  };

  const handleStartResize = (event: PointerEvent<HTMLDivElement>) => {
    if (!resizeContainer.current) return;
    fixCursor(true);
    resizeContainer.current.setPointerCapture(event.pointerId);
    window.addEventListener("pointermove", handleResize);
    window.addEventListener("pointerup", stopResize);
  };

  return (
    <div className="layout">
      <div
        ref={resizeContainer}
        className="layout-element layout-element__left"
        style={{ width, minWidth: width, maxWidth: width }}>
        {kids[LEFT_INDEX]}
        <div className="layout-element__resizer" onPointerDown={handleStartResize} />
      </div>
      <div className="layout-element layout-element__right">{kids[RIGHT_INDEX]}</div>
    </div>
  );
};
