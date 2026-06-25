/**
 * 道友攻略站 · 手风琴折叠模块
 */

export function initAccordion(): void {
  // Toggle individual sections
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.parentElement;
      if (!section) return;
      section.classList.toggle('open');
    });
  });

  // Toggle all button
  const toggleAll = document.getElementById('accordion-toggle-all');
  if (toggleAll) {
    toggleAll.addEventListener('click', () => {
      const sections = document.querySelectorAll('.accordion-section');
      const allOpen = Array.from(sections).every(s => s.classList.contains('open'));
      
      sections.forEach(s => {
        if (allOpen) {
          s.classList.remove('open');
        } else {
          s.classList.add('open');
        }
      });
      
      toggleAll.textContent = allOpen ? '📂 展开全部' : '📁 收起全部';
    });
  }
}
