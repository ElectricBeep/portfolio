import Netflix from "./img/netflix.png";
import Videosharing from "./img/videosharing.png";
import Blog from "./img/blog.png";
import Booking from "./img/booking.png";
import Ecommerce from "./img/ecommerce.png";
import Social from "./img/social.png";

import Restaurant from "./img/restaurant.png";
import Admin from "./img/admindashboard.png";
import Rent from "./img/rentacar.png";
import RWeb from "./img/reactwebsite.png";
import Ai from "./img/ai.png";
import Realestate from "./img/realestate.png";

export const fullstackProducts = [
    {
        id: 1,
        img: Netflix,
        link: "https://mern-moviewatching.netlify.app/",
        projectName: "Netflix Clone",
        gitHub: "https://github.com/ElectricBeep/mern-movie-watching",
        icon: "mern",
        infoTitle1: "Project Description",
        infoText1: "Full-stack, movie-watching web application. Design and features are inspired by Netflix. State management is done using react's context. For trailers, movies, and series I am fetching the same video from my firebase storage. I have playlists for sci-fi, action, and comedy genres. Also, unique playlists for the New and Popular section. Playlists feature real cover posters.",
        infoTitle2: "Project Features",
        infoText2: "The project features a login and register system, and the ability to watch a movie and save a movie to My List. User can also update their account. The project also features a separate admin dashboard website, where the admin can create, update and delete movies, users, or lists."
    },
    {
        id: 2,
        img: Social,
        link: "https://mern-socials.netlify.app/",
        projectName: "Social",
        gitHub: "https://github.com/ElectricBeep/mern-social",
        icon: "mern",
        infoTitle1: "Project Description",
        infoText1: "Full-stack, social media web application. Design and features are inspired by Facebook. State management is done using react's context.",
        infoTitle2: "Project Features",
        infoText2: "The project features a login and register system, the ability to create and add an image to the post or to delete a post, ability to like, comment, and bookmark a post or delete bookmarked post. Users can also follow other users, as well as message other users. User can update their account, including profile pictures, cover pictures, and other stats. There is also a fully functional notification system. When a user likes or comments on a post, follows, or messages the other user, the other user will be notified. Users can use the search bar to search for posts or other users. With every mentioned user action, the database is updated accordingly."
    },
    {
        id: 3,
        img: Blog,
        link: "https://mern-variety-blog.netlify.app/",
        projectName: "Blog Website",
        gitHub: "https://github.com/ElectricBeep/mern-blog",
        icon: "mern",
        infoTitle1: "Project Description",
        infoText1: "Full-stack, blog, web application. State management is done using react's context.",
        infoTitle2: "Project Features",
        infoText2: "The project features a login and register system. Users can create posts with images, delete posts, and edit posts. User can also update their account settings."
    },
    {
        id: 4,
        img: Booking,
        link: "https://mern-booker.netlify.app/",
        projectName: "Booking Clone",
        gitHub: "https://github.com/ElectricBeep/mern-booking",
        icon: "mern",
        infoTitle1: "Project Description",
        infoText1: "Full-stack, booking, web application. Design and features are inspired by booking.com. State management is done using react's context.",
        infoTitle2: "Project Features",
        infoText2: "The project features a login and register system. Users can browser properties in 3 different locations, Madrid, Berlin, and London. Users can select starting and ending date of their stay, as well as choose the number of adults or children who are taking the vocation. The user can choose the number of rooms he wants to book and book a room at the selected property. Other users will be unable to select the same room. The project also features an admin dashboard, where the admin can create, update and delete users, properties, and rooms in those properties."
    },
    {
        id: 5,
        img: Ecommerce,
        link: "https://mern-clothing-ecommerce.netlify.app/",
        projectName: "Ecommerce",
        gitHub: "https://github.com/ElectricBeep/mern-ecommerce",
        icon: "mern",
        infoTitle1: "Project Description",
        infoText1: "Full-stack, e-commerce, web application. State management is done using redux.",
        infoTitle2: "Project Features",
        infoText2: "The project features a login and register system. Users can browse products and open a single product. Users can filter products by category, filter products by color, size or sort them by price. Users can add items to their Wishlist, or the cart. Users can delete items from the cart or checkout and go through the payment process with Stripe checkout. Users can update user settings. The project also features a separate admin website, where the admin can add, remove or update products or users."
    },
    {
        id: 6,
        img: Videosharing,
        link: "https://mern-videosharing.netlify.app/",
        projectName: "Video Sharing",
        gitHub: "https://github.com/ElectricBeep/mern-videosharing",
        icon: "mern",
        infoTitle1: "Project Description",
        infoText1: "Full-stack, video sharing, web application. Design and features are inspired by Youtube. State management is done using redux.",
        infoTitle2: "Project Features",
        infoText2: "The project features a login and register system. Users can post videos, like videos, delete videos, and save videos. Users can also leave a comment or delete a comment. There is a search bar where users can search for videos by title or tags. In the sidebar, users can filter videos by tags by clicking on a category. Users can subscribe to other users and see their videos in the Subscriptions section or get a feed of videos, sorted by views, in the Explore section. Users can switch between light and dark mode."
    },
];

