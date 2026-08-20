/* =====================================================
   KONFIGURASI LINK
   GANTI LINK DI BAGIAN INI
===================================================== */

const links = {

    PGDEWA: {
        login: "https://pgdewa-pc.com/",
        daftar: "https:pgdewa-pc.com/register?ref=K3MDOAD0007",
        livechat: "https://app.chaport.com/widget/show.html?appid=6a52ceb24dab3ead5e8f4af5",
        rtp: "https://rtppgdewa.com"
    },

    PGRAJA: {
        login: "https://pgraja-pc.com/",
        daftar: "https://pgraja-pc.com/register?ref=K3MDOAC000J",
        livechat: "https://app.chaport.com/widget/show.html?appid=67c1cbd72bcd7cfe08e52846",
        rtp: "http://rtppgraja.com"
    },

    PGPAUS: {
        login: "https://pgpaus-pc.com/",
        daftar: "https://pgpaus-pc.com/register?ref=K3MDOAE0006",
        livechat: "https://app.chaport.com/widget/show.html?appid=67e273881b69e50d36bf8e1f",
        rtp: "http://rtppgpaus.com/"
    },

    PGKUDA: {
        login: "https://pgkuda.live/",
        daftar: "https://pgkuda.live/register?ref=K3MDOAF0003",
        livechat: "https://app.chaport.com/widget/show.html?appid=67e273c6255b9ae6eae08021",
        rtp: "http://rtppgkuda.com/"
    }

};


/* =====================================================
   HUBUNGKAN TOMBOL DENGAN LINK
===================================================== */

function setupButtons(selector, linkData) {

    const box = document.querySelector(selector);

    if (!box) return;

    const buttons = {

        ".login-btn":
            linkData.login,

        ".daftar-btn":
            linkData.daftar,

        ".livechat-btn":
            linkData.livechat,

        ".rtp-btn":
            linkData.rtp
    };


    Object.entries(buttons).forEach(
        ([buttonSelector, url]) => {

            const button =
                box.querySelector(buttonSelector);

            if (!button) return;

            button.href = url;

            /*
             * Dipakai oleh CSS untuk RGB glitch
             */
            button.setAttribute(
                "data-text",
                button.textContent.trim()
            );

        }
    );
}


/* =====================================================
   AKTIFKAN SEMUA LOGO
===================================================== */

setupButtons(".logo-1", links.PGDEWA);

setupButtons(".logo-2", links.PGRAJA);

setupButtons(".logo-3", links.PGPAUS);

setupButtons(".logo-4", links.PGKUDA);


/* =====================================================
   RANDOM LIGHTNING
===================================================== */

const lightningContainer =
    document.querySelector(
        ".lightning-container"
    );


function createLightning() {

    const lightning =
        document.createElement("div");

    lightning.className = "lightning";

    /*
     * Posisi petir random
     */
    lightning.style.left =
        Math.random() * 100 + "%";


    /*
     * Ukuran random
     */
    lightning.style.transform =
        `scaleX(${0.5 + Math.random()})`;


    lightningContainer.appendChild(
        lightning
    );


    /*
     * Hapus setelah animasi selesai
     */
    setTimeout(() => {

        lightning.remove();

    }, 500);
}


/*
 * Petir muncul secara berkala
 */
setInterval(
    createLightning,
    1200
);


/*
 * Petir pertama
 */
setTimeout(
    createLightning,
    500
);


/* =====================================================
   RANDOM PARTICLES
===================================================== */

const particleContainer =
    document.querySelector(".particles");


function createParticle() {

    const particle =
        document.createElement("span");

    particle.style.position =
        "absolute";

    particle.style.width =
        `${Math.random() * 4 + 1}px`;

    particle.style.height =
        particle.style.width;

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        "white";

    particle.style.boxShadow =
        "0 0 8px white";

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;

    particle.style.opacity =
        Math.random();

    particle.style.animation =
        `particleFloat ${
            Math.random() * 5 + 5
        }s linear infinite`;

    particleContainer.appendChild(
        particle
    );

}


/*
 * Buat banyak particle
 */
for (let i = 0; i < 80; i++) {

    createParticle();

}


/* =====================================================
   PARTICLE ANIMATION
===================================================== */

const particleStyle =
document.createElement("style");

particleStyle.innerHTML = `

@keyframes particleFloat {

    0% {

        transform:
            translateY(0)
            scale(1);

        opacity: 0;

    }

    20% {

        opacity: 1;

    }

    50% {

        transform:
            translateY(-80px)
            scale(1.4);

    }

    100% {

        transform:
            translateY(-180px)
            scale(.5);

        opacity: 0;

    }

}

`;

document.head.appendChild(
    particleStyle
);