import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skillItem.scss?inline";

interface SkillItemProps {
  lang: string;
  percent: string;
}

export default component$((props: SkillItemProps) => {
  useStylesScoped$(styles);

  return (
    <>
      <li>{props.lang}</li>
    </>
  );
});
