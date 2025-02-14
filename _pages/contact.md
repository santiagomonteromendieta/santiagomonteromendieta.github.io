---
#title: "Contact"
permalink: /contact/
author_profile: true
---

<style>
.social-icons {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.5rem; /* Space between buttons */
    justify-content: center; /* Center horizontally */
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    margin-bottom: 2em; /* Space below the icons */
}

.social-button {
    display: inline-flex; /* Use inline-flex for centering content */
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    width: 50px; /* Fixed width */
    height: 50px; /* Fixed height */
    border-radius: 50%; /* Circular shape */
    background-color: #5474B8; /* Your main color */
    color: white; /* Text/icon color */
    text-decoration: none; /* Remove underline from links */
    transition: all 0.3s ease; /* Smooth transition for hover effects */
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow */
}

.social-button:hover {
    background-color: #405d9c; /* Darker color on hover */
    transform: translateY(-2px); /* Slight upward movement on hover */
}

.social-button svg {
    width: 24px; /* Icon size */
    height: 24px; /* Icon size */
}
/*ORCID icon*/
.social-button i{
     font-size: 1.7em;
     color: white;
}
</style>

<div class="social-icons-container">
    <ul class="social-icons">
        {% if site.author.googlescholar %}
        <li>
            <a href="{{ site.author.googlescholar }}" class="social-button" target="_blank" aria-label="Google Scholar">
                <!-- Google Scholar SVG -->
                <svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M488.727 276.602l-146.29-84.451c-14.62-8.445-25.613-23.39-28.886-40.272-.913-4.693-1.467-9.58-1.467-14.669 0-5.079.554-9.966 1.466-14.658 3.273-16.883 14.266-31.828 28.886-40.272l146.29-84.451c8.255-4.767 17.857-7.371 27.456-7.183 9.6.188 18.752 3.173 25.379 8.547 6.628 5.374 10.654 12.66 11.55 20.795.897 8.135-1.737 16.421-7.183 23.127l-98.649 56.959L416 187.467c-29.574 17.071-59.696 34.477-88.198 53.375 28.502 18.898 58.624 36.303 88.198 53.375l98.649 56.959c5.446 6.706 8.08 15.002 7.183 23.127-.897 8.135-4.922 15.421-11.55 20.795-6.627 5.374-15.779 8.359-25.379 8.547-9.599.188-19.201-2.416-27.456-7.183zM218.468 187.467l-98.649-56.959c-5.446-6.706-8.08-15.002-7.183-23.127.897-8.135 4.922-15.421 11.55-20.795 6.627-5.374 15.779-8.359 25.379-8.547 9.599-.188 19.201 2.416 27.456 7.183l146.29 84.451c14.62 8.445 25.613 23.39 28.886 40.272.913 4.693 1.467 9.58 1.467 14.669 0 5.079-.554 9.966-1.466 14.658-3.273 16.883-14.266 31.828-28.886 40.272l-146.29 84.451c-8.255 4.767-17.857 7.371-27.456 7.183-9.6-.188-18.752-3.173-25.379-8.547-6.628-5.374-10.654-12.66-11.55-20.795-.896-8.135 1.737-16.421 7.183-23.127l98.649-56.959-98.649-56.959L218.468 187.467zm94.266 53.035c-48.884 28.228-97.102 58.622-142.668 89.544-5.665-13.379-8.617-27.853-8.617-42.91 0-15.067 2.952-29.541 8.617-42.92 45.566 30.922 93.784 61.316 142.668 89.545zm-23.006-13.447c-1.841-1.063-3.683-2.126-5.502-3.214-25.86-15.459-50.791-33.329-74.455-52.956-15.459 25.86-33.329 50.791-52.956 74.455 19.627 23.664 44.558 41.534 74.455 52.956 1.819-1.088 3.661-2.15 5.502-3.214 28.432-16.418 57.378-32.476 85.969-50.778-28.591-18.302-57.537-34.36-85.969-50.778h.001z"/>
                </svg>
            </a>
        </li>
        {% endif %}
        {% if site.author.researchgate %}
        <li>
            <a href="{{ site.author.researchgate }}" class="social-button" target="_blank" aria-label="ResearchGate">
                <!-- ResearchGate SVG -->
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.223 17.905h-.047c-1.079 0-2.021-.666-2.403-1.646-.477-1.215.115-2.626 1.319-3.154 1.222-.535 2.682-.169 3.496.82.385.369.57.896.488 1.45-.083.552-.476 1.022-1.02 1.23-.92.29-1.915.346-2.843.167v.133c0 1.215 2.021 1.21 2.664.598.224-.215.358-.517.358-.843h.598c0 .597-.261 1.167-.719 1.56-.666.598-1.689.777-2.603.598-.907-.18-1.6-.821-1.785-1.73h3.363v-.598H4.418c0 .993.812 1.794 1.805 1.794zM18.708 21.715H5.292V24h13.416v-2.285zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.14 15.523c-.166.385-.516.643-.912.643h-.059c-.385 0-.731-.258-.893-.627l-2.155-5.271-2.155 5.271c-.161.369-.508.627-.893.627h-.059c-.396 0-.746-.258-.912-.643l-1.215-3.007c-.08-.202-.125-.418-.125-.635v-3.795c0-.597.485-1.082 1.082-1.082h1.649c.597 0 1.082.485 1.082 1.082v3.795c0 .217-.045.433-.125.635l1.215 3.007 2.155-5.271c.161-.369.508-.627.893-.627h.059c.396 0 .746.258.912.643l2.155 5.271 1.215-3.007c.08-.202.125-.418.125-.635v-3.795c0-.597.485-1.082 1.082-1.082h1.649c.597 0 1.082.485 1.082 1.082v3.795c0 .217-.045.433-.125.635l-1.215 3.007z"/></svg>
            </a>
        </li>
        {% endif %}
        {% if site.author.github %}
        <li>
            <a href="https://github.com/{{ site.author.github }}" class="social-button" target="_blank" aria-label="GitHub">
                <!-- GitHub SVG -->
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.19.694.801.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
        </li>
        {% endif %}
        {% if site.author.researcherid %}
        <li>
          <a href="https://www.webofscience.com/wos/author/record/{{ site.author.researcherid }}" class="social-button" target="_blank" aria-label="ResearcherID">
                <!-- Web of Science SVG -->
               <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.148 23.433L.026 19.717l5.518-3.199c.102.063.198.141.285.234l-4.68 7.681zm.594-8.257l4.969 3.413c.455-.437.875-.944 1.26-1.511L2.355 13.66l-.613 1.516zm3.539-5.869c.716 1.228 1.663 2.279 2.796 3.122l5.486-7.992c-1.455-.85-3.11-1.397-4.859-1.59l-3.423 6.46zm4.27-6.261l5.132 7.458c2.094-1.638 4.52-2.987 7.243-4.016V0l-12.375 4.016zm10.604 20.842l-4.818-7.738c.08-.088.17-.163.264-.226l5.642 3.255 4.161-7.284-.011 3.983c-2.735.888-5.249 2.167-7.48 3.777l1.99 7.969c.145.031.318.061.487.061.13 0 .252-.014.363-.041h.002zM12.314 14.78l-4.927-7.156c1.454.85 3.11 1.397 4.858 1.59l4.98-7.474v3.799c-2.585.983-4.903 2.297-6.911 4.031l-.001 5.21z"/></svg>
            </a>
        </li>
        {% endif %}
        {% if site.author.orcid %}
        <li>
            <a href="{{ site.author.orcid }}" class="social-button" target="_blank" aria-label="ORCID">
                <!--  ORCID icon-->
                <i class="fab fa-fw fa-orcid" aria-hidden="true"></i>
            </a>
       </li>
        {% endif %}
    </ul>
