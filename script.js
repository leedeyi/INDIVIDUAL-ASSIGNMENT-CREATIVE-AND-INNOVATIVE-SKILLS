document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Hero Image Slider Logic
  // ==========================================
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");
  
  if (slider && slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateSlider(index) {
      if (!slider) return;
      slider.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    }
    
    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider(currentSlide);
      });
      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider(currentSlide);
      });
      dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
          currentSlide = parseInt(e.target.dataset.index);
          updateSlider(currentSlide);
        });
      });
    }
    updateSlider(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider(currentSlide);
    }, 5000);
  }

  // ==========================================
  // 2. Animated Counter Logic on Scroll
  // ==========================================
  const counters = document.querySelectorAll(".counter");
  const counterFloats = document.querySelectorAll(".counter-float");
  let animated = false;

  function startCounters() {
    const banner = document.querySelector(".stats-banner");
    if (!banner) return;
    const bannerPosition = banner.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (bannerPosition < screenPosition && !animated) {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const speed = 150;
        const increment = Math.ceil(target / speed);
        let count = 0;
        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.innerText = count.toLocaleString();
            setTimeout(updateCount, 15);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateCount();
      });
      counterFloats.forEach(counter => {
        const target = parseFloat(counter.getAttribute("data-target"));
        let count = 0;
        const increment = target / 100;
        const updateFloat = () => {
          count += increment;
          if (count < target) {
            counter.innerText = count.toFixed(2);
            setTimeout(updateFloat, 15);
          } else {
            counter.innerText = target.toFixed(2);
          }
        };
        updateFloat();
      });
      animated = true;
    }
  }

  if (document.querySelector(".stats-banner")) {
    window.addEventListener("scroll", startCounters);
    startCounters(); // Trigger check on load
  }

  // ==========================================
  // 3. Process Section Accordion Dropdown Logic
  // ==========================================
  const accordionItems = document.querySelectorAll(".accordion-item");
  if (accordionItems.length > 0) {
    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
      if (header) {
        header.addEventListener("click", () => {
          const isActive = item.classList.contains("active");
          
          accordionItems.forEach(otherItem => {
            otherItem.classList.remove("active");
          });
          if (!isActive) {
            item.classList.add("active");
          }
        });
      }
    });
  }

  // ==========================================
  // 4. Solution Carousel Data & Controls
  // ==========================================
  const solutionData = [
    {
      index: "01",
      title: "Financial crisis during the COVID-19 pandemic",
      paragraphs: [
        "During the COVID-19 pandemic, the Malaysian Zoological Society council faced severe financial distress due to complete operational closures. The monthly expenses for animal feed, staff salaries, and facility maintenance reached between 1.3 million and 1.5 million ringgit, and the zoo's cash reserves had dropped below 1 million ringgit. Under intense financial pressure, the management as confirmed by Zoo Negara deputy president Datuk Rosly Lana decided to sell a 21.46-hectare piece of land near Taman Melawati, which the zoo had held unused since 1963.",
        "Due to the steep and hilly geography, the land was not suitable for building animal enclosures. Buyers and local stakeholders expressed serious concerns about the structural stability of the land, pointing out severe environmental risks such as soil erosion, landslides, and potential flooding.",
        "Despite these limitations, the zoo still has to sell the land to raise urgently needed funds. The proceeds from the transaction were directly deposited into a fixed deposit account, establishing a basic fund that enabled the zoo to cover daily operating expenses together with public donations and maintain animal welfare."
      ],
      source: "https://www.nst.com.my/news/nation/2025/10/1294067/zoo-negara-land-sale-sparks-backlash-public-ngos-demand-answers-watch",
      image: "images/picture_solutions_1.jpg"
    },
    {
      index: "02",
      title: "Perception of Safety and Security by Visitors to the National Zoo of Malaysia",
      paragraphs: [
        "To repair public trust and eliminate safety hazards, Zoo Negara has implemented a multi-level security and maintenance system. Electric fences are checked twice a day, especially around enclosures for large carnivores such as tigers. At the same time, staff from the parks and landscaping department are assigned to inspect tree branches and strengthen preventive measures during the rainy season to avoid falling debris risks. To maintain strict operational standards, zookeepers undergo mandatory weekly refresher courses on safety, while new zookeepers attend annual safety training organized by the Malaysian Association of Zoological Parks and Aquaria.",
        "To address the lack of accessible public emergency exits and clear guidance, visual information within the park has been optimized by placing large, clear bilingual signs in Malay and English for emergency exits, park rules, and first aid equipment so visitors can locate medical aid from a distance.",
        "To eliminate stagnant water and algae growth, enclosure hygiene and structural maintenance are prioritized by systematically disinfecting all washable surfaces, clearing rotting food and waste promptly, and installing upgraded drainage systems. Finally, emergency exits and main pathways are being expanded to ensure smooth crowd flow, while drawing inspiration from modern facilities such as the Giant Panda Conservation Centre by integrating elevators and secure viewing areas to ensure visitor safety, convenience, and high service standards."
      ],
      source: "https://www.researchgate.net/publication/347396311_VISITORS'_PERCEPTION_OF_SAFETY_AND_SECURITY_AT_ZOO_NEGARA_MALAYSIA_VISITORS'_PERCEPTION_OF_SAFETY_AND_SECURITY_AT_ZOO_NEGARA_MALAYSIA",
      image: "images/picture_solutions_2.jpeg"
    },
    {
      index: "03",
      title: "Poor Visitor Experience and Service",
      paragraphs: [
        "Firstly, Zoo Negara has been promoting online ticket purchase through their website (ticket.zoonegara.my) and partnered with third-party ticketing platforms such as Klook, Trip.com and Traveloka between 2020 and 2022. Dedicated fast lanes and barcode scanners at the main entrance to significantly reduce queue times. Second, the zoo is committed to improving the number of trams in order to improve the visiting experience for guests. The trams have increased their tram from 4 trams in 2021 to between 8 and 10 trams by 2023 and 2024 to manage the increasing number of visitors and enhance the convenience of guest movement. Finally, the zoo has partnered with recognized local vendors to offer a wider variety of clean, high-quality and affordable meals at the food court. Between 2022 and 2023, Zoo Negara actively upgraded its dining options by collaborating with certified local vendors such as Mane Delicious and The Wild Restaurant to provide more diverse selection of food to the visitors."
      ],
      source: "https://www.facebook.com/znegaramalaysia/posts/zoo-negara-menerima-pembelian-tiket-secara-walk-in-setiap-hari-dan-juga-pembelia/1326528129518408/",
      image: "images/picture_solutions_3.jpeg"
    },
    {
      index: "04",
      title: "Enclosure Hygiene, Animal Welfare, and Visual Hygiene at Zoo Negara Malaysia",
      paragraphs: [
        "To address the concerns related to enclosure hygiene, animal welfare, and visual hygiene, the national zoo has implemented a series of targeted operational protocols. The management team strictly enforces the daily cleaning schedules and conducts regular maintenance of all animal habitats. They prioritize ensuring that the water quality in the aquarium area is regularly replaced and filtered to prevent water turbidity. Viewing glass surfaces and visitor observation decks are disinfected and cleaned multiple times daily to maintain clear visual effects. Additionally, a dedicated groundskeeping team and supervisory staff are positioned visibly throughout the park and main entrances to actively implementing SOPs to ensure facility cleanliness and reassure the guarantee of continuous management and supervision to visitors."
      ],
      source: "",
      image: "images/picture_solutions_4.jpg"
    }
  ];

  const solIndexEl = document.getElementById("solIndex");
  const solTitleEl = document.getElementById("solTitle");
  const solDescContainer = document.getElementById("solDesc");
  const solSourceContainer = document.getElementById("solSource");
  const solImageEl = document.getElementById("solImage");
  const solPrevBtn = document.getElementById("solPrevBtn");
  const solNextBtn = document.getElementById("solNextBtn");
  const textPanel = document.querySelector(".solution-text-panel");

  if (solTitleEl) {
    let currentSolutionIndex = 0;

    function renderSolution(index) {
      if (!solTitleEl) return;
      
      if (textPanel && solImageEl) {
        textPanel.classList.add("fade-out");
        solImageEl.classList.add("fade-out");
      }
      setTimeout(() => {
        const data = solutionData[index];
        if (solIndexEl) solIndexEl.innerText = data.index;
        if (solTitleEl) solTitleEl.innerText = data.title;
        
        if (solDescContainer) {
          solDescContainer.innerHTML = data.paragraphs
            .map(pText => `<p>${pText}</p>`)
            .join("");
        }
        
        if (solSourceContainer) {
          if (data.source) {
            solSourceContainer.innerHTML = `
              <a href="${data.source}" target="_blank" rel="noopener noreferrer" class="sol-source-link">
                <i class="fa-solid fa-link"></i>
                <span>${data.source}</span>
              </a>
            `;
          } else {
            solSourceContainer.innerHTML = "";
          }
        }
        
        if (solImageEl) {
          solImageEl.src = data.image;
          solImageEl.alt = data.title;
        }
        if (textPanel && solImageEl) {
          textPanel.classList.remove("fade-out");
          solImageEl.classList.remove("fade-out");
        }
      }, 250);
    }

    renderSolution(currentSolutionIndex);

    if (solNextBtn && solPrevBtn) {
      solNextBtn.addEventListener("click", () => {
        currentSolutionIndex = (currentSolutionIndex + 1) % solutionData.length;
        renderSolution(currentSolutionIndex);
      });
      solPrevBtn.addEventListener("click", () => {
        currentSolutionIndex = (currentSolutionIndex - 1 + solutionData.length) % solutionData.length;
        renderSolution(currentSolutionIndex);
      });
    }
  }
});