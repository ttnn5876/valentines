document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('active');
            }
        });
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    let currentPageIndex = 0;

    function scrollToPage(pageIndex) {
        const targetPage = pages[pageIndex];
        window.scrollTo({
            top: targetPage.offsetTop,
            behavior: 'smooth',
        });
        currentPageIndex = pageIndex;
    }

    const hammer = new Hammer(window);

    hammer.on('swipedown', function () {
        if (currentPageIndex > 0) {
            scrollToPage(currentPageIndex - 1);
        }
    });

    hammer.on('swipeup', function () {
        if (currentPageIndex < pages.length - 1) {
            scrollToPage(currentPageIndex + 1);
        }
    });
});