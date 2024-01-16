document.addEventListener("DOMContentLoaded", (event) => {
  (function () {
    const title = config.nameToDisplay + "'s Projects";
    const tableBody = document.getElementsByTagName("tbody")[0];

    if (config.nameToDisplay !== "") {
      document.title = title;
      document.getElementsByTagName("h1")[0].textContent =
        "Index of / " + title;
    } else {
        document.title = "My Projects";
        document.getElementsByTagName("h1")[0].textContent = "Index of /";
    }

    config.projects.forEach((project) => {
      let newRow = tableBody.insertRow();

      let nameCell = newRow.insertCell();
      let sizeCell = newRow.insertCell();
      let dateCell = newRow.insertCell();
      let descCell = newRow.insertCell();

      let anchor = document.createElement("a");
      anchor.textContent = "📂 " + project.projectDirectoryName;
      anchor.href = `./${project.projectDirectoryName}/index.html`;

      // Append the anchor element to the name cell
      nameCell.appendChild(anchor);

      sizeCell.textContent = "-"
      dateCell.textContent = project.projectDate || "-";
      descCell.textContent = project.projectDescription || "-";
    });
  })();
});
