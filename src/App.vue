<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Buat observer untuk mendeteksi elemen ber-class "scroll-reveal"
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Tambahkan class animasi ketika masuk ke viewport
        entry.target.classList.add('animate-fade-up')
        // Hentikan observer setelah elemen muncul (sekali jalan)
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.15 // Elemen terdeteksi jika 15% dari dirinya muncul di layar
  })

  // Daftarkan semua elemen dengan class 'scroll-reveal'
  document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
})
</script>
<template>
  <div class="min-h-screen bg-black text-white font-inter overflow-x-hidden">
    
    <!-- Header / Navbar -->
    <header class="py-6 flex justify-center items-center px-4 z-50 fixed top-0 left-0 right-0">
      <nav class="flex items-center gap-6 px-8 py-3.5 bg-white/[0.03] backdrop-blur-xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300">
        <a href="#about" class="text-sm font-medium text-zinc-300 hover:text-white transition-colors">About</a>
        <a href="#project" class="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Project</a>
        <a href="#contact" class="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Social</a>
      </nav>
    </header>

   <!-- Section 1: Hero -->
<main class="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-6 pt-24 pb-12 gap-8 lg:gap-0 max-w-7xl mx-auto">
  
  <!-- Teks: Diberi padding & posisi aman (lg:left-4) agar tidak terpotong -->
  <div class="z-10 text-center -mt-10 lg:mt-0 lg:text-left lg:absolute lg:-left-6 lg:top-[38%] lg:-translate-y-1/2 animate-slide-right">
    <p class="font-kanit text-4xl sm:text-5xl lg:text-[64px] font-normal leading-tight text-white">
      Hello.
    </p>
    <p class="font-kanit text-2xl sm:text-4xl lg:text-[64px] font-normal leading-tight text-white mt-2">
      I’m Backend Engineer
    </p>
  </div>

  <!-- Foto & Background Circle Container -->
  <div class="relative w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-35">
    
    <!-- Gambar Background Circle (Floating) -->
    <img 
      src="/assets/landingpage/rounded.png" 
      alt="Background Circle" 
      class="absolute inset-0 w-full h-full object-cover rounded-full animate-float"
    />

    <!-- Foto Utama (Profile) -->
    <img 
      src="/assets/landingpage/Profile.png" 
      alt="Foto Marvel Faizal Rachman" 
      class="absolute inset-0 w-full h-full object-cover object-bottom scale-110 pointer-events-none"
    />

  </div>

</main>

    <!-- Section 2: About Me -->
<section id="about" class="relative w-full py-24 px-6 overflow-hidden">
  <img 
    src="/assets/Vector.png" 
    alt="Vector Background" 
    class="absolute -right-[200px] lg:-right-[300px] top-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] opacity-20 lg:opacity-30 pointer-events-none z-0 object-cover"
  />

  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="flex flex-col justify-center max-w-4xl">
      
      <!-- Judul Section -->
      <h2 class="scroll-reveal opacity-0 font-kanit text-4xl sm:text-6xl font-normal tracking-tight text-white mb-8">
        About me.
      </h2>

      <!-- Teks Deskripsi -->
      <p class="scroll-reveal opacity-0 font-inter text-lg sm:text-2xl lg:text-[32px] font-normal leading-relaxed text-zinc-300 max-w-3xl mb-12">
        I am a Back-End & Web Application Developer, AI Enthusiast, and Co-Founder of Qarnayn Creative Organizer. Specializing in service applications, application architecture, and modern software development, I build high-performance systems that solve real-world business challenges through scalable technology.
      </p>

      <!-- Container Tombol CV & Icon Sosial Media -->
      <div class="scroll-reveal opacity-0 flex flex-wrap items-center gap-6">
        <a 
          href="#" 
          class="inline-flex items-center justify-center px-8 py-4 bg-[#ffdd00] hover:bg-[#e6c700] text-black font-kanit font-semibold text-xl sm:text-2xl rounded-full transition-all active:scale-95 shadow-lg"
        >
          Download CV
        </a>

        <div class="flex items-center gap-4">
          <a href="https://www.instagram.com/z.zvell/" aria-label="Instagram" class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform hover:scale-110">
            <img src="/assets/aboutpage/iconIG.png" alt="Instagram" class="w-full h-full object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/marvelfaizalrachman" aria-label="LinkedIn" class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform hover:scale-110">
            <img src="/assets/aboutpage/iconLK.png" alt="LinkedIn" class="w-full h-full object-contain" />
          </a>
          <a href="https://wa.me/6285893717868" aria-label="WhatsApp" class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform hover:scale-110">
            <img src="/assets/aboutpage/iconWA.png" alt="WhatsApp" class="w-full h-full object-contain" />
          </a>
          <a href="https://www.behance.net/marvelfaizal" aria-label="Behance" class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform hover:scale-110">
            <img src="/assets/aboutpage/iconBE.png" alt="Behance" class="w-full h-full object-contain" />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Section 3: Experience & Education -->
