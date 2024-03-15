/* Skills */
const skillsTech = document.querySelector('.skills-tech')

const skills = [
  {
    path: 'img/css.svg',
    name: 'CSS',
  },
  {
    path: 'img/git.svg',
    name: 'Git',
  },
  {
    path: 'img/github.svg',
    name: 'GitHub',
  },
  {
    path: 'img/html.svg',
    name: 'HTML',
  },
  {
    path: 'img/javascript.svg',
    name: 'JavaScript',
  },
  {
    path: 'img/slack.svg',
    name: 'Slack',
  },
  {
    path: 'img/vsc.svg',
    name: 'VS Code',
  },
]

let html = ''

for (const skill of skills) {
  html += `
  <div class='skill'>
    <img src='${skill.path}' alt='${skill.name}'>
    <h3>${skill.name}</h3>
  </div>
`
}

skillsTech.innerHTML = html