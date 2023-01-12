import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <div class="wrap">
          <Slot />
        </div>
      </main>
      <footer>
        <p>&copy; 2023 tyautyau56</p>
      </footer>
    </>
  );
});
