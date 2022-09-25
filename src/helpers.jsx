export default (function helpers() {
  function autoExpand(element) {
    element.style.height = 0;
    element.style.height = `${element.scrollHeight}px`;
  }

  function uid() {
    return Math.floor(Math.random() * Date.now()).toString(36);
  }

  return { autoExpand, uid };
})();
