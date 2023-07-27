import { useEffect } from "react";

type EventHandler = (event: MouseEvent | TouchEvent) => void;

export function useResize(ref: React.RefObject<HTMLElement>, handler: EventHandler) {
  useEffect(() => {
    console.log('eff')
    const mouseupListener = () => {
      document.removeEventListener("mousemove", handler, false);
    };
    ref.current!.addEventListener("mousedown", (event) => {
      document.addEventListener("mousemove", handler, false);
      document.addEventListener("mouseup", mouseupListener, false);
    });

    return () => {
      document.removeEventListener("mousemove", handler);
      document.removeEventListener("mouseup", mouseupListener);
      ref.current?.removeEventListener("mousedown", handler);
    };
  }, []);
}
