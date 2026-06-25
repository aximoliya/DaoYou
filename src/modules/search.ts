/**
 * 道友攻略站 · 增强搜索模块
 */

interface SearchState {
  search: HTMLInputElement | null;
  searchCount: HTMLElement | null;
  searchPrev: HTMLElement | null;
  searchNext: HTMLElement | null;
  currentHits: HTMLElement[];
  currentHitIdx: number;
}

const state: SearchState = {
  search: null,
  searchCount: null,
  searchPrev: null,
  searchNext: null,
  currentHits: [],
  currentHitIdx: -1
};

function clearHighlights(): void {
  document.querySelectorAll('mark.search-hit').forEach(m => {
    m.replaceWith.apply(m, Array.from(m.childNodes));
  });
}

function highlightTextNodes(el: HTMLElement, q: string): void {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  const textNodes: Text[] = [];
  
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const parent = node.parentElement;
    if (!parent) continue;
    if (parent.tagName === 'MARK' || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') continue;
    textNodes.push(node);
  }

  textNodes.forEach(node => {
    const text = node.textContent || '';
    const lower = text.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx === -1) return;

    const before = text.substring(0, idx);
    const match = text.substring(idx, idx + q.length);
    const after = text.substring(idx + q.length);
    
    const frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode(before));
    const mark = document.createElement('mark');
    mark.className = 'search-hit';
    mark.textContent = match;
    frag.appendChild(mark);
    frag.appendChild(document.createTextNode(after));
    node.parentElement?.replaceChild(frag, node);
  });
}

export function doSearch(): void {
  clearHighlights();
  
  if (!state.search) return;
  
  const q = state.search.value.trim().toLowerCase();
  const sections = document.querySelectorAll<HTMLElement>('section');
  
  if (!q) {
    sections.forEach(s => s.classList.remove('hidden'));
    if (state.searchCount) state.searchCount.classList.remove('visible');
    if (state.searchPrev) state.searchPrev.classList.remove('visible');
    if (state.searchNext) state.searchNext.classList.remove('visible');
    state.currentHits = [];
    state.currentHitIdx = -1;
    return;
  }

  sections.forEach(s => {
    const txt = s.textContent?.toLowerCase() || '';
    s.classList.toggle('hidden', !txt.includes(q));
  });

  const visibleEls = document.querySelectorAll<HTMLElement>(
    'section:not(.hidden) h2, section:not(.hidden) h3, section:not(.hidden) .card,' +
    'section:not(.hidden) p, section:not(.hidden) td, section:not(.hidden) li,' +
    'section:not(.hidden) .flow, section:not(.hidden) .info, section:not(.hidden) .warn,' +
    'section:not(.hidden) .card-title'
  );
  
  state.currentHits = [];
  visibleEls.forEach(el => highlightTextNodes(el, q));

  document.querySelectorAll<HTMLElement>('mark.search-hit').forEach(m => state.currentHits.push(m));
  state.currentHitIdx = state.currentHits.length > 0 ? 0 : -1;

  if (state.currentHits.length > 0) {
    if (state.searchCount) {
      state.searchCount.textContent = (state.currentHitIdx + 1) + '/' + state.currentHits.length;
      state.searchCount.classList.add('visible');
    }
    if (state.searchPrev) state.searchPrev.classList.add('visible');
    if (state.searchNext) state.searchNext.classList.add('visible');
    state.currentHits[0].classList.add('current');
    state.currentHits[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    if (state.searchCount) {
      state.searchCount.textContent = '未找到';
      state.searchCount.classList.add('visible');
      state.searchCount.style.color = 'var(--text-muted)';
    }
    if (state.searchPrev) {
      state.searchPrev.classList.add('visible');
      (state.searchPrev as HTMLButtonElement).disabled = true;
    }
    if (state.searchNext) {
      state.searchNext.classList.add('visible');
      (state.searchNext as HTMLButtonElement).disabled = true;
    }
  }
}

function navigateSearch(dir: 1 | -1): void {
  if (state.currentHits.length === 0) return;
  state.currentHits[state.currentHitIdx].classList.remove('current');
  state.currentHitIdx = (state.currentHitIdx + dir + state.currentHits.length) % state.currentHits.length;
  state.currentHits[state.currentHitIdx].classList.add('current');
  state.currentHits[state.currentHitIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (state.searchCount) {
    state.searchCount.textContent = (state.currentHitIdx + 1) + '/' + state.currentHits.length;
  }
}

export function initSearch(): void {
  state.search = document.getElementById('search') as HTMLInputElement | null;
  state.searchCount = document.getElementById('search-count');
  state.searchPrev = document.getElementById('search-prev');
  state.searchNext = document.getElementById('search-next');

  if (state.search) {
    let timer: ReturnType<typeof setTimeout>;
    state.search.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(doSearch, 200);
    });

    state.search.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        navigateSearch(e.shiftKey ? -1 : 1);
      }
    });
  }

  if (state.searchPrev) {
    state.searchPrev.addEventListener('click', () => navigateSearch(-1));
  }
  if (state.searchNext) {
    state.searchNext.addEventListener('click', () => navigateSearch(1));
  }
}