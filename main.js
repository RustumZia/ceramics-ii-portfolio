const allProjects = [
    {
        code: "dragon",
        name: "Dragon Eye",
        headerImage: "images/dragon_eye_finished_01.jpg",
        reflection: `
      This project reinforced some basic concepts such as the importance of keeping the width of clay consistent and proper slip and scoring.
        I also learned how much value texture adds to a peace.
        I felt comfortable leaving my design fluid and naturally evolving for this piece.
        I learned a good way to keep something feeling whole and united is to take a part already done and replicate it but on another (smaller or larger) scale.
        I learned that when I want a bunch of little pieces in a row (here the scale-like parts curling around the left side of the eye), I should add a single long piece and then cut out spaces.
        My red glaze came out rather messy, and has a peculiar bleeding effect.
        I learned to keep glazing as simple as possible.
        If I had to make a new eye I would probably glaze it all a single color, or two layered colors if I want a nice effect.
        `,
        images: [
            { src: "images/dragon_eye_mood_board.svg",  caption: "inspiration mood board" },
            { src: "images/dragon_eye_bisque.jpg",      caption: "bisque, unglazed" },
            { src: "images/dragon_eye_finished_01.jpg", caption: "finished piece" },
            { src: "images/dragon_eye_finished_02.jpg", caption: "finished piece" },
        ]
    },
    {
        code: "mug",
        name: "Face Mug",
        headerImage: "images/face_mug_finished_front.jpg",
        reflection: `
        My face pot represents the secrets and lies we hold within us. It is meant to look disturbing, gruesome, and protuded. <br>
        I learned how to make a nice, proper, simple handle. It needs to dry in a mold for a bit before it can be attached. And when attaching I simply need to have faith in the slip and score; there's no need to try and give it extra support or blend the ends in or do whatever weird thing I was doing before. <br>
        The challenge with analyzing pieces meant to look crude is of intentionality. Which elements were thoughtfully, meaningfully, intionally placed there, and which are errors mitigated with "I like it that way"? If I were to repeat this process I would make sure to be very thoughtful and intentional about each choice.
        `,
        images: [
            { src: "images/face_mug_throw.jpg",             caption: "mug thrown on wheel" },
            { src: "images/face_mug_wetclay_frontview.jpg", caption: "attachments added" },
            { src: "images/face_mug_wetclay_sideview.jpg",  caption: "leather-hard" },
            { src: "images/face_mug_bisque.jpg",            caption: "left side; bisque" },
            { src: "images/face_mug_bisque_side_2.jpg",     caption: "right side; bisque" },
            { src: "images/face_mug_glazed_1.jpg",          caption: "glazed" },
            //{ src: "images/face_mug_glazed_2.jpg",        caption: "" },
            { src: "images/face_mug_finished_side_1.jpg",   caption: "finished; left side" },
            { src: "images/face_mug_finished_front.jpg",    caption: "finished; front view" },
        ]
    },
    {
        code: "wheel",
        name: "The Wheel",
        headerImage: "images/face_mug_throw.jpg",
        reflection: `
<pre>
O how I ache to dance to you!
To spin, grow, shape earthly food.
Why, we could throw the world anew,
if not each time came vicisitude.
</pre>
        <br>
        I have used the wheel for two projects: the face mug and the companions. 
        `,
    },
    {
        code: "canopic",
        name: "Canopic Jar",
        headerImage: "images/canopic_jar_wet_assembled_2.jpg",
        images: [
            { src: "images/mood_board_canopic_jar.svg",          caption: "mood board", width: 500 },
            { src: "images/canopic_jar_model.jpg",               caption: "proof of concept for build technique" },
            { src: "images/canopic_jar_base_wet_top_wip.jpg",    caption: "building" },
            { src: "images/canopic_jar_base_wet_top.jpg",        caption: "top view" },
            { src: "images/canopic_jar_base_wet_upsidedown.jpg", caption: "upsidedown; attaching bottom" },
            { src: "images/canopic_jar_wet_side.jpg",            caption: "base built" },
            { src: "images/canopic_jar_wet_1.jpg",               caption: "tentacles attached" },
            { src: "images/canopic_jar_wet_lid.jpg",             caption: "lid" },
            //{ src: "images/canopic_jar_wet_assembled_1.jpg",     caption: "assembled" },
            { src: "images/canopic_jar_wet_assembled_2.jpg",     caption: "assembled" },
            { src: "images/canopic_jar_wet_parts.jpg",           caption: "the parts" },
            { src: "images/canopic_jar_bisque_assembled_1.jpg",  caption: "bisque" },
            { src: "images/canopic_jar_glazed.jpg",              caption: "glazed" },
        ],
    },
    {
        code: "lamp",
        name: "Luminary",
        headerImage: "images/lamp_hood_cut_3.jpg",
        images: [
            { src: "images/lamp_first_attempt.jpg", caption: "first attempt lamp" },
            //{ src: "images/lamp_hard_base.jpg", caption: "" },
            { src: "images/lamp_leather_hood.jpg", caption: "lamp, redux" },
            { src: "images/lamp_hood_cut_wip.jpg", caption: "cutting" },
            { src: "images/lamp_hood_cut_wip_1.jpg", caption: "more cutting" },
            { src: "images/lamp_hood_cut_1.jpg", caption: "quite a bit of cutting" },
            { src: "images/lamp_hood_cut_3.jpg", caption: "bisuqe; glazed" },
            { src: "images/lamp_hood_cut_2.jpg", caption: "bisque; glazed" },
        ],
    },
];

const headers = document.getElementById("headers");

const pulloutPadding = 20;
const DEFAULT_WIDTH = 400;

// Only one pulled out at a time
let pulledOut = null;

function pullOut(content) {
    content.hidden = false;
    const container = content.parentNode;
    const img = container.querySelector("img");
    currentHeight = container.getBoundingClientRect().height;
    let height = img.clientHeight;
    container.style.height = height + "px";
    const makeVisible = pulledOut != content;
    //content._visible = !content._visible;
    //const makeVisible = content._visible;

    if (makeVisible) {
        if (pulledOut) pullOut(pulledOut);
        pulledOut = content;
        height += content.clientHeight + pulloutPadding;
    } else {
        pulledOut = null;
    }
    setTimeout(() => {
        container.style.height = height + "px";
    }, 0);
}

function generateImages(project) {
    let code = `<div class="images">`;
    for ({src, caption, width} of project.images ?? []) {
        code += `
        <div style="margin: 1em 0;">
          <img src="${src}" width=${width ?? DEFAULT_WIDTH}>
          <div>${caption}</div>
        </div>`;
    }
    return code + `</div>`;
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

      <div id="${contentId}" class="content" hidden=true>
        ${project.reflection}
        ${generateImages(project)}
      </div>

    </div>
    `;
    elem.children[0].style.padding = pulloutPadding + "px";
    headers.appendChild(elem);
}
