// IMG
function handler(entries) {
    // TODO: Do something
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("transition");
        } else {
            entry.target.classList.remove("transition");
        }
    }
}


const observer = new IntersectionObserver(handler, {
    threshold: 0.1,
});


const img = document.getElementById("image-1"); {
img.classList.add("fade-scale-in");
}

observer.observe(img)

