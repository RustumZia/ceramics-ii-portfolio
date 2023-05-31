const allProjects = [
    {
        name: "Dragon Eye",
        headerImage: "images/dragon_eye_finished_01.jpg",
    },
    {
        name: "Face Mug",
        headerImage: "images/face_mug_finished_front.jpg",
    },
    {
        name: "Canopic Jar",
        headerImage: "images/canopic_jar_wet_assembled_2.jpg",
    },
    {
        name: "Luminary",
        headerImage: "images/lamp_hood_cut_1.jpg",
    },
];

const headers = document.getElementById("headers");

for (project of allProjects) {
    const elem = document.createElement("div");
    elem.innerHTML = `
    <div class="heading">
      <img src="${project.headerImage}" width=100%>
      <div class="centered-text">${project.name}</div>
    </div>
    `;
    headers.appendChild(elem);
    console.log(elem.outerHTML);
}
