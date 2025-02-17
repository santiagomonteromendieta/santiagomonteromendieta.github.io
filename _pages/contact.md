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
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Expertise List - Icon Approach */
.expertise-list {
    margin: 1.5rem 0;
    padding-left: 0;
    display: grid;
    gap: 1.2rem;
}

.expertise-item {
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: start;
    gap: 1rem;
    padding: 0.8rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.expertise-icon {
    width: 32px;
    height: 32px;
    background: #5474B8;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2em;
}

/* Journal List - Creative Layout */
.journal-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1.5rem 0;
    padding: 0;
}

.journal-item {
    display: inline-flex;
    align-items: center;
    background: white;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    transition: transform 0.2s ease;
    border: 1px solid #e0e0e0;
}

.journal-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

.journal-item a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #5474B8;
}

.journal-count {
    background: #e0e7ff;
    color: #405d9c;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-left: 0.75rem;
    font-size: 0.9em;
    font-weight: 500;
}

/* Small icon styling */
.journal-icon {
    width: 18px;
    height: 18px;
    opacity: 0.8;
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
        <li class="expertise-item">
            <div class="expertise-icon">🧬</div>
            <div><strong>Population and Comparative Genomics:</strong> Analysis of genetic variation within and between populations, including studies of selection and demographic history.</div>
        </li>
        <li class="expertise-item">
            <div class="expertise-icon">🌿</div>
            <div><strong>Phylogenetics and Phylogenomics:</strong>  Inferring evolutionary relationships using both targeted gene regions and genome-scale data.</div>
        </li>
        <li class="expertise-item">
            <div class="expertise-icon">🦋</div>
            <div><strong>Evolutionary Adaptation:</strong> Investigating the genetic basis of adaptation, with a focus on organisms inhabiting extreme environments such as high-altitude and cave ecosystems.</div>
        </li>
        <li class="expertise-item">
            <div class="expertise-icon">🧪</div>
            <div><strong>Molecular Methods:</strong> Application of techniques such as target enrichment sequencing for evolutionary studies.</div>
         </li>        
    </ul>
    <p style="margin: 1.5rem 0 1rem; font-weight: 500;">I have previously reviewed manuscripts for:</p>
        <ul class="journal-list">
            <li class="journal-item">
                <a href="https://bmcgenomics.biomedcentral.com" target="_blank">
                    BMC Genomics
                </a>
                <span class="journal-count">3</span>
            </li>
            <li class="journal-item">
                <a href="https://www.springer.com/journal/10592" target="_blank">
                    Conservation Genetics
                </a>
                <span class="journal-count">2</span>
            </li>
            <li class="journal-item">
                <a href="https://academic.oup.com/g3journal" target="_blank">
                    G3: Genes,Genomes,Genetics
                </a>
                <span class="journal-count">1</span>
            </li>
            <li class="journal-item">
                <a href="https://academic.oup.com/gbe" target="_blank">
                    Genome Biology and Evolution
                </a>
                <span class="journal-count">2</span>
            </li>                        
            <li class="journal-item">
                <a href="https://onlinelibrary.wiley.com/journal/1365294x" target="_blank">
                    Molecular Ecology
                </a>
                <span class="journal-count">2</span>
            </li>  
            <li class="journal-item">
                <a href="https://onlinelibrary.wiley.com/journal/17550998" target="_blank">

                    Molecular Ecology Resources
                </a>
                <span class="journal-count">1</span>
            </li>  
            <li class="journal-item">
                <a href="https://journals.plos.org/plosone/" target="_blank">
                    PLOS ONE
                </a>
                <span class="journal-count">3</span>
            </li>   
        </ul>  
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Get in Touch</h2>
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
