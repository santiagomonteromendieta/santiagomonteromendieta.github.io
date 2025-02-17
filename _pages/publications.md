---
layout: archive
permalink: /publications/
author_profile: true
---

<style>
.publication-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    margin-bottom: 2rem;
}

.publication-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.publication-journal {
    background: #5474B8;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: 500;
}

.publication-date {
    color: #666;
    font-size: 0.9em;
}

.publication-content {
    display: grid;
    grid-template-columns: 200px 1fr auto;
    gap: 1.5rem;
    align-items: start;
}

.publication-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #eee;
}

.publication-info {
    padding: 0.5rem 0;
}

.publication-title {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    line-height: 1.3;
}

.publication-authors {
    color: #444;
    font-size: 0.9em;
}

.publication-actions {
    margin-top: 1rem;
}

.pdf-button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #f0f4ff;
    transition: all 0.2s ease;
}

.pdf-button svg {
    width: 18px;
    height: 18px;
    fill: #5474B8;
}

.pdf-button:hover {
    background: #5474B8;
}

.pdf-button:hover svg {
    fill: white;
}

@media (max-width: 768px) {
    .publication-content {
        grid-template-columns: 1fr;
    }
    
    .publication-image {
        height: 150px;
    }
}
</style>

<div class="publication-grid">
{% for post in site.publications reversed %}
    <div class="publication-card">
        <div class="publication-header">
            <span class="publication-journal">{{ post.journal }}</span>
            <span class="publication-date">{{ post.date | date: "%B %Y" }}</span>
        </div>

        <div class="publication-content">
            <!-- Left Column: Graphical Abstract -->
            <a href="{{ post.url }}" class="publication-image-container">
                <img src="{{ post.image }}" class="publication-image" alt="Graphical abstract">
            </a>

            <!-- Middle Column: Title & Authors -->
            <div class="publication-info">
                <h3 class="publication-title">
                    <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
                </h3>
                <div class="publication-authors">
                    {{ post.authors }}
                </div>
            </div>

            <!-- Right Column: Altmetric -->
            <div class="altmetric-embed" 
                 data-badge-type="donut" 
                 data-doi="{{ post.doi }}"
                 data-badge-popover="left"></div>
        </div>

        <!-- Bottom Row: PDF Button -->
        <div class="publication-actions">
            <a href="{{ post.url }}" class="pdf-button" target="_blank">
                <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <path d="M14 3v5h5m-5 7H9m2 4H9m4-8H9"/>
                </svg>
            </a>
        </div>
    </div>
{% endfor %}
</div>
