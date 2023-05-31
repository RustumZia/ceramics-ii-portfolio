const allProjects = [
    {
        code: "dragon",
        name: "Dragon Eye",
        headerImage: "images/dragon_eye_finished_01.jpg",
        reflection: `
      This project reinforced some basic concepts such as the importance of keeping the width of clay consistent and proper slip and scoring.
        I also learned how much value texture adds to a peace.
        My red glaze came out rather messy, which has a peculiar bleeding effect.
        I learned to keep glazing as simple as possible.
        If I had to make a new eye I would probably glaze it all a single color, or two layered colors.
        `,
    },
    {
        code: "mug",
        name: "Face Mug",
        headerImage: "images/face_mug_finished_front.jpg",
    },
    {
        code: "canopic",
        name: "Canopic Jar",
        headerImage: "images/canopic_jar_wet_assembled_2.jpg",
    },
    {
        code: "lamp",
        name: "Luminary",
        headerImage: "images/lamp_hood_cut_1.jpg",
    },
];

const headers = document.getElementById("headers");

const pulloutPadding = 20;

function pullOut(content) {
    content.hidden = false;
    const container = content.parentNode;
    const img = container.querySelector("img");
    currentHeight = container.getBoundingClientRect().height;
    let height = img.clientHeight;
    container.style.height = height + "px";
    content._visible = !content._visible;
    if (content._visible) {
        height += content.clientHeight + pulloutPadding;
    }
    setTimeout(() => {
        container.style.height = height + "px";
    }, 0);
}

for (project of allProjects) {
    const elem = document.createElement("div");
    const contentId = project.code + "Content";
    elem.innerHTML = `
    <div class="pull-out">
      <div class="heading" onclick="pullOut(${contentId})">
        <img src="${project.headerImage}" width=100%>
        <div class="centered-text">${project.name}</div>
      </div>
      <div id="${contentId}" class="content" hidden=true _visible=false>
        ${project.reflection}
      </div>
    </div>
    `;
    elem.children[0].style.padding = pulloutPadding + "px";
    headers.appendChild(elem);
}