<section id="experience" class="relative w-full py-24 px-6 overflow-hidden">
  <img 
    src="/assets/Vector.png" 
    alt="Vector Background" 
    class="absolute -left-[200px] lg:-left-[350px] top-1/2 -translate-y-1/2 w-[500px] lg:w-[800px] opacity-20 lg:opacity-30 pointer-events-none z-0 object-cover"
  />

  <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-end">
    <div class="w-full max-w-4xl">
      
      <!-- ==================== EXPERIENCE ==================== -->
      <div class="mb-20">
        <h2 class="scroll-reveal opacity-0 font-kanit text-3xl sm:text-4xl font-normal text-right text-white mb-12">
          Experience
        </h2>

        <div class="relative flex flex-col gap-12 pr-8 sm:pr-12">
          <div class="absolute right-[1.9px] sm:right-[1.9px] top-4 bottom-4 w-[2px] border-r-2 border-dashed border-[#FFDD00]"></div>

          <!-- Item Experience 1 -->
          <div class="scroll-reveal opacity-0 relative flex flex-col items-end text-right">
            <img src="/assets/aboutpage/DotY.png" alt="Dot" class="absolute -right-[41px] sm:-right-[57px] top-2 w-6 h-6 z-10" />
            <h3 class="font-kanit text-2xl sm:text-4xl font-normal text-white">Jucang Sales Application (Freelance)</h3>
            <p class="font-inter text-lg sm:text-2xl text-zinc-400 mt-1 mb-3">Backend Mobile - Laravel</p>
            <p class="font-inter text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Engineered core backend architecture for a dedicated FMCG sales application, managing inventory tracking, real-time sales reporting, and automated target performance metrics.<br><br>
              Streamlined daily business operations and stock accuracy by implementing scalable database schemas and optimized API endpoints.
            </p>
          </div>

          <!-- Item Experience 2 -->
          <div class="scroll-reveal opacity-0 relative flex flex-col items-end text-right">
            <img src="/assets/aboutpage/DotY.png" alt="Dot" class="absolute -right-[41px] sm:-right-[57px] top-2 w-6 h-6 z-10" />
            <h3 class="font-kanit text-2xl sm:text-4xl font-normal text-white">Yayasan Dharmabakti Bunaya</h3>
            <p class="font-inter text-lg sm:text-2xl text-zinc-400 mt-1 mb-3">Web Management</p>
            <p class="font-inter text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Website feature enhancements, management, and updates.
            </p>
          </div>
        </div>
      </div>

      <!-- ==================== EDUCATION ==================== -->
      <div>
        <h2 class="scroll-reveal opacity-0 font-kanit text-3xl sm:text-4xl font-normal text-right text-white mb-12">
          Education
        </h2>

        <div class="relative flex flex-col gap-12 pr-8 sm:pr-12">
          <div class="absolute right-[1.9px] sm:right-[1.9px] top-4 bottom-4 w-[2px] border-r-2 border-dashed border-[#FFDD00]"></div>

          <!-- Item Education 1 -->
          <div class="scroll-reveal opacity-0 relative flex flex-col items-end text-right">
            <img src="/assets/aboutpage/DotY.png" alt="Dot" class="absolute -right-[41px] sm:-right-[57px] top-2 w-6 h-6 z-10" />
            <h3 class="font-kanit text-2xl sm:text-4xl font-normal text-white">High School at Sekolah Impian Boarding School</h3>
            <p class="font-inter text-lg sm:text-2xl text-zinc-400 mt-1 mb-2">SMA Al-Jihad Bogor</p>
            <p class="font-inter text-sm sm:text-base text-zinc-300">2021-2024</p>
          </div>

          <!-- Item Education 2 -->
          <div class="scroll-reveal opacity-0 relative flex flex-col items-end text-right">
            <img src="/assets/aboutpage/DotY.png" alt="Dot" class="absolute -right-[41px] sm:-right-[57px] top-2 w-6 h-6 z-10" />
            <h3 class="font-kanit text-2xl sm:text-4xl font-normal text-white">Prince Sattam bin Abdulaziz University</h3>
            <p class="font-inter text-lg sm:text-2xl text-zinc-400 mt-1 mb-2">Bachelor of Humanity</p>
            <p class="font-inter text-sm sm:text-base text-zinc-300">2025-2031</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Section 4: Projects -->
