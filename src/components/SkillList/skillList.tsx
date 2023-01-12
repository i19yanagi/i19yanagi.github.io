import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skillList.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return <article></article>;
});