</div>

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Get in touch</h2>
  <p>Thank you for your interest in my work. Please feel free to reach out for any inquiries about my work, life in China, or potential collaborations. You can contact me using the form below.</p>

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

<div class="section-card">
  <h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Reviewer Availability and Expertise</h2>
    <p>Thank you for considering me as a peer reviewer.  I am particularly keen to contribute to society journals and welcome opportunities to review manuscripts within my areas of expertise.  These include:</p>
    <ul>
        <li><strong>Population and Comparative Genomics:</strong>  Analysis of genetic variation within and between populations, including studies of selection and demographic history.</li>
        <li><strong>Phylogenetics and Phylogenomics:</strong>  Inferring evolutionary relationships using both targeted gene regions and genome-scale data.</li>
        <li><strong>Evolutionary Adaptation:</strong> Investigating the genetic basis of adaptation, with a focus on organisms inhabiting extreme environments such as high-altitude and cave ecosystems.</li>
         <li><strong>Molecular Methods:</strong> Application of techniques such as target enrichment sequencing for evolutionary studies.</li>
    </ul>
    <p style = "margin-top: 0.5rem">I have previously reviewed manuscripts for the following journals:</p>
    <ul>
        <li><a href="https://bmcgenomics.biomedcentral.com" target="_blank">BMC Genomics</a> (3)</li>
        <li><a href="https://www.springer.com/journal/10592" target="_blank">Conservation Genetics</a> (2)</li>
        <li><a href="https://academic.oup.com/g3journal" target="_blank">G3: Genes,Genomes,Genetics</a> (1)</li>
        <li><a href="https://academic.oup.com/gbe" target="_blank">Genome Biology and Evolution</a> (2)</li>
        <li><a href="https://onlinelibrary.wiley.com/journal/1365294x" target="_blank">Molecular Ecology</a> (2)</li>
        <li><a href="https://onlinelibrary.wiley.com/journal/17550998" target="_blank">Molecular Ecology Resources</a> (1)</li>
        <li><a href="https://journals.plos.org/plosone/" target="_blank">PLOS ONE</a> (3)</li>
    </ul>
</div>
