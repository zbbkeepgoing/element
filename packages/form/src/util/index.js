export function getScrollableAncestor(el) {
  const currentPosition = window.getComputedStyle(el, null).position;
  const excludeStaticParent = currentPosition === 'absolute';
  const overflowRegex = /(auto|scroll)/;
  const parents = getParents(el);
  const scrollParent = parents.find(parent => {
    const parentStyle = window.getComputedStyle(parent, null);
    const parentPosition = parentStyle.position;

    if (excludeStaticParent && parentPosition === 'static') {
      return false;
    }
    return overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX);
  });

  return currentPosition === 'fixed' || !scrollParent ? (el.ownerDocument || document) : scrollParent;
}

export function animationScroll(scrollEl, scrollTo = 0, duration = 1000, speed = 10) {
  let loopCount = 0;
  let totalLoopCount = duration / speed;
  let currentScrollTo = scrollEl.scrollTop;
  let step = (scrollTo - currentScrollTo) / totalLoopCount;
  let timer = null;

  timer = setInterval(() => {
    scrollEl.scrollTop = (currentScrollTo += step);
    loopCount++;

    if (loopCount > totalLoopCount - 1) {
      clearInterval(timer);
    }
  }, speed);
}

export function isErrorElInView(errorElClientSize) {
  const clientTop = errorElClientSize.top;
  const clientBottom = clientTop + errorElClientSize.height;
  return clientTop > 0 && clientBottom < window.innerHeight;
}

function getParents(el) {
  let currentEl = el;
  const parents = [];
  while (currentEl.parentNode) {
    parents.push(currentEl.parentNode);
    currentEl = currentEl.parentNode;
  }
  return parents;
}
