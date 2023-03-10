import {
  component$,
  useStylesScoped$,
  useResource$,
  Resource,
} from "@builder.io/qwik";
import axios from "axios";
import type { Event } from "~/model/Event";
import type { Action } from "~/model/Action";
import styles from "./activitiyList.scss?inline";
import ActivityItem from "~/components/activityitem/activityItem";

export default component$(() => {
  useStylesScoped$(styles);
  const actionResource = useResource$<Action[]>(() => {
    return getActivities();
  });

  return (
    <div>
      <Resource
        value={actionResource}
        onPending={() => <>Loading</>}
        onRejected={(error) => <>&#x1F647;Error: {error.message}</>}
        onResolved={(actions: Action[]) => (
          <ul>
            {actions.map((e, index) => (
              <ActivityItem key={index} action={e} />
            ))}
          </ul>
        )}
      />
    </div>
  );
});

export const getActivities = async (): Promise<Action[]> => {
  const API_URL = "https://portfolio-api-gryf.onrender.com/event";
  const res = await axios.get(API_URL);
  return Array.isArray(res.data)
    ? res.data.map((event: Event): Action => {
        return {
          type: event.type,
          repo: event.repo.name,
          created_at: event.created_at,
        };
      })
    : Promise.reject(res.data);
};
