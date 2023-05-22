const modals = () => {
  const bindModal = ({
    triggers: triggerSelector,
    modal: modalSelector,
    close: closeSelector,
    closeClick: closeClickOverlay = true,
  }) => {
    const triggers: NodeListOf<HTMLElement> =
      document.querySelectorAll(triggerSelector);

    const modal: HTMLElement = document.querySelector(modalSelector);
    const close: HTMLElement = document.querySelector(closeSelector);
    const windows: NodeListOf<HTMLElement> =
      document.querySelectorAll("[data-modal]");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        console.log("hello");
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";

        document.body.style.overflow = "hidden";
      });
    });

    const closeModal = (): void => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };

    const closeWindows = (): void => {
      windows.forEach((window) => {
        window.style.display = "none";
      });
    };

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeWindows();
        closeModal();
      }
    });
    close.addEventListener("click", () => {
      closeModal();
      closeWindows();
    });

    document.addEventListener("keypress", (e) => {
      if (e.code.toLowerCase() === "escape") {
        closeModal();
      }
    });
    const showModalByTime = (selector, time: number) => {
      setTimeout(() => {
        let display;

        document.querySelectorAll("[data-modal").forEach((item) => {
          if (getComputedStyle(item).display != "none") {
            display = "block";
          }
        });

        if (!display) {
          document.querySelector(selector).style.display = "block";
          document.body.style.overflow = "hidden";
        }
      }, time);
    };
    showModalByTime(".popup-consultation", 60000);
  };

  bindModal({
    triggers: ".button-design",
    modal: ".popup-design",
    close: ".popup-design .popup-close",
  });
  bindModal({
    triggers: ".button-consultation",
    modal: ".popup-consultation",
    close: ".popup-consultation .popup-close",
  });
};
