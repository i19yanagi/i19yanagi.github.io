import { component$ } from "@builder.io/qwik";
import Html from "~/components/logos/html";
import Css from "~/components/logos/css";
import Sass from "~/components/logos/sass";
import Javascript from "~/components/logos/javascript";
import Typescript from "~/components/logos/typescript";
import ReactIcon from "~/components/logos/react";
import Solid from "~/components/logos/solid";

interface LogoProps {
  lang: string;
}

export default component$<LogoProps>((prop) => {
  switch (prop.lang) {
    case "html":
      return <Html />;
    case "css":
      return <Css />;
    case "scss":
      return <Sass />;
    case "javascript":
      return <Javascript />;
    case "typescript":
      return <Typescript />;
    case "react":
      return <ReactIcon />;
    case "solid":
      return <Solid />;
    default:
      return <>Error no such icon</>;
  }
});