<section id="project" class="relative w-full py-24 px-6 overflow-hidden">
  <div class="max-w-7xl mx-auto">
    
    <h2 class="scroll-reveal opacity-0 font-kanit text-4xl sm:text-6xl font-normal tracking-tight text-white mb-12">
      Projects.
    </h2>

    <div class="bg-[#131313] rounded-[32px] sm:rounded-[49px] p-6 sm:p-10 lg:p-12 shadow-[0_10px_60px_15px_rgba(0,4,88,0.8)] border border-zinc-800/50">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

        <!-- Card 1 -->
        <article class="scroll-reveal opacity-0 bg-white text-black rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
          <div>
            <h3 class="font-kanit text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight text-black">Expanses Tracker</h3>
            <div class="w-24 sm:w-32 h-1.5 bg-[#FFDD00] rounded-full my-3"></div>
            <p class="font-inter text-sm sm:text-base font-extralight text-zinc-700 mb-4">App Web | React Js</p>
          </div>
          <p class="font-inter text-sm sm:text-base lg:text-[18px] font-light text-zinc-800 leading-relaxed">
            A smart financial tracking app that gives you full control over your money, monitors spending, and guides you toward reaching your target goals.
          </p>
        </article>

        <!-- Card 2 -->
        <article class="scroll-reveal opacity-0 bg-white text-black rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
          <div>
            <h3 class="font-kanit text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight text-black">Ibadah Yuk</h3>
            <div class="w-24 sm:w-32 h-1.5 bg-[#FFDD00] rounded-full my-3"></div>
            <p class="font-inter text-sm sm:text-base font-extralight text-zinc-700 mb-4">Backend Mobile App | PHP</p>
          </div>
          <p class="font-inter text-sm sm:text-base lg:text-[18px] font-light text-zinc-800 leading-relaxed">
            This application was created to maintain spiritual quality and motivate yourself to have an interest in the spiritual field with supporting features such as prayer reminders and daily quotes and tahfidz control.
          </p>
        </article>

        <!-- Card 3 -->
        <article class="scroll-reveal opacity-0 bg-white text-black rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
          <div>
            <h3 class="font-kanit text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight text-black">Jucang Sales Application</h3>
            <div class="w-24 sm:w-32 h-1.5 bg-[#FFDD00] rounded-full my-3"></div>
            <p class="font-inter text-sm sm:text-base font-extralight text-zinc-700 mb-4">Backend Mobile App | API | Laravel</p>
          </div>
          <p class="font-inter text-sm sm:text-base lg:text-[18px] font-light text-zinc-800 leading-relaxed">
            Built to streamline order management for owners and sales representatives, this application simplifies the ordering process while capturing real-time revenue and sales data.
          </p>
        </article>

        <!-- Card 4 -->
        <article class="scroll-reveal opacity-0 bg-white text-black rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
          <div>
            <h3 class="font-kanit text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight text-black">Data Center PPMI Saudi</h3>
            <div class="w-24 sm:w-32 h-1.5 bg-[#FFDD00] rounded-full my-3"></div>
            <p class="font-inter text-sm sm:text-base font-extralight text-zinc-700 mb-4">App Web | React Js</p>
          </div>
          <p class="font-inter text-sm sm:text-base lg:text-[18px] font-light text-zinc-800 leading-relaxed">
            Built to centralize student data across Saudi Arabia, this platform bridges the communication and coordination gap between the central PPMI and its regional branches.
          </p>
        </article>

      </div>
    </div>

  </div>
</section>
<!-- Section 5: Footer / Contact & Social -->
<footer id="contact" class="relative w-full pt-20 pb-12 px-6 border-t border-zinc-800/60 mt-12">
  <div class="max-w-7xl mx-auto flex flex-col justify-between min-h-[300px]">
    
    <!-- Grid Utama: Contact & Social -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
      
      <!-- Kolom Kiri: Contact Me -->
      <div class="flex flex-col gap-4">
        <h2 class="font-kanit text-3xl sm:text-4xl lg:text-[48px] font-normal text-white mb-2">
          Contact Me.
        </h2>
        <a 
          href="tel:+6285893717868" 
          class="font-inter text-xl sm:text-3xl lg:text-[36px] font-light text-zinc-300 hover:text-white transition-colors"
        >
          +62 858 9371 7868
        </a>
        <a 
          href="mailto:marvelfaizal@gmail.com" 
          class="font-inter text-xl sm:text-3xl lg:text-[36px] font-light text-zinc-300 hover:text-white transition-colors"
        >
          marvelfaizal@gmail.com
        </a>
      </div>

      <!-- Garis Pemisah Vertikal (Hanya Tampil di Screen Desktop) -->
      <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/30 -translate-x-1/2"></div>

      <!-- Kolom Kanan: Social -->
      <div class="flex flex-col gap-4 lg:pl-12">
        <h2 class="font-kanit text-3xl sm:text-4xl lg:text-[48px] font-normal text-white mb-2">
          Social
        </h2>
        <div class="flex flex-wrap gap-x-4 gap-y-2 font-inter text-xl sm:text-3xl lg:text-[36px] font-light text-zinc-300">
          <a href="https://www.instagram.com/z.zvell/" class="hover:text-white transition-colors">Instagram</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/marvelfaizalrachman" class="hover:text-white transition-colors">Linkedin</a>
          <span>|</span>
          <a href="https://github.com/zvell08" class="hover:text-white transition-colors">Github</a>
          <br class="hidden sm:block" />
          <a href="https://www.behance.net/marvelfaizal" class="hover:text-white transition-colors">Behance</a>
        </div>
      </div>

    </div>

    <!-- Copyright (Di Bagian Paling Bawah) -->
    <div class="mt-20 text-center">
      <p class="font-inter text-xs sm:text-sm font-light text-zinc-500">
        © Copyright Marvel Faizal Rachman
      </p>
    </div>

  </div>
</footer>

  </div>
</template>

