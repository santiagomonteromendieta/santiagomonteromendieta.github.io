---
layout: archive
permalink: /news/
author_profile: true
---

{% include base_path %}

<style>
.media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.media-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    border-left: 4px solid #5474B8;
}

.media-card:hover {
    transform: translateY(-5px);
}

.media-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
}

.media-type {
    background: #5474B8;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9em;
}

.media-type.personal {
    background: #4CAF50; /* Green color for personal content */
}
    
.media-excerpt {
    color: #666;
    margin: 1rem 0;
    line-height: 1.6;
}

.media-date {
    color: #888;
    font-size: 0.9em;
    margin-top: auto;
}

.filter-buttons {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
}

.filter-button {
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    background: #f0f0f0;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.filter-button.active {
    background: #5474B8;
    color: white;
}

.media-image {
    height: 180px;
    border-radius: 8px;
    object-fit: cover;
    margin: 1rem 0;
    width: 100%;
    transition: transform 0.3s ease;
}

.media-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.media-image-placeholder {
    height: 180px;
    background: #f0f4ff;
    border-radius: 8px;
    margin: 1rem 0;
}

.card-link {
    text-decoration: none !important;
    color: inherit;
    display: block;
    height: 100%;
}

.card-link:hover {
    text-decoration: none !important;
}

.media-image {
    cursor: pointer;
}

.color-indicator {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 3px;
    margin: 0 3px -2px;
    border: 1px solid rgba(0,0,0,0.1);
}

.external-indicator {
    background: #5474B8; /* Your existing blue */
}

.personal-indicator {
    background: #4CAF50; /* Your existing green */
}
    
.media-excerpt {
    position: relative;
    max-height: 6em; /* Show 4 lines (1.5em line-height) */
    overflow: hidden;
    margin: 1rem 0 1.5rem;
}

.media-excerpt::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2em;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%);
}

.read-more-cta {
    color: #5474B8;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 0.5rem;
    position: relative;
    z-index: 1;
}

.read-more-cta::after {
    content: "→";
    font-size: 1.1em;
}
    
</style>

<div class="section-card">
<h2 style="color: #5474B8; border-bottom: 3px solid #5474B8; padding-bottom: 0.5rem; margin-top: 0.5rem;">Research Updates & Media</h2>

<p>My work has been featured in various media outlets; below I've selected some of them. Alongside these external highlights (<span class="color-indicator external-indicator"></span>), you'll find original updates written personally by me (<span class="color-indicator personal-indicator"></span>). Feel free to check them all! 😁</p>

<div class="filter-buttons">
    <button class="filter-button active" data-filter="all">All</button>
    <button class="filter-button" data-filter="interview">Interviews</button>
    <button class="filter-button" data-filter="spotlight">Spotlights</button>
</div>

<div class="media-grid">
{% for post in site.portfolio reversed %}
    <div class="media-card" data-type="{{ post.category | downcase }}">
        <a href="{{ post.url }}" class="card-link">
            <div class="media-header">
                <h3 style="margin: 0;">{{ post.title }}</h3>
            </div>

            {% assign first_image = post.excerpt | split: '<img' | last %}
            {% if first_image %}
                {% assign image_src = first_image | split: "src='" | last | split: "'" | first %}
                {% if image_src == "" %}
                    {% assign image_src = first_image | split: 'src="' | last | split: '"' | first %}
                {% endif %}
                <img src="{{ image_src }}" class="media-image" alt="Article preview">
            {% endif %}
        
            <div class="media-meta">
                <span class="media-type {% if post.source == 'personal' %}personal{% endif %}">
                    {% if post.category == 'Interview' %}🎤 Interview
                    {% else %}💡 Spotlight{% endif %}
                </span>
                <span class="media-date">{{ post.date | date: "%B %Y" }}</span>
            </div>
            
            <div class="media-excerpt">{{ post.excerpt_text | strip_html | truncatewords: 29, "..." }}</div>
            <span class="read-more-cta">Read more</span>
        </a>
    </div>
{% endfor %}
</div>

<script>
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-button.active').classList.remove('active');
        button.classList.add('active');
        const filter = button.dataset.filter;
        
        document.querySelectorAll('.media-card').forEach(card => {
            card.style.display = (filter === 'all' || card.dataset.type === filter) 
                ? 'block' : 'none';
        });
    });
});
</script>
