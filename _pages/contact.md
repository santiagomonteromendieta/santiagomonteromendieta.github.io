---
#title: "Contact"
permalink: /contact/
author_profile: true
---

<style>
.social-links {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2em;
}

.social-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #5474B8;
    color: white;
    text-decoration: none; /* Remove underline */
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease; /* Add color transition */
    white-space: nowrap;
}

.social-link:hover {
    background-color: #405d9c;
    color: white; /* Keep text color white on hover */
    text-decoration: none; /* Ensure no underline on hover */
}

.section-card {
    padding: 2rem;
    margin-bottom: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.expertise-list {
    margin: 1.5rem 0;
    line-height: 1.6;
}

.expertise-list li {
    margin-bottom: 1.2rem;
    padding-left: 1rem;
    border-left: 3px solid #5474B8;
}

.journal-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 0;
    list-style: none;
}

.journal-item {
    padding: 0.8rem;
    background: #f8f9fa;
    border-radius: 5px;
    border: 1px solid #eee;
}

.journal-count {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.2rem 0.5rem;
    background: #5474B8;
    color: white;
    border-radius: 3px;
    font-size: 0.8em;
}    
</style>

<div class="social-links-container">
    <ul class="social-links">
        {% if site.author.googlescholar %}
        <li>
            <a href="{{ site.author.googlescholar }}" class="social-link" target="_blank" aria-label="Google Scholar">Google Scholar</a>
        </li>
        {% endif %}
        {% if site.author.researchgate %}
        <li>
            <a href="{{ site.author.researchgate }}" class="social-link" target="_blank" aria-label="ResearchGate">ResearchGate</a>
        </li>
        {% endif %}
        {% if site.author.github %}
        <li>
            <a href="https://github.com/{{ site.author.github }}" class="social-link" target="_blank" aria-label="GitHub">GitHub</a>
        </li>
        {% endif %}
        {% if site.author.researcherid %}
        <li>
            <a href="https://www.webofscience.com/wos/author/record/{{ site.author.researcherid }}" class="social-link" target="_blank" aria-label="ResearcherID">ResearcherID</a>
        </li>
        {% endif %}
        {% if site.author.orcid %}
        <li>
            <a href="{{ site.author.orcid }}" class="social-link" target="_blank" aria-label="ORCID">ORCID</a>
        </li>
        {% endif %}
    </ul>
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Reviewer Availability and Expertise</h2>
    <p style="line-height: 1.6; margin-bottom: 1.5rem;">Thank you for considering me as a peer reviewer. I am particularly keen to contribute to society journals and welcome opportunities to review manuscripts within my areas of expertise. These include:</p>
    <ul class="expertise-list">
        <li><strong>Population and Comparative Genomics:</strong>  Analysis of genetic variation within and between populations, including studies of selection and demographic history.</li>
        <li><strong>Phylogenetics and Phylogenomics:</strong>  Inferring evolutionary relationships using both targeted gene regions and genome-scale data.</li>
        <li><strong>Evolutionary Adaptation:</strong> Investigating the genetic basis of adaptation, with a focus on organisms inhabiting extreme environments such as high-altitude and cave ecosystems.</li>
         <li><strong>Molecular Methods:</strong> Application of techniques such as target enrichment sequencing for evolutionary studies.</li>
    </ul>
    <p style="margin: 1.5rem 0 1rem; font-weight: 500;">I have previously reviewed manuscripts for:</p>
        <ul class="journal-list">
            <li class="journal-item">
                <a href="https://bmcgenomics.biomedcentral.com" target="_blank">BMC Genomics</a>
                <span class="journal-count">3 reviews</span>
                <a href="https://www.springer.com/journal/10592" target="_blank">Conservation Genetics</a>
                <span class="journal-count">2 reviews</span>
            </li>
            <li class="journal-item">
                <a href="https://academic.oup.com/g3journal" target="_blank">G3: Genes,Genomes,Genetics</a>
                <span class="journal-count">1 review</span>
            </li>
            <li class="journal-item">
                <a href="https://academic.oup.com/gbe" target="_blank">Genome Biology and Evolution</a>
                <span class="journal-count">2 reviews</span>
            </li>
            <li class="journal-item">
                <a href="https://onlinelibrary.wiley.com/journal/1365294x" target="_blank">Molecular Ecology</a>
                <span class="journal-count">2 reviews</span>
            </li>  
            <li class="journal-item">
                <a href="https://onlinelibrary.wiley.com/journal/17550998" target="_blank">Molecular Ecology Resources</a>
                <span class="journal-count">1 review</span>
            </li>
            <li class="journal-item">
                <a href="https://journals.plos.org/plosone/" target="_blank">PLOS ONE</a>
                <span class="journal-count">3 reviews</span>
            </li>   
        </ul>  
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Get in touch</h2>
  <p>Thank you for your interest in my work. Please feel free to reach out for any inquiries about my work, life in China, or potential collaborations. You can contact me using the form below (but see the important note).</p>

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

  <p style="color: red; font-weight: bold;">Important Note:</p>
    <ul style="color: red; font-weight: bold;">
      <li>I currently <span style="text-decoration: underline;">do not</span> have available positions for PhD or MSc students.</li>
      <li>Inquiries that appear to be non-genuine (e.g., AI-generated or generic requests) will not receive a response.</li>
  </ul>
</div>
