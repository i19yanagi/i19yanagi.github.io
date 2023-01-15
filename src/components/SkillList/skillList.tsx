import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Skill } from "~/model/Skill";
import skillListStyles from "./skillList.scss?inline";
import SkillItem from "~/components/skillItem/skillItem";

export default component$(() => {
  useStylesScoped$(skillListStyles);
  const frontend_skills: Skill[] = [
    {
      lang: "html",
      comprehension: 85,
    },
    {
      lang: "css",
      comprehension: 80,
    },
    {
      lang: "scss",
      comprehension: 70,
    },
    {
      lang: "javascript",
      comprehension: 80,
    },
    {
      lang: "typescript",
      comprehension: 80,
    },
    {
      lang: "react",
      comprehension: 75,
    },
    {
      lang: "solid",
      comprehension: 75,
    },
  ];
  return (
    <>
      <article>
        <h3>Frontend</h3>
        <div class="wrap">
          {frontend_skills.map((skill, index) => (
            <SkillItem skill={skill} key={index} />
          ))}
        </div>
      </article>
    </>
  );
});
