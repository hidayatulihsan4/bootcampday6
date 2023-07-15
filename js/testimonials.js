const testimonialData = [
  {
    user: "Datuak Junjuang",
    quote: "Bakato bapikiri dulu, ulemu padi nan kadipakai",
    image: "https://images.unsplash.com/photo-1685704111591-fe3cbb565069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFnYXJ1eXVuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },
  {
    user: "Si Manih",
    quote: "Dima bumi di pijak, di sinan langik di junjuang",
    image:"https://images.unsplash.com/photo-1560669783-57eb9152d100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluYW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    user:"Rumah Gadang",
    quote: "Adat Basandi Syarak, Syarak Basandi Kitabullah",
    image:"https://media.istockphoto.com/id/1300515949/id/foto/pagaruyung-palace.jpg?s=612x612&w=0&k=20&c=UpZB6qhNbNWgoEnZm5mgywRIogOPmOZDthx6WAUI2tI=",
    rating: 4,
  },
  {
    user :"Rangkiang",
    quote:"Tampek penyimpanan bahan makanan maso dulunyo",
    image: "https://media.istockphoto.com/id/157680744/id/foto/minangkabau-house-near-bukittinggi-sumatra-indonesia.jpg?s=612x612&w=0&k=20&c=PvKs7rPna0lfd2kfnUlMk5a5YeB99c1MXdHbaU3G7Lk=",
    rating: 2,
  }

];


console.log(testimonialData);

function allTestimonial() {
  let testimonialHTML = "";

  testimonialData.forEach((value, index) => {
    testimonialHTML += `<div class="card">
                          <img
                          src="${value.image}"
                          alt="foto"/>
                          <p class="quote">"${value.quote}"</p>
                          <p class="author">~ ${value.user}</p>
                          <p class="author">${value.rating} <i class="fa-solid fa-star"></i></p>
                      </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonial();

function filterTestimonial(rating) {
  let filteredTestimonialHTML = "";

  const filteredData = testimonialData.filter((value) => {
    return value.rating === rating;
  });

  filteredData.forEach((value) => {
    filteredTestimonialHTML += `<div class="card">
                                  <img
                                  src="${value.image}"
                                  alt="foto"/>
                                  <p class="quote">"${value.quote}"</p>
                                  <p class="author">~ ${value.user}</p>
                                  <p class="author">${value.rating} <i class="fa-solid fa-star"></i></p>
                              </div>`;
  });

  if (filteredTestimonialHTML == "") {
    filteredTestimonialHTML = `<h1>Nothing</h1>`;
  }

  document.getElementById("testimonials").innerHTML = filteredTestimonialHTML;
}