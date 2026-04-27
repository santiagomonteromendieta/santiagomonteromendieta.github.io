---
layout: archive
title: "Availability as a Reviewer and Expertise"
permalink: /reviewing/
author_profile: true
---

<style>
.section-card {
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
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

<div class="section-card">
  <h2 id="reviewer-availability" style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Reviewer Availability and Expertise</h2>
    <p style="line-height: 1.6; margin-bottom: 1.5rem;">Thank you for considering me as a peer reviewer. I'm especially enthusiastic about contributing to society journals and would welcome the chance to review manuscripts in my areas of expertise, which include:</p>
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
    <p style="margin: 1.5rem 0 1rem; font-weight: 500;">To date, I have reviewed manuscripts for the following journals:</p>
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

<script>
(function() {
  const list = document.querySelector('.journal-list');
  if (!list) return;
  const items = Array.from(list.children);
  items.sort((a, b) => {
    const aVal = parseInt(a.querySelector('.journal-count')?.textContent.trim() || '0');
    const bVal = parseInt(b.querySelector('.journal-count')?.textContent.trim() || '0');
    return bVal - aVal;
  });
  items.forEach(item => list.appendChild(item));
})();
</script>

<p><strong>Note:</strong> numbers indicate verified peer reviews according to <a href="https://www.webofscience.com/wos/author/record/P-3298-2014" target="_blank">my Web of Science profile</a>.</p>

</div>
