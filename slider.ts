const sliders = (slides, dir: string, prev, next) => {
  let slideIndex = 1;

  const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);
  const prevBtn: HTMLElement = document.querySelector(prev);
  const nextBtn: HTMLElement = document.querySelector(next);

  const showSlides = (n: number) => {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    //Показываем тот слайдер которые нужны и скрываем не нужные

    items.forEach((item: HTMLElement) => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = "block";
  };
  showSlides(slideIndex);

  const plusSlides = (n: number) => {
    showSlides((slideIndex += n));
  };

  try {
    const prevBtn: HTMLElement = document.querySelector(prev);
    const nextBtn: HTMLElement = document.querySelector(next);
    prevBtn.addEventListener("click", () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e: any) {}
};

export default sliders;
