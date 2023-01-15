import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skillItem.scss?inline";
import type { Skill } from "~/model/Skill";
import Logo from "~/components/logos/Logo";

interface SkillItemProps {
  skill: Skill;
}

export default component$<SkillItemProps>((props) => {
  useStylesScoped$(styles);
  return (
    <>
      {}
      <Logo lang={props.skill.lang} />
    </>
  );
});
