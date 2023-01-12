import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Action } from "~/model/Action";
import styles from "./activityItem.scss?inline";
import dayjs from "dayjs";

interface ActivityProps {
  action: Action;
}
export default component$((props: ActivityProps) => {
  useStylesScoped$(styles);
  return (
    <>
      <p>
        {getJpDate(props.action.created_at)} {getEmoji(props.action.type)}{" "}
        {createMsg(props.action.type)}
      </p>
      <a
        href={`https://github.com/${props.action.repo}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.action.repo}
      </a>
    </>
  );
});

export const getEmoji = (type: string): string => {
  let emoji: string;
  switch (type) {
    case "WatchEvent":
      emoji = String.fromCodePoint(0x2b50);
      break;
    case "PublicEvent":
      emoji = String.fromCodePoint(0x1f60e);
      break;
    case "SponsorshipEvent":
      emoji = String.fromCodePoint(0x1f496);
      break;
    default:
      emoji = String.fromCodePoint(0x2728);
  }
  return emoji;
};

export const createMsg = (type: string): string => {
  let msg: string;
  switch (type) {
    case "WatchEvent":
      msg = "スターをつけました";
      break;
    case "PublicEvent":
      msg = "リポジトリを公開しました";
      break;
    case "SponsorshipEvent":
      msg = "スポンサーが増えました";
      break;
    default:
      msg = "リポジトリを更新しました";
  }
  return msg;
};

export const getJpDate = (time: string): string => {
  const date = dayjs(time).add(9, "h");
  return date.format("YYYY-MM-DD");
};
