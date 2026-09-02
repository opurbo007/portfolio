import { useEffect } from "react";

interface Options {
  speed?: number;
  bg?: string;
  accent?: string;
}

export function useAnimatedFavicon(
  name: string,
  pageTitle: string,
  opts: Options = {},
) {
  const { speed = 600, bg = "#0d1b2a", accent = "#5eead4" } = opts;

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d")!;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    let idx = 0;

    const draw = (letter: string) => {
      ctx.clearRect(0, 0, 32, 32);
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.roundRect(0, 0, 32, 32, 5);
      ctx.fill();
      ctx.font = "900 22px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = accent;
      ctx.fillText(letter.toUpperCase(), 16, 18);
      link!.href = canvas.toDataURL();
    };

    const update = () => {
      draw(name[idx]);
      document.title = pageTitle.slice(0, idx + 1);
      idx = (idx + 1) % name.length;
    };

    update();
    const intervalId = setInterval(update, speed);

    return () => {
      clearInterval(intervalId);
      document.title = pageTitle;
    };
  }, [name, pageTitle, speed, bg, accent]);
}