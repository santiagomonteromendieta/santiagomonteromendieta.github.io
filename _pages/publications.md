---
layout: archive
permalink: /publications/
author_profile: true
---

{% include base_path %}

<style>
.publication-grid {
    display: grid;
    grid-template-columns: 1fr;  /* One column layout */
    gap: 2rem;
    margin-top: 2rem;
}

.publication-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    border-left: 4px solid #5474B8;
}

.publication-card:hover {
    transform: translateY(-5px);
}

.publication-image {
    height: 180px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 1.5rem;  /* Add space on the right */
    width: 30%;  /* Make the image smaller */
    float: left;  /* Align to the left */
    transition: transform 0.3s ease;
}

.publication-image:hover {
    transform: scale(1.02);
}

.publication-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
}

.publication-type {
    background: #5474B8;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9em;
    flex-grow: 1;  /* Allow the journal name to grow and take up available space */
}

.publication-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;
}

.publication-authors {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #333;
}

.publication-excerpt {
    color: #666;
    margin: 1rem 0;
    line-height: 1.6;
}

.publication-date {
    color: #888;
    font-size: 0.9em;
    margin-top: auto;
}

.publication-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.publication-actions img {
    height: 24px;
    opacity: 0.7;
    transition: opacity 0.2s ease;
}

.publication-actions img:hover {
    opacity: 1;
}

.data-access {
    border-radius: 10px;
    background: #f0f4ff;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 0.9em;
}
</style>

<div class="section-card">
<h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Publications</h2>

<p>Below is a curated list of my publications, each accompanied by a graphical abstract that visually summarizes the key findings. Click on the images or titles to access the full publications.</p>

<div class="publication-grid">
{% for post in site.publications reversed %}
    <div class="publication-card">
        <div style="display: flex; align-items: flex-start;">
            {% if post.image %}
            <a href="{{ post.url }}" target="_blank">
                <img src="{{ post.image }}" class="publication-image" alt="Graphical abstract for {{ post.title }}">
            </a>
            {% endif %}
            
            <div>
                <div class="publication-meta">
                    <span class="publication-type">
                        {{ post.journal }}  <!-- Display the journal name here -->
                    </span>
                    <span class="publication-date">{{ post.date | date: "%B %Y" }}</span>
                </div>

                <h3 class="publication-title">
                    <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
                </h3>

                <div class="publication-authors">
                    <strong>{{ post.authors }}</strong>  <!-- List of authors -->
                </div>

                <div class="publication-excerpt">
                    {{ post.excerpt | strip_html | truncate: 140 }}
                </div>

                <div class="publication-actions">
                    <a href="{{ post.url }}" target="_blank">
                        <img src="/images/pdf_logo.png" alt="PDF" title="Download PDF">
                    </a>
                    <div class="altmetric-embed" data-link-target="_blank" data-badge-type="donut" data-doi="{{ post.doi }}"></div>
                </div>
            </div>
        </div>

        {% if post.data_access %}
        <div class="data-access">
            <strong>Data Access:</strong> {{ post.data_access }}
        </div>
        {% endif %}
    </div>
{% endfor %}
</div>
</div>

<div class="section-card">
<h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Doctoral Dissertation</h2>

<div style="display: flex; gap: 2rem; align-items: flex-start;">
    <img src="/images/phdthesis_coverpage.png" alt="PhD Thesis Cover" style="width: 150px; border-radius: 8px; border: 1px solid #ddd;">
    <div>
        <p>In my doctoral dissertation, I researched into evolutionary genetics using state-of-the-art genomic tools. My focus extended beyond traditional model organisms to explore how species adapted to diverse altitudinal environments and the genetic underpinnings of adaptive traits in high-altitude habitats.</p>
        <p><strong>Montero-Mendieta, S.</strong> (2019). <a href="https://santiagomonteromendieta.github.io/files/phdthesis.pdf" target="_blank">A genomic view on the adaptation and diversification of natural populations</a>. (Tesis Doctoral Inédita). Universidad de Sevilla, Sevilla.</p>
        <a href="https://santiagomonteromendieta.github.io/files/phdthesis.pdf" target="_blank">
            <img src="/images/pdf_logo.png" alt="PDF" title="Download PDF" style="height: 24px;">
        </a>
    </div>
</div>
</div>
