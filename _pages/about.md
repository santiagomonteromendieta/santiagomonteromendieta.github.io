---
permalink: /
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
  /*  Modern Styling for About Page (Custom CSS - can be moved to main.scss later) */
  body {
    line-height: 1.7;
    color: #4a4a4a; /* Slightly darker grey for body text */
  }

  h1, h2, h3 {
    color: #5474B8; /* A more muted, professional blue */
    margin-top: 2rem;
  }

  a {
    color: #5474B8; /* Muted blue for links */
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #3B5E9A; /* Darker blue on hover */
    text-decoration: underline;
  }

  .button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #5474B8; /* Muted blue for buttons */
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
  }

  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  .section-card {
    background: #f9f9f9; /* Light grey background for cards */
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08); /* Subtle shadow */
    margin-top: 0.5rem
    margin-bottom: 0.5rem;
  }

  .timeline {
    border-left: 3px solid #5474B8; /* Muted blue timeline line */
    padding-left: 1.5rem;
    margin-left: 1rem;
  }

  .timeline-item {
    margin-bottom: 2rem;
  }

  .timeline-item h3 {
    margin-top: 0;
  }

  .timeline-item p {
    margin: 0.5rem 0;
    color: #777; /* Slightly lighter grey for timeline dates */
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .form-group input, .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  #contact-form {
    background: #f8f9fa; /* Very light grey for form background */
    padding: 2rem;
    border-radius: 10px;
  }
</style>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem;">Introduction</h2>
  <p>Hello, I'm <strong>Santi</strong>, an evolutionary biologist driven by a deep curiosity about the genomic basis of life.  I'm currently a Postdoctoral Researcher at the prestigious <a href="http://english.ioz.cas.cn/" target="_blank">Institute of Zoology (IOZ), Chinese Academy of Sciences</a> in Beijing, working with the <a href="https://guolaboratory.com/" target="_blank">Fish Evolution and Genomics Group</a>. My research explores the fascinating world of animal evolution, using cutting-edge bioinformatics and genomics to understand how species adapt and diversify.</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/images/santi_stickleback.jpg" alt="Dr. Montero-Mendieta conducting fish research" style="border-radius: 8px;">
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem;">Research</h2>
  <p>I am currently engaged in research on fish evolutionary genomics, using bioinformatics analyses of genomic datasets to uncover insights into evolutionary questions. Some of my notable findings include understanding the <a href="https://onlinelibrary.wiley.com/doi/10.1111/mec.14986" target="_blank">adaptation to high‐altitude habitats in honey bees</a>, uncovering the <a href="https://doi.org/10.1016/j.ympev.2021.107167" target="_blank">diversification patterns of Neotropical frogs in the Andes</a>, and revealing <a href="https://doi.org/10.1371/journal.pone.0149985" target="_blank">high levels of cryptic diversity in the reptiles of the Socotra Archipelago</a>.</p>
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem;">Academia</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h3 style="margin-top: 0;">Postdoctoral Researcher</h3>
      <p style="margin: 0.5rem 0; color: #777;">Institute of Zoology, Chinese Academy of Sciences, Beijing<br>
      <small>2021-Present</small></p>
    </div>
    <div class="timeline-item">
      <h3 style="margin-top: 0;">PhD in Evolutionary Biology</h3>
      <p style="margin: 0.5rem 0; color: #777;">Doñana Biological Station, Seville<br>
      <small>2015-2019</small></p>
    </div>
    <div class="timeline-item">
      <h3 style="margin-top: 0;">MSc in Biodiversity</h3>
      <p style="margin: 0.5rem 0; color: #777;">University of Barcelona<br>
      <small>2013-2014</small></p>
    </div>
    <div class="timeline-item">
      <h3 style="margin-top: 0;">BSc in Biology</h3>
      <p style="margin: 0.5rem 0; color: #777;">University of Girona<br>
      <small>2009-2013</small></p>
    </div>
  </div>
  <a href="/cv/" class="button" style="display: inline-flex; align-items: center; gap: 0.5rem;">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
    </svg>
    View Full CV
  </a>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/images/FEGG_2023.jpg" alt="Research group photo" style="border-radius: 8px;">
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem;">Funding</h2>
  <p>I am proud to acknowledge that my research is currently possible thanks to funds for international young scientists provided by the <a href="https://www.nsfc.gov.cn/english/site_1/index.html" target="_blank">National Natural Science Foundation of China</a> (NSFC). Previously, I was funded by a prestigious <a href="http://international-talent.cas.cn/front/pc.html#/bicsite/pifiIntroduce/pifi" target="_blank">PIFI fellowship</a> from the <a href="https://english.cas.cn" target="_blank">Chinese Academy of Sciences (CAS)</a>.</p>
  <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin: 2rem 0;">
    <img src="/images/logos_cas_nsfc.png" alt="CAS logo" style="height: 60px;">
    <img src="/images/logo_nsfc.png" alt="NSFC logo" style="height: 60px;">
  </div>
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem;">Contact</h2>
  <p>Feel free to explore my website and get in touch with me for any inquiries or collaborations. Please use the form below to contact me. Thanks for your interest in my work.</p>

  <form id="contact-form" method="post" action="https://formspree.io/f/mrgwblad" style="background: #f8f9fa; padding: 2rem; border-radius: 10px;">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email">
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="5"></textarea>
    </div>
    <button type="submit" class="button">Send Message</button>
  </form>
</div>
