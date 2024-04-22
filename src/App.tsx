import "./App.css";
import { About } from "./pages/About";
import { Achievement } from "./pages/Achievement";
import { Home } from "./pages/Home";

function App() {
  window.onscroll = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 300;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      console.log("calculate");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          console.log(id);
          if (links.getAttribute("href") == "#" + id?.toString()) {
            links.classList.add("active");
          }
        });
      }
    });
  };
  return (
    <>
      <header>
        <a href="#" id="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 128 128"
          >
            <path
              fill="#757f3f"
              d="M108.17 116.39c-9.15-2.68-16.68-8.59-22.04-16.39c-1.48-2.14-4.19-7.4-7.47-5.66c-4.17 2.22-1.88 8.77-.5 11.94c2.27 5.23 6.07 10.23 10.75 14.07c5.31 4.37 11.79 7.26 18.49 7.33c3.43.04 6.03-2.79 6-6.13c-.02-3.24-2.52-4.36-5.23-5.16M68.88 63.53c-1.09-2.62-1.84-5.93-3.87-8.02c-1.66-1.7-10.24.33-12.44.65c-9.56 1.37-19.2 5.23-26.08 12.2c-5.65 5.71-8.95 15.56-5.27 23.14c1.16 2.4 3 4.39 5.22 5.85c3.59 2.36 7.89.91 11.58 2.55c2.4 1.06 3.3 3.83 5.43 5.24c3.12 2.08 6.88 3.04 10.62 2.89c.43-.01.87-.04 1.29-.09c6.47-.66 13.83-6.33 16.61-12.01c3.17-6.49 2.76-14.21.97-21.03c-1.03-3.92-2.5-7.64-4.06-11.37m50.46-4.9c-4.93-13.56-21.6-14.12-33.63-12.06c-3.88.66-9.18 1.78-12.5 3.94c-.43.28-1.1.73-1.39 1.14c-.34.46-.32.77-.16 1.11c2.47 5.43 4.55 11.04 6.28 16.75c1.63 5.42 2.47 11.32 5.08 16.39c3.59 7.01 8.62 9.62 16.3 10.47c2.82.31 5.56-.79 7.74-2.43c3.19-2.38 5.85-5.27 6.83-9.24c.43-1.76.44-3.43.44-5.28c0-2.07-1.11-4.33 1.1-5.66c5.64-3.38 5.93-9.57 3.91-15.13m-64.39-8.17c2.02-.57 4.08-.91 6.12-1.19c2.36-.33.21-6.55-.12-7.65c-3.57-11.97-8.31-27.11-22.32-30c-5.99-1.24-15.13 1.46-17.6 7.53c-.91 2.24-.61 4.49-.96 6.81C12.16 28.98 5.5 38.02 8.08 46.51c1.98 6.5 8.32 9.85 14.91 10.12c11.39.47 21.22-3.15 31.96-6.17m14.17-4.01c3.79-.25 7.55-2.25 11.17-3.28c8.04-2.31 17.01-2.1 24.31-6.62c1.87-1.15 2.91-3.33 3.7-5.32c1.96-4.89 2.42-11.11-.79-15.58c-3.66-5.08-12.25-6.54-18.07-5.14c-1.11.27-1.92.18-2.36-.94c-.91-2.24-2.29-4.17-3.98-5.67C79.61.82 74.8-.5 70 .85c-3.83 1.07-6.82 3.9-8.49 7.45c-5.02 10.7.51 26.01 5.36 35.95c.46.95 1.12 2.28 2.25 2.2"
            />
          </svg>
          <span style={{ fontWeight: 600, fontSize: "2rem", marginLeft: 2 }}>
            Good Luck
          </span>
        </a>
        <nav>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#achievement">Achievement</a>
        </nav>
      </header>
      <div style={{ height: 40 }}></div>
      <section id="home">
        <Home />
      </section>
      <section
        id="about"
        style={{
          backgroundColor: "var(--white-salt)",
        }}
      >
        <About />
      </section>
      <section id="achievement" style={{padding: '1.6rem 0'}}>
        <Achievement />
      </section>
    </>
  );
}

export default App;
