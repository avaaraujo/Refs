import { useEffect } from "react";

// trava o scroll da página enquanto um modal/drawer está aberto — sem isso,
// no mobile o gesto de rolar dentro do modal "vaza" e rola a grid por trás
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
