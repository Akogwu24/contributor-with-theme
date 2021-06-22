const icon = document.querySelector('i');
icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    const contributionIcons = document.querySelectorAll('.stat img');
    const themeToggler = document.querySelector('.fa-moon');
    themeToggler.setAttribute('class', 'fas fa-sun');
    themeToggler.style.color = '#fff';
    contributionIcons.forEach((icon) => {
      const iconSource = icon.src.slice(0, -4);
      icon.src = `${iconSource}2.svg`;
    });
  } else {
    const contributionIcons = document.querySelectorAll('.stat img');
    const themeToggler = document.querySelector('.fa-sun');
    themeToggler.setAttribute('class', 'fas fa-moon');
    themeToggler.style.color = '#000';
    contributionIcons.forEach((icon) => {
      const iconSource = icon.src.slice(0, -5);
      icon.src = `${iconSource}.svg`;
    });
  }
});

const numberOfContributors = [1, 2, 3, 4, 5, 6, 7, 8];
const contributor = document.querySelector('.contributor-card');
numberOfContributors?.map((contributors) => {
  console.log(contributors);
  contributor.innerHTML += ` <div class="contributor">
  <div class="avatar-container">
    <img src="assets/avatar.svg" alt="contributor-avater" />
  </div>
  <div class="avatar-info">
    <h1>Elon Musk</h1>
    <p>@musketeer</p>
    <div class="stat">
      <div class="contributions-count">
        <img src="assets/flowchart.svg" />
        <p><strong>99</strong>Contributions</p>
      </div>
      <div class="contributions-count">
        <img src="assets/bookmark.svg" />
        <p><strong>42</strong>repositories</p>
      </div>
      <div class="contributions-count">
        <img src="assets/user.svg" />
        <p><strong>126</strong>follower</p>
      </div>
      <div class="contributions-count">
        <img src="assets/msg.svg" />
        <p><strong>217</strong>gists</p>
      </div>
    </div>
  </div>
`;
});
