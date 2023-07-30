document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.nav__list');
    const burger = document.querySelector('.nav__burger');
    const navbar = document.querySelector('.nav');
    const row = document.querySelector('.row');
    const myKey = '6a5d12bfbd1c41b380511b0dcafb626f';

    // MODAL UCHUN FUNKSIYA
    burger.addEventListener('click', () => {
        navList.classList.toggle('nav__list1');
        // navbar.classList.toggle('navbar')
    });

    // API FETCH QILISH UCHUN FUNKSIYA
    const url = `https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts`;
    // console.log(url);

    const loader_container = document.querySelector('.loader-container');
    const loader = document.createElement('div');
    loader.classList = 'loader';
    loader_container.appendChild(loader);

    async function ascFun() {
        const res = await fetch(url);
        const data = await res.json();
        try {
            // Sort the data array based on the creation date in descending order
            data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

            // Render only the last four posts
            const lastFourPosts = data.slice(0, 3);
            lastFourPosts.forEach((post) => {
                const card1 = document.createElement('div');
                const img1 = document.createElement('img');
                const card1Body = document.createElement('div');
                const bodyTitle = document.createElement('h3');
                const bodtText = document.createElement('p');
                card1.classList.add('card', 'border-0',);
                card1Body.classList.add('card-body');
                img1.src = post.img;
                img1.alt = post.title;
                bodyTitle.textContent = post.title;
                bodtText.textContent = post.body;
                card1Body.append(bodyTitle, bodtText);
                card1.append(img1, card1Body);
                row.appendChild(card1);
            });
        } catch (error) {
            console.log(error);
        } finally {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader_container.remove();
            }
        }
    }

    ascFun();
});
