export function describe(project) {
  return project.name + " (" + project.year + ")";
}

export function today() {
  return new Date().toLocaleDateString("en", { dateStyle: "long" });
}
