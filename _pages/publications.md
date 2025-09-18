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
}

.publication-info {
    padding: 0 0;
}

.publication-title {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    line-height: 1.3;
}

.publication-authors {
    color: #444;
    font-size: 0.9em;
    margin-bottom: 1rem;
}

/* Action Bar */
.publication-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.action-button {
    background: #f0f4ff;
    color: #5474B8;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9em;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
}

.action-button:hover {
    background: #e0e7ff;
    color: #405d9c;
}

.download-button {
    background: #ff4444;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.download-button:hover {
    background: #cc0000;
}

.download-button svg {
    width: 18px;
    height: 18px;
    fill: white;
}

/* Mobile Optimization */
@media (max-width: 768px) {
    .publication-content {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
    
    .publication-image {
        height: 150px;
        order: 2;
    }
    
    .publication-info {
        order: 1;
    }
}

/* Note label styling */
.note-label {
    font-style: normal;
    color: #5474B8; 
    font-weight: 600;
}
   
</style>

<div class="section-card">
<h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Publication List</h2>

<p>All my papers and doctoral thesis can be found below. A plus sign (+) indicates <strong>co-first authorship</strong>; specific contributions are detailed within the publications.</p>

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
            <div class="publication-image-container">
                <img src="{{ post.image }}" class="publication-image" alt="Graphical abstract">
            </div>

            <!-- Right Column: Title & Authors + Actions -->
            <div class="publication-info">
                <h3 class="publication-title">
                    {{ post.title }}
                </h3>
                <div class="publication-authors">
                    {{ post.authors | safe }}
                </div>
                
                <!-- Action Bar -->
                <div class="publication-actions">
                    {% if post.article_url %}
                    <a href="{{ post.article_url }}" class="action-button" target="_blank">
                        Article
                    </a>
                    {% endif %}
                    {% if post.poster_url %}
                    <a href="{{ post.poster_url }}" class="action-button" target="_blank">
                        Poster
                    </a>
                    {% endif %}
                    {% if post.github_url %}
                    <a href="{{ post.github_url }}" class="action-button" target="_blank">
                        Code
                    </a>
                    {% endif %}
                    {% if post.ncbi_url %}
                    <a href="{{ post.ncbi_url }}" class="action-button" target="_blank">
                        Data
                    </a>
                    {% endif %}
                    {% if post.cncb_url %}
                    <a href="{{ post.cncb_url }}" class="action-button" target="_blank">
                        Data
                    </a>
                    {% endif %}
                    {% if post.scholar_url %}
                    <a href="{{ post.scholar_url }}" class="action-button" target="_blank">
                        Google Scholar
                    </a>
                    {% endif %}
                    {% if post.pdf_url %}
                    <a href="{{ post.pdf_url }}" class="download-button" target="_blank">
                        <svg viewBox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
{% endfor %}
</div>

</div>
