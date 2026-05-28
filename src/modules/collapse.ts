/**
 * 道友攻略站 · 智能折叠模块
 */

export function initCollapse(): void {
  document.querySelectorAll('.flow').forEach(flow => {
    if ((flow as HTMLElement).closest('.collapse-body')) return;
    
    const steps = flow.querySelectorAll('.step');
    if (steps.length <= 3) return;

    const first3 = Array.from(steps).slice(0, 3).map(s => s.textContent).join(' → ');

    const toggle = document.createElement('span');
    toggle.className = 'collapse-toggle';
    toggle.innerHTML = '展开 <span class="icon-chevron">▶</span>';
    toggle.title = '点击展开/收起';

    const summary = document.createElement('span');
    summary.className = 'collapse-summary';
    summary.textContent = first3 + ' …';
    summary.title = '点击展开完整路线';

    const body = document.createElement('div');
    body.className = 'collapse-body';

    const allSteps = Array.from(flow.querySelectorAll('.step'));
    const allArrows = Array.from(flow.querySelectorAll('.arrow'));

    allSteps.slice(3).forEach(s => body.appendChild(s));
    allArrows.slice(2).forEach(a => body.appendChild(a));

    const lastArrow = flow.querySelector('.arrow:last-child');
    if (lastArrow) lastArrow.remove();

    function clickToggle(): void {
      body.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.innerHTML = body.classList.contains('open')
        ? '收起 <span class="icon-chevron">▶</span>'
        : '展开 <span class="icon-chevron">▶</span>';
    }

    toggle.addEventListener('click', clickToggle);
    summary.addEventListener('click', clickToggle);

    flow.parentElement?.insertBefore(toggle, flow.nextSibling);
    flow.parentElement?.insertBefore(summary, toggle);
    flow.parentElement?.insertBefore(body, toggle.nextSibling);
  });
}