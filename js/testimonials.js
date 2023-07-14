class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  get user() {
    return new Error(`there is must be user to make testimonials`);
  }

  get testimonialHTML() {
    return `<div class="card">
                <img
                src="${this.image}"
                alt="foto"
                />
                <p class="quote">"${this.quote}"</p>
                <p class="author">~ ${this.user}</p>
            </div>`;
  }
}

class UserTestimonial extends Testimonial {
  #user = "";

  constructor(user, quote, image) {
    super(quote, image);
    this.#user = user;
  }

  get user() {
    return "User : " + this.#user;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(company, quote, image) {
    super(quote, image);
    this.#company = company;
  }

  get user() {
    return "Company : " + this.#company;
  }
}

const testimonial1 = new UserTestimonial(
  "Datuak Junjuang",
  "Bakato bapikiri dulu, ingek-ingek sabalun kanai, samantang kito urang nan tahu, ulemu padi nan kadipakai",
  "https://images.unsplash.com/photo-1685704111591-fe3cbb565069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFnYXJ1eXVuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
);

const testimonial2 = new UserTestimonial(
  "Si Manih",
  "Dima bumi di pijak, di sinan langik di junjuang",
  "https://images.unsplash.com/photo-1560669783-57eb9152d100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluYW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
);

const testimonial3 = new CompanyTestimonial(
  "Rumah Gadang",
  "Adat Basandi Syarak, Syarak Basandi Kitabullah",
  "https://media.istockphoto.com/id/1300515949/id/foto/pagaruyung-palace.jpg?s=612x612&w=0&k=20&c=UpZB6qhNbNWgoEnZm5mgywRIogOPmOZDthx6WAUI2tI="
);

let testimonialData = [testimonial1, testimonial2, testimonial3];

let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;