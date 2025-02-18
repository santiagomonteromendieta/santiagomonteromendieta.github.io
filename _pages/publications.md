---
layout: archive
permalink: /publications/
author_profile: true
---

<style>
/* Publication Card */
.publication-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 4px solid #5474B8;
    margin-bottom: 2rem;
    transition: transform 0.2s ease;
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
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: 500;
}

.publication-date {
    color: #666;
    font-size: 0.9em;
}

/* Content Layout */
.publication-content {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 1.5rem;
    align-items: start;
}

.publication-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #eee;
    transition: transform 0.3s ease;
}

.publication-image:hover {
    transform: scale(1.02);
}

.publication-info {
    padding: 0.5rem 0;
}

.publication-title {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    line-height: 1.3;
}

.publication-title a {
    color: #222;
    text-decoration: none;
}

.publication-title a:hover {
    color: #405d9c;
}

.publication-authors {
    color: #444;
    font-size: 0.9em;
}

/* Action Bar */
.publication-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
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

.altmetric-badge {
    background: #f0f4ff;
    border-radius: 16px;
    padding: 0.3rem 0.8rem;
    display: inline-flex;
    align-items: center;
    transition: background 0.2s ease;
}

.altmetric-badge:hover {
    background: #e0e7ff;
}

.altmetric-embed {
    transform: scale(0.8);
    margin: -4px;
}

/* Mobile Optimization */
@media (max-width: 768px) {
    .publication-content {
        grid-template-columns: 1fr;
    }
    
    .publication-image {
        height: 150px;
    }
}
</style>

<div class="section-card">
<h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Publications</h2>

<p>Below is a curated list of my publications, each accompanied by a graphical abstract that visually summarizes the key findings.</p>

    <div class="publication-grid">
    {% for post in site.publications reversed %}
        <div class="publication-card">
            <!-- Header with Journal & Date -->
            <div class="publication-header">
                <span class="publication-journal">{{ post.journal }}</span>
                <span class="publication-date">{{ post.date | date: "%B %Y" }}</span>
            </div>
    
            <!-- Content: Image + Info -->
            <div class="publication-content">
                <!-- Left Column: Graphical Abstract -->
                <a href="{{ post.url }}" class="publication-image-container">
                    <img src="{{ post.image }}" class="publication-image" alt="Graphical abstract">
                </a>
    
                <!-- Right Column: Title & Authors + Actions -->
                <div class="publication-info">
                    <h3 class="publication-title">
                        <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
                    </h3>
                    <div class="publication-authors">
                        {{ post.authors }}
                    </div>
                    
                    <!-- Action Bar -->
                    <div class="publication-actions">
                        <a href="{{ post.url }}" class="pdf-button" target="_blank">
                            <svg viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                <path d="M14 3v5h5m-5 7H9m2 4H9m4-8H9"/>
                            </svg>
                        </a>
                        
                        <div class="altmetric-badge">
                            <div class="altmetric-embed"
                                data-badge-type="2"
                                data-doi="{{ post.doi }}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {% endfor %}
    </div>
</div>
