let app = new Vue ({

  el: ".main_wrapper",

  components: {

    /* COMPONENT NAVTOP */
    "navtop":  {
      template: `
      <div class="navtop container d-flex">
        <div class="navtop_left">
          <span>English  <i class="fas fa-chevron-down"></i></span>
        </div>

        <div class="navtop_right d-flex">
          <ul class="page_list d-flex">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Course Formats</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Demos</a></li>
          </ul>
  
          <ul class="social_list d-flex">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>

      `,
    },

    "navmiddle": {
      template: `
        <div class="navmiddle container d-flex">
          
          <div class="navmiddle_left">
            <img src="assets/img/MasterStudy.svg" alt="">
          </div>

          <div class="navmiddle_center d-flex">
            <span>CATEGORY <i class="fas fa-bars"></i></span>
            <input type="text" placeholder="Search Courses">
            <button><i class="fas fa-search"></i></button>
          </div>

          <div class="navmiddle_right d-flex">
          
          <a href="#"><i class="fas fa-bullhorn"></i>Become an Instructor</a>
          <a href="#"><i class="fas fa-briefcase"></i>For Enterprise</a>

            <ul class="d-flex">
              <li><a href="#"><i class="far fa-user"></i> Log in</a></li>
              <li><a href="#" class="btn_base">SIGN UP</a></li>
              <li><a href="#"><i class="far fa-bookmark"></i></a></li>
            </ul>
          
          </div>
        </div>
      `
    },

    "navbottom": {
      template: `
        <div class="navbottom d-flex">
          <ul class="d-flex">
            <li><a href="#"><i class="fas fa-chart-area"></i>Business</a></li>
            <li><a href="#"><i class="fas fa-palette"></i>Design</a></li>
            <li><a href="#"><i class="fas fa-cog"></i>Development</a></li>
            <li><a href="#"><i class="far fa-smile"></i>Lifestyle</a></li>
            <li><a href="#"><i class="fas fa-mail-bulk"></i>Office Productivity</a></li>
          </ul>
        </div>
      `
    },

    "footer_top": {
      template: `
        <div class="footer_top d-flex">
        <div class="box about">
          <strong>ABOUT</strong>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere deleniti iure accusamus sapiente assumenda ipsum temporibus maiores at quidem, voluptates eius voluptas quod nostrum, eum facilis corrupti tenetur quia voluptatibus.</p>
        </div>

        <div class="box contact">
          <strong>CONTACT</strong>
          <p>USA, California 20, First Avenue, California</p>
          <p>Tel.: +1 212 458 300 32</p>
          <p>Fax: +1 212 375 24 14</p>
          <p>info@masterstudy.com</p>
        </div>

        <div class="box social_network">
          <strong>SOCIAL NETWORK</strong>
          <ul class="d-flex">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href=""></a><i class="fab fa-pinterest"></i></li></i>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href=""><i class="fas fa-basketball-ball"></i></a></li>
            <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
            <li><a href=""><i class="fab fa-skype"></i></a></li>
          </ul>
        </div>

        <div class="box udemy">
          <img src="assets/img/udemy.jpg" alt="">
        </div>
      </div>
      `
    },

    "footer_bottom": {
      template: `
        <div class="footer_bottom d-flex">
          <img src="assets/img/footer-logo2x-50x56.png" alt="">
          <p>Copyright 2020. MasterStudy Theme by Boolean</p>
        </div>
      `
    }
  },

  data: {

    courseTypes: [
      "All Categories",
      "Design",
      "Development",
      "IT & Software",
      "Lifestyle",
      "Marketing",
      "Office Productivity",
      "Arts & Crafts",
      "Google",
      "Food & Beverage"
    ],

    /* array di oggetti contenitore */
    courses: [
      {
        name: "The Complete iOS 10 & Swift 3 Developer Course",
        type: "Development",
        initial_price: 199.99,
        new_price: 100,
        votein5: 4,
        poster: "assets/img/iOS 10.jpg"
      },
      {
        name: "Web Design for Beginners: Real World Coding in HTML & CSS",
        type: "Development",
        initial_price: 129.99,
        new_price: 65,
        votein5: 4,
        poster: "assets/img/html&css.jpg"
      },
      {
        name: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
        type: "Development",
        initial_price: 99.99,
        new_price: 50,
        votein5: 4,
        poster: "assets/img/github.jpg"
      },
      {
        name: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
        type: "Development",
        initial_price: 199.99,
        new_price: 100,
        votein5: 4,
        poster: "assets/img/ios11.jpg"
      },
      {
        name: "Android Java MasterClass - Become an App Developer",
        type: "Development",
        initial_price: 99.99,
        new_price: 50,
        votein5: 4,
        poster: "assets/img/android.jpg"
      },
      {
        name: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
        type: "Design",
        initial_price: 199.99,
        new_price: 100,
        votein5: 5,
        poster: "assets/img/css3.jpg"
      },
      {
        name: "Digitally Painting Light and Color: Amateur to Master",
        type: "Design",
        initial_price: 139.99,
        new_price: 70,
        votein5: 4,
        poster: "assets/img/frog.jpg"
      },
      {
        name: "Become an Arabic Calligraphy Artist from Scratch",
        type: "Art & Crafts",
        initial_price: "",
        new_price: 199.99,
        votein5: 4,
        poster: "assets/img/arabic.jpg"
      },
      {
        name: "Google Searching Ninja!",
        type: "Google",
        initial_price: 89.99,
        new_price: 45,
        votein5: 3,
        poster: "assets/img/ninja.jpg"
      },
      {
        name: "Foundation for Mastering Watercolor Painting",
        type: "Arts & Crafts",
        initial_price: 19.99,
        new_price: 10,
        votein5: 5,
        poster: "assets/img/paint.jpg"
      },
      {
        name: "Get Wine-Smart",
        type: "Food & Beverage",
        initial_price: 49.99,
        new_price: 25,
        votein5: 4,
        poster: "assets/img/wine.jpg"
      },
      {
        name: "The Colored Pencil Drawing Course",
        type: "Arts & Crafts",
        initial_price: 34.99,
        new_price: 18,
        votein5: 4,
        poster: "assets/img/pencil.jpg"
      },
      {
        name: "Paint Realistic Watercolor and Botanicals - STUDIO BASICS",
        type: "Arts & Crafts",
        initial_price: 69.99,
        new_price: 35,
        votein5: 4,
        poster: "assets/img/watercolor.jpg"
      },
      {
        name: "Mastering Brushstrokes - Part 1",
        type: "Arts & Crafts",
        initial_price: 19.99,
        new_price: 10,
        votein5: 5,
        poster: "assets/img/brushstrokes.jpg"
      },
      {
        name: "Paint Realistic Watercolor and Botanicals - MAGNOLIAS",
        type: "Arts & Crafts",
        initial_price: 69.99,
        new_price: 35,
        votein5: 5,
        poster: "assets/img/magnolia.jpg"
      },
      
    ],

    /* array di tutti gli oggetti visualizzati nella section all categories */
    courseArray: [],

    /* array dei corsi più popolari */
    popCourses: [],

  },

  methods: {

    showOtherCourses () {
      console.log("ciao");
      for(let i = 12; i < this.courseArray.length; i++ ) {
        this.courseArray[i].visible = true;
      }
    },

    reduceOtherCourses () {
      for(let i = 12; i < this.courseArray.length; i++ ) {
        this.courseArray[i].visible = false;
      }
    },

    filterByType (type){
      console.log(type);
      this.courseArray = [];
      let tempArray = [];
      this.courses.forEach(elem => {
        if(type !== "All Categories"){
          if(elem.type === type){
            tempArray = elem;
            elem.visible = true;
            this.courseArray.push(tempArray)
          }
        } else {
           tempArray = elem;
           this.courseArray.push(tempArray);
        }
        this.reduceOtherCourses();
      })
      
    },

  },

  mounted () {

    this.courses.forEach(elem => {
      Vue.set(elem, "visible", true);

      if (elem.votein5 > 3){
        this.popCourses.push(elem)
      }
    })

    this.courseArray = this.courses;

    this.reduceOtherCourses();

    

    console.log(this.courses);
    console.log(this.popCourses);
  }

});

const prev  = document.querySelector('#prev');
const next = document.querySelector('#next');

const courseBox = document.querySelector('.popular_courses .course_box');

let carouselWidth = document.querySelector('main .container').offsetWidth;
console.log(carouselWidth);

/* window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.popular_courses > .container').offsetWidth;
}) */

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add("show");
  courseBox.style.transform = `translateX(-${index * carouselWidth}px)`;
  console.log(courseBox.offsetWidth);
  console.log(courseBox.offsetWidth - (index * carouselWidth) < carouselWidth);
  if (courseBox.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add("hide");
  }
  console.log(courseBox.offsetWidth);
  console.log(carouselWidth);
  console.log(index);

})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  courseBox.style.transform = `translateX(-${index * carouselWidth}px)`;

  console.log(index);

})

console.log(index);
