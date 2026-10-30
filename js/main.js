import { projects } from "./projects.js";
import { describe, today } from "./format.js";

const list = document.querySelector("#projects");
list.replaceChildren();

for (const project of projects) {
  const item = document.createElement("li");
  const title = document.createElement("h3");
  const note = document.createElement("p");
  title.textContent = describe(project);
  note.textContent = project.note;
  item.append(title, note);
  list.append(item);
}

document.querySelector("#built").textContent = "Page opened on " + today() + ".";
