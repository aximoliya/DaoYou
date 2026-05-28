/**
 * 道友攻略站 · 品质筛选模块
 */

export interface TierFilter {
  bar: HTMLElement | null;
  activeTier: string;
}

let tierFilter: TierFilter = {
  bar: null,
  activeTier: 'all'
};

function getSections(): NodeListOf<HTMLElement> {
  return document.querySelectorAll('section');
}

function doSearch(): void {
  // 触发搜索更新
  const event = new CustomEvent('tier-filter-change', { detail: { tier: tierFilter.activeTier } });
  document.dispatchEvent(event);
}

export function initTierFilter(onFilterChange?: (tier: string) => void): void {
  const tierBar = document.getElementById('tier-bar');
  tierFilter.bar = tierBar;

  if (!tierBar) return;

  tierBar.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.tier-btn') as HTMLElement;
    if (!btn) return;
    
    const tier = btn.dataset.tier;
    if (!tier) return;

    tierBar.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tierFilter.activeTier = tier;

    const sections = getSections();
    sections.forEach(s => {
      const tiers = s.dataset.tiers;
      if (tier === 'all' || !tiers || tiers.split(' ').includes(tier)) {
        s.classList.remove('tier-hidden');
      } else {
        s.classList.add('tier-hidden');
      }
    });

    // 广播变化事件
    document.dispatchEvent(new CustomEvent('tier-changed', { detail: { tier } }));
    
    if (onFilterChange) {
      onFilterChange(tier);
    }
  });
}

export function getActiveTier(): string {
  return tierFilter.activeTier;
}