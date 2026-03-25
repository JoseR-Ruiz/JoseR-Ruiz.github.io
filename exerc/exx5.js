const links = [
    { nombre: "Adoptantes", url: "https://joser-ruiz.github.io/ex5/adoptantes.html" },
    { nombre: "Bienvenida", url: "https://joser-ruiz.github.io/ex5/bienvenida.html" },
    { nombre: "Equipo", url: "https://joser-ruiz.github.io/ex5/equipo.html" },
    { nombre: "Mascotas", url: "https://joser-ruiz.github.io/ex5/mascotas.html" },
    { nombre: "Opinión", url: "https://joser-ruiz.github.io/ex5/opinion.html" }
];

const container = document.getElementById("links-container");

links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.nombre;
    a.target = "_blank"; // abre en otra pestaña
    a.style.display = "block";
    a.style.margin = "5px 0";
    container.appendChild(a);
});
