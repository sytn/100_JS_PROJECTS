const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(index));
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      let nextIndex = (index + 1) % tabs.length;
      tabs[nextIndex].focus();
      activateTab(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      let prevIndex = (index - 1 + tabs.length) % tabs.length;
      tabs[prevIndex].focus();
      activateTab(prevIndex);
    }
  });
});

function activateTab(index) {
  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));

  tabs[index].classList.add('active');
  contents[index].classList.add('active');
}
