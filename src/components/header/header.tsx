import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.scss?inline";
import TwitterLogo from "~/components/icons/twitter";
import GithubLogo from "~/components/icons/github";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <a href="#top" class="title">
        tyautyau56.github.io
      </a>
      <ul>
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
    </header>
  );
});
