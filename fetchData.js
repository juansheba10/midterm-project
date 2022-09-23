const fetchData = "https://jsonplaceholder.typicode.com/posts/?_limit=3";

async function getData() {
  await fetch(fetchData)
    .then((data) => data.json())
    .then((cleanData) => {
      let rawData = "";
      cleanData.forEach((post) => {
        rawData += `
            <div class="card" style="width: 20rem">
                <img src="/project-assets/projects-section/${
                  post.id
                }.jpg" class="card-img-top" alt="projects-3" />
                <div class="card-body bg-white">
                    <h5 class="card-title bg-white">${post.title.slice(
                      0,
                      15
                    )}</h5>
                    <p class="card-text bg-white">
                        ${post.body.slice(0, 12)}
                    </p>
                    <a href="" class="btn text-primary">Learn More</a>
                </div>
            </div>
              `;
      });
      document.querySelector(".card-deck").innerHTML = rawData;
    })
    .catch((error) => {
      console.log(error);
    });
}

getData();

const projectRawData = "https://jsonplaceholder.typicode.com/posts/?_limit=1";

async function projectData() {
  await fetch(projectRawData)
    .then((data) => data.json())
    .then((cleanData) => {
      let rawData = "";
      cleanData.forEach((post) => {
        rawData += `
      <h1 class="project-heading">${post.title.slice(0, 15)} </h1>
      <div class="project-type">
        <div class="project-page-type">${post.body.slice(0, 15)}</div>
        <div class="project-date">
          <div class="project-completed"> Completed on</div>
          <div class="project-date">2/2/22

          </div>
        </div>
      </div>
    </div>
    <div class="project-image-contain">
      <img class="project-image" src="/project-assets/projects-section/${
        post.id
      }.jpg" alt=""
        sizes="(max-width: 479px)88vw (max-width 767px) 92vw, 94vw">
      <img src="/project-assets/projects-section/1.jpg" alt="" class="project-image-effect"
        sizes="(max-width: 479px)88vw (max-width 767px) 92vw, 94vw">

    </div>
    <div class=" project-detail">
      <p>${post.body}. ${post.body}. ${post.body}.</p>
    </div>
  </div>
  </div>
        `;
      });
      document.querySelector(".section-project").innerHTML = rawData;
    })
    .catch((error) => {
      console.log(error);
    });
}

projectData();
