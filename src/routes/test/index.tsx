import { component$ } from "@builder.io/qwik";
import { AppLink } from "~/routes.config";

export default component$(() => {
  return (
    <>
      <AppLink route="/"> {"<-"} home page</AppLink>
    </>
  );
});