export const designProducts = [
    {
        id: 1,
        img: Admin,
        link: "https://fontend-admindashboard.netlify.app/",
        projectName: "Admin Dashboard",
        gitHub: "https://github.com/ElectricBeep/admin-dashboard",
        icon: "react",
        infoTitle1: "Project Description",
        infoText1: "Front-end, admin dashboard website.",
        infoTitle2: "Project Features",
        infoText2: "The project is built using react and sync fusion library. It features multiple pages and charts, created with help of sync fusion. The project also features a light/dark mode switcher as well as multiple color theme options."
    },
    {
        id: 2,
        img: Ai,
        link: "https://frontend-ai-website.netlify.app/",
        projectName: "Ai Website",
        gitHub: "https://github.com/ElectricBeep/frontend-aiwebsite",
        icon: "react",
        infoTitle1: "Project Description",
        infoText1: "Front-end, modern design website. Inspired by project from Figma.",
        infoTitle2: "Project Features",
        infoText2: "The project is built using react. It features modern design principles."
    },
    {
        id: 3,
        img: Rent,
        link: "https://frontend-rentacar.netlify.app/",
        projectName: "Rent-a-Car",
        gitHub: "https://github.com/ElectricBeep/rentacar",
        icon: "react",
        infoTitle1: "Project Description",
        infoText1: "Front-end, rent-a-car agency website",
        infoTitle2: "Project Features",
        infoText2: "The project is built using react. It features modern design principles, calendar component and carousel to browser list of cars."
    },
    {
        id: 4,
        img: RWeb,
        link: "https://fontend-reactwebsite.netlify.app/",
        projectName: "Agency Website",
        gitHub: "https://github.com/ElectricBeep/frontend-agency",
        icon: "react",
        infoTitle1: "Project Description",
        infoText1: "Front-end, modern design website with simple css animations.",
        infoTitle2: "Project Features",
        infoText2: "The project is built using react. It features modern design principles and simple CSS animations."
    },
    {
        id: 5,
        img: Realestate,
        link: "https://frontend-realestate-six.vercel.app/",
        projectName: "Real Estate",
        gitHub: "https://github.com/ElectricBeep/realestate",
        icon: "next",
        infoTitle1: "Project Description",
        infoText1: "Front-end, realestate website, build using Next.js and Rapid api.",
        infoTitle2: "Project Features",
        infoText2: "The project features a couple of pages where users can browser properties and open single property. The single property page features an image slider. I am getting the property data from Rapid API."
    },
    {
        id: 6,
        img: Restaurant,
        link: "https://frontend-restaurant.netlify.app/",
        projectName: "Restaurant",
        gitHub: "https://github.com/ElectricBeep/fontend-restaurant",
        icon: "react",
        infoTitle1: "Project Description",
        infoText1: "Front-end, modern design, restaurant website.",
        infoTitle2: "Project Features",
        infoText2: "The project is built using react and styled using tailwind. It features modern design principles."
    },
];