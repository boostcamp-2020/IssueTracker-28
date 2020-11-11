export const uncheckAllFilters = (parentNode) => {
  const parent = parentNode ? parentNode : document;
  const checkIcons = parent.querySelectorAll('.check-icon');
  checkIcons.forEach((checkIcon) => {
    if (checkIcon.classList.contains('show')) checkIcon.classList.remove('show');
  });
};
