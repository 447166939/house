import { useEffect } from "react";

type EventHandler = (event: MouseEvent | TouchEvent) => void;

export function useClickOutside(ref: React.RefObject<HTMLElement>, handler: EventHandler,ref1?:React.RefObject<HTMLElement>) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      if(ref1){
        if(!ref1.current || ref1.current.contains(event.target as Node)){
          return;
        }
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
