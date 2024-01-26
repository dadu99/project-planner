class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }
  connectMoreInfoButton() {}
  connectSwitchButton() {
    const projectItemElement = document.getAnimations(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log("projects =>", this.projects);
  }

  addProject() {}
  switchProject(projectId) {
    const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(projectIndex, 1);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

App.init();
