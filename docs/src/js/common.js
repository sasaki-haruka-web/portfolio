/*--- ハンバーガーメニュー開閉 ---*/
document.querySelector('.p-header--sp .p-header__btn').addEventListener('click', function(){
  document.querySelector('.p-header--sp').classList.toggle('is-active');
});
$('.p-header--sp .p-header__list-link').on('click', function(event) {
  $('.p-header--sp .p-header__btn').trigger('click');
});
$('.p-header--sp .p-header__contact').on('click', function(event) {
  $('.p-header--sp .p-header__btn').trigger('click');
});

/*--- ページ内リンクスムーススクロール ---*/
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});