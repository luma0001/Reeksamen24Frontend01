import { url } from "./apiUrl";
import { handleHttpErrors } from "./httpErrors";
import { EventInterface } from "../Interfaces/EventInterface";

async function getEvents(): Promise<Array<EventInterface>> {
  const data = await fetch(`${url}events`).then(handleHttpErrors);
  console.log(data);
  return data;
}

export { getEvents };
