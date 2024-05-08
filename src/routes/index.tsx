import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { AppLink } from "~/routes.config";

export default component$(() => {
  return (
    <>
      <AppLink route="/test/">test page {"->"} </AppLink>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Pos",
  meta: [
    {
      name: "description",
      content: "Qwik Pos is a point of sale system",
    },
  ],
};
