---
layout: archive
permalink: /publications/
author_profile: true
---

<style>
/* Publication Card */
.publication-card {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
    margin-bottom: 2rem;
}

.publication-card:hover {
    transform: translateY(-3px);
}

/* Header Section */
.publication-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.publication-journal {
    background: #5474B8;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: 500;
}

.publication-date {
    font-size: 0.9em;
    color: #666;
}

/* Title & Authors */
.publication-title {
    font-size: 1.1rem;
    margin: 0.5rem 0;
}

.publication-title a {
    color: #222;
    text-decoration: none;
}

.publication-title a:hover {
    color: #405d9c;
}

.publication-authors {
    font-size: 0.9em;
    color: #444;
    margin-bottom: 1rem;
}

/* Graphical Abstract */
.publication-image-container {
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
    background: #f8f9fa;
    border: 1px solid #eee;
}

.publication-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.publication-image:hover {
    transform: scale(1.02);
}

/* Action Bar */
.publication-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
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

.pdf-button:hover {
    background: #5474B8;
}

.pdf-button svg {
    width: 18px;
    height: 18px;
    fill: #5474B8;
}

.pdf-button:hover svg {
    fill: white;
}

/* Altmetric Badge */
.altmetric-embed {
    margin-left: auto;
}

/* Mobile Optimization */
@media (max-width: 768px) {
    .publication-header {
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .publication-image {
        height: 150px;
    }
}
</style>

<div class="publication-grid">
{% for post in site.publications reversed %}
    <div class="publication-card">
        <!-- Header with Journal & Date -->
        <div class="publication-header">
            <span class="publication-journal">{{ post.journal }}</span>
            <span class="publication-date">{{ post.date | date: "%B %Y" }}</span>
        </div>

        <!-- Title & Authors -->
        <h3 class="publication-title">
            <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
        </h3>
        <div class="publication-authors">
            {{ post.authors }}
        </div>

        <!-- Graphical Abstract -->
        <div class="publication-image-container">
            <a href="{{ post.url }}" target="_blank">
                <img src="{{ post.image }}" class="publication-image" alt="Graphical abstract">
            </a>
        </div>

        <!-- Action Bar -->
        <div class="publication-actions">
            <a href="{{ post.url }}" class="pdf-button" target="_blank">
                <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <path d="M14 3v5h5m-5 7H9m2 4H9m4-8H9"/>
                </svg>
            </a>
            
            <div class="altmetric-embed" 
                 data-badge-type="donut" 
                 data-doi="{{ post.doi }}"
                 data-badge-popover="left"></div>
        </div>
    </div>
{% endfor %}
</div>
