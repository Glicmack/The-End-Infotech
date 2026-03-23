const API_URL = 'https://redstone-backend.redstone.in.ua/en/wp-json/redstone/v1/blog-posts';

let currentPage = 1;
let currentCategory = '';
let maxPages = 1;

document.addEventListener('DOMContentLoaded', function() {
    detectCurrentCategory();
    initFromDOM();
    initPagination();
    initVisibleArchiveProject();
});

function detectCurrentCategory() {
    const activeCategory = document.querySelector('.sub-links li.is-active');
    if (activeCategory) {
        const slug = activeCategory.getAttribute('data-slug');
        currentCategory = slug || '';
    } else {
        currentCategory = '';
    }
}

function initVisibleArchiveProject() {
    const archiveSection = document.querySelector('.archive_page');
    if (!archiveSection) return;

    const links = document.querySelectorAll('.sub-links ul li a');
    const cards = document.querySelectorAll('.project-card');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            links.forEach(l => l.parentElement.classList.remove('is-active'));
            this.parentElement.classList.add('is-active');

            const slug = this.dataset.slug;
            if (!slug || slug === '*') {
                cards.forEach(card => {
                    card.style.display = '';
                });
            } else {
                cards.forEach(card => {
                    if (card.classList.contains(slug)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
}

// function initFromDOM() {
//     const activePage = document.querySelector('.pagination li.is-active a');
//     if (activePage) {
//         currentPage = parseInt(activePage.textContent);
//     }

//     const allPages = document.querySelectorAll('.pagination ul li:not(.dots) a');
//     if (allPages.length > 0) {
//         const lastPage = allPages[allPages.length - 1];
//         maxPages = parseInt(lastPage.textContent);
//     }

//     const activeCategory = document.querySelector('.sub-links li.is-active');
//     if (activeCategory) {
//         const slug = activeCategory.getAttribute('data-slug');
//         currentCategory = slug || '';
//     } else {
//         currentCategory = '';
//     }
// }

function initFromDOM() {
    const activePage = document.querySelector('.pagination li.is-active a');
    if (activePage) {
        currentPage = parseInt(activePage.textContent);
    }

    const allPages = document.querySelectorAll('.pagination ul li:not(.dots) a');
    if (allPages.length > 0) {
        const lastPage = allPages[allPages.length - 1];
        maxPages = parseInt(lastPage.textContent);
    } else {
        maxPages = 1;
    }
}




function initPagination() {
    const paginationContainer = document.querySelector('.pagination');
    if (paginationContainer) {
        paginationContainer.addEventListener('click', function(e) {
            if (!currentCategory) return;

            const target = e.target.closest('a');
            if (!target || target.classList.contains('disabled')) return;

            const isArrow = target.classList.contains('pag-arrow');
            const pageParent = target.closest('li');
            const isPage = pageParent && pageParent.tagName === 'LI' && !pageParent.classList.contains('dots');

            if (!isArrow && !isPage) return;

            e.preventDefault();
            if (isArrow) {
                handleArrowClick(target);
            } else if (isPage) {
                handlePageClick(target);
            }
        });
    }

    const showMoreBtn = document.querySelector('.load_more_news');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const maxPages = getMaxPages();
            if (currentPage < maxPages) {
                currentPage++;
                loadPosts(currentPage, currentCategory, true);
            }
        });
    }
}

function getMaxPages() {
    const lastPageLink = document.querySelector('.pagination ul li:last-child a');
    return lastPageLink ? parseInt(lastPageLink.textContent) : 1;
}

// Arrow click
// function handleArrowClick(arrow) {
//     const isFirstArrow = arrow === arrow.parentElement.querySelector('.pag-arrow:first-child');

//     if (isFirstArrow) {
//         if (currentPage > 1) {
//             currentPage--;
//             checkClickCurrentPage(currentPage);
//             loadPosts(currentPage, currentCategory);
//         }

//     } else {
//         if (currentPage < maxPages) {
//             currentPage++;
//             checkClickCurrentPage(currentPage);
//             loadPosts(currentPage, currentCategory);
//         }
//     }
// }

// Pagination click
// function handlePageClick(link) {
//     const pageNumber = parseInt(link.textContent);

//     if (!isNaN(pageNumber) && pageNumber !== currentPage) {
//         currentPage = pageNumber;
//         // console.log(currentPage);
//         checkClickCurrentPage(currentPage);
//         loadPosts(currentPage, currentCategory);
//     }
// }

// Check click
// function checkClickCurrentPage(currentPage) {
//     if (currentPage > 1 && document.querySelector('.load_more_news')) {
//         document.querySelector(".load_more_news").style.opacity = 0
//     } else if (document.querySelector('.load_more_news')) {
//         document.querySelector(".load_more_news").style.opacity = 1
//     }
// }

function handleArrowClick(arrow) {
    const isPrev = arrow.classList.contains('pag-arrow-prev');
    const lastPage = maxPages || getMaxPages();

    if (isPrev && currentPage > 1) {
        currentPage--;
        checkClickCurrentPage(currentPage);
        loadPosts(currentPage, currentCategory);
    } else if (!isPrev && currentPage < lastPage) {
        currentPage++;
        checkClickCurrentPage(currentPage);
        loadPosts(currentPage, currentCategory);
    }
}

function handlePageClick(link) {
    const pageNumber = parseInt(link.textContent);

    if (!isNaN(pageNumber) && pageNumber !== currentPage) {
        currentPage = pageNumber;
        checkClickCurrentPage(currentPage);
        loadPosts(currentPage, currentCategory);
    }
}

function checkClickCurrentPage(page) {
    const loadMoreBtn = document.querySelector('.load_more_news');
    if (!loadMoreBtn) return;

    if (page > 1) {
        loadMoreBtn.style.opacity = 0;
    } else {
        loadMoreBtn.style.opacity = 1;
    }
}

// Load posts
async function loadPosts(page, category = '', appendMode = false) {
    try {
        const params = new URLSearchParams({
            page: page,
            per_page: 1
        });

        if (category) {
            params.append('category', category);
        }

        const url = `${API_URL}?${params.toString()}`;
        const response = await fetch(url);

        console.log(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        updateContent(data.html, appendMode);
        updatePagination(data.pagination);
        updateURL(page, category);

        if (!appendMode) {
            scrollToContent();
        }
    } catch (error) {
        console.log(error);
        // console.error('Помилка завантаження постів:', error);
        hideLoader();
        showError('Не вдалося завантажити пости. Спробуйте пізніше.');
    }
}

//  hideLoader 
function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

// Update content
function updateContent(html, appendMode = false) {
    const contentContainer = document.querySelector('.blog-grid');
    if (contentContainer) {
        if (appendMode) {
            contentContainer.insertAdjacentHTML('beforeend', html);
        } else {
            contentContainer.innerHTML = html;
        }
    }
}

// Update pagination
function updatePagination(pagination) {
    const paginationContainer = document.querySelector('.pagination');

    if (paginationContainer) {
        paginationContainer.innerHTML = pagination;
        initFromDOM();
        maxPages = getMaxPages();
    }
}


function scrollToContent() {
    const contentContainer = document.querySelector('.blog-grid');
    if (contentContainer) {
        const offset = 200;
        const elementPosition = contentContainer.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function showError(message) {
    console.log(message);
}


function updateURL(page, category = '') {
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    if (category) {
        url.searchParams.set('category', category);
    } else {
        url.searchParams.delete('category');
    }
    window.history.pushState({ page: page, category: category }, '', url.toString());
}