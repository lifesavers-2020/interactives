import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { SignStore } from "../stores/SignStore";
import { useEventListener } from "../components/Hooks/useEventListener";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";
import { useOnResize } from "../components/Hooks/useOnResize";

import mikeImage from "../assets/imgs/sign-form/i8-3-mike.png";
import pencilImage from "../assets/imgs/shared/pencil.png";

export const SignForm: React.FC = () => {
  const signStore = useContext(SignStore.context());
  const pageStore = useContext(PageStore.context());
  const [signed, setSigned] = useState(() => pageStore.isViewedPage());

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRectRef = useRef<ClientRect | DOMRect | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | undefined>();

  useEffect(() => {
    if (signed) pageStore.pushPageLimit();
  }, [signed, pageStore]);

  useEffect(() => {
    if (!canvasRef.current) return;
    ctxRef.current = canvasRef.current.getContext("2d") || undefined;
    if (!ctxRef.current) return;
  }, [canvasRef]);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    setTimeout(() => {
      if (!canvasRef.current) return;
      canvasRectRef.current = canvasRef.current.getBoundingClientRect();
    }, 700);
  }, [canvasRef]);

  useOnResize(() => {
    if (!canvasRef.current) return;
    canvasRectRef.current = canvasRef.current.getBoundingClientRect();
  }, 200);

  const getCoord = (e: MouseEvent) => {
    let x = 0;
    let y = 0;

    if (!canvasRectRef.current) return { x, y };

    if (window.TouchEvent && e instanceof TouchEvent) {
      x = e.touches[0]?.clientX;
      y = e.touches[0]?.clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    const offsetX =
      canvasRectRef.current.left - document.documentElement.scrollLeft;
    const offsetY =
      canvasRectRef.current.top - document.documentElement.scrollTop;

    x -= offsetX;
    y -= offsetY;

    return { x, y };
  };

  const beginDrawing = (e: MouseEvent) => {
    if (!canvasRef.current || !ctxRef.current) return;
    const { x, y } = getCoord(e);
    signStore.beginDrawing(x, y, ctxRef.current);
  };
  const draw = (e: MouseEvent) => {
    if (!canvasRef.current || !ctxRef.current) return;
    const { x, y } = getCoord(e);
    signStore.draw(x, y, ctxRef.current);
  };
  const endDrawing = (e: MouseEvent) => {
    if (!canvasRef.current || !ctxRef.current) return;
    const { x, y } = getCoord(e);
    signStore.endDrawing(x, y, ctxRef.current);
    setSigned(true);
  };

  useEventListener(canvasRef, "mousedown", beginDrawing);
  useEventListener(canvasRef, "mousemove", draw);
  useEventListener(canvasRef, "mouseup", endDrawing);
  useEventListener(canvasRef, "mouseleave", endDrawing);
  useEventListener(canvasRef, "touchstart", beginDrawing);
  useEventListener(canvasRef, "touchmove", draw);
  useEventListener(canvasRef, "touchend", endDrawing);

  const SignPanel = (
    <div className="relative" style={{ width: 270, height: 120, bottom: -240 }}>
      <canvas
        className="absolute"
        ref={canvasRef}
        width={250}
        height={100}
      ></canvas>
      <img
        className="absolute"
        style={{ right: 0, bottom: 0 }}
        width={50}
        src={pencilImage}
        alt=""
        draggable={false}
      />
    </div>
  );

  const Form = (
    <div
      className="relative w-full flex justify-center"
      style={{ width: 340, height: 400 }}
    >
      <img className="absolute" draggable={false} src={mikeImage} alt="" />
      {SignPanel}
      <p className="text-lg absolute" style={{ top: 210 }}>
        Feel free to draw a little something!
      </p>
    </div>
  );

  const Info = (
    <PopAnimation className="card">
      Step 3: if you match with a patient, we will acquire your consent
      signature before the transplantation.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {Info}
      {Form}
    </div>
  );
};
