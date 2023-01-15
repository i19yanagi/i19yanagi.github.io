import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import ActivityList from "~/components/activitylist/activityList";
import GithubLogo from "~/components/icons/github";
import TwitterLogo from "~/components/icons/twitter";
import SkillList from "~/components/skillList/skillList";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <section class="introduce">
        <h1>tyautyau56</h1>
        <ul class="icons">
          <li>
            <a href="https://github.com/i19yanagi" target="_blank">
              <GithubLogo />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tyautyau56" target="_blank">
              <TwitterLogo />
            </a>
          </li>
        </ul>
        <ul class="introduce_list">
          <li>19歳</li>
          <li>徳山高専 4年</li>
        </ul>
      </section>

      <section class="skill">
        <h2>Skills</h2>
        <SkillList />
      </section>

      <section class="activity">
        <h2>Activity</h2>
        <ActivityList />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "tyautyau56",
  meta: [
    {
      name: "description",
      content: "tyautyau56's portfolio",
    },
  ],
  links: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400&display=swap",
      rel: "stylesheet",
    },
  ],
};
