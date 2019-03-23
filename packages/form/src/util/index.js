export const singleton = {};

export function createGroupFormValidateInfo(groupName, callback) {
  if (groupName) {
    // 如果没有分组单例，创建分组单例
    if (!singleton[groupName]) {
      singleton[groupName] = { instances: [], currentScrollTo: Infinity };
    }
    // 添加被分组的form验证信息
    const currentSingleton = singleton[groupName];
    const formId = currentSingleton.instances.length;
    callback(formId);
    const defaultFormValidateInfo = { isValidated: false, formId, groupName };
    currentSingleton.instances.push(defaultFormValidateInfo);
  }
}

export function destroyGroupFormValidateInfo(groupName, formId) {
  if (groupName) {
    const currentSingleton = singleton[groupName];
    currentSingleton.instances = currentSingleton.instances.filter(instance => instance.formId === formId);
  }
}

export function cleanupGroupFormsValidateInfo(groupName, formId) {
  if (groupName) {
    const currentSingleton = singleton[groupName];
    const currentInstance = currentSingleton.instances.find(item => item.formId === formId);
    currentInstance.isValidated = true;
    const isAllFormsValidated = currentSingleton.instances.every(item => item.isValidated);

    if (isAllFormsValidated) {
      const currentSingleton = singleton[groupName];

      currentSingleton.instances.forEach(item => (item.isValidated = false));
      currentSingleton.currentScrollTo = Infinity;
    }
  }
}

export function checkIsShouldScroll(errorElClientSize, userOffset, scrollTo, groupName, scrollFunc) {
  if (groupName) {
    const currentSingleton = singleton[groupName];
    const shouldFormScroll = currentSingleton.currentScrollTo > scrollTo;

    if (shouldFormScroll) {
      currentSingleton.currentScrollTo = scrollTo;
      if (!isErrorElInView(errorElClientSize, userOffset)) {
        scrollFunc();
      }
    }
  } else {
    if (!isErrorElInView(errorElClientSize, userOffset)) {
      scrollFunc();
    }
  }
}

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

  return currentPosition === 'fixed' || !scrollParent ? window : scrollParent;
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

export function isErrorElInView(errorElClientSize, userOffset) {
  const clientTop = errorElClientSize.top + userOffset;
  const clientBottom = clientTop + errorElClientSize.height;
  return clientTop > 0 && clientBottom < window.innerHeight;
}

function getParents(el) {
  let currentEl = el;
  const parents = [];
  while (currentEl.parentNode && currentEl.nodeType !== 9) {
    currentEl = currentEl.parentNode;
    if (currentEl.nodeType === 1) {
      parents.push(currentEl);
    }
  }
  return parents;
}
