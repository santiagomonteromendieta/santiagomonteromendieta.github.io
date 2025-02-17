<style>
/* Improved PDF Button */
.pdf-button {
    background: #5474B8;
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none !important;
    transition: background 0.2s ease;
}

.pdf-button svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
}

.pdf-button:hover {
    background: #405d9c;
}

/* Enhanced Image Styling */
.publication-image-container {
    margin: 1rem 0;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.publication-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

/* Improved Layout Structure */
.publication-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5rem;
}

.publication-content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
}

/* Altmetric Positioning */
.altmetric-container {
    margin-top: 1rem;
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

        <div class="publication-content">
            <!-- Left Column: Image & Altmetric -->
            <div>
                <div class="publication-image-container">
                    <a href="{{ post.url }}" target="_blank">
                        <img src="{{ post.image }}" class="publication-image" alt="Graphical abstract">
                    </a>
                </div>
                <div class="altmetric-container">
                    <div class="altmetric-embed" data-doi="{{ post.doi }}"></div>
                </div>
            </div>

            <!-- Right Column: Content -->
            <div>
                <h3 class="publication-title">
                    <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
                </h3>

                <div class="publication-authors">
                    {{ post.authors }}
                </div>

                <div class="publication-excerpt">
                    {{ post.excerpt | strip_html }}
                </div>

                <a href="{{ post.url }}" class="pdf-button" target="_blank">
                    <svg viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <path d="M14 3v5h5m-5 7H9m2 4H9m4-8H9"/>
                    </svg>
                    Download PDF
                </a>
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
