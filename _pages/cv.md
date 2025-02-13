/* --------------------------------------------------------------
   More Creative CV Page Styles (ADD THIS SECTION TO main.scss)
   -------------------------------------------------------------- */

.cv-section-card { /* Specific section-card styling for CV page */
  border-left: 3px solid #4c6ef5; /* Add a colored left border to cards */
  padding-left: 2.2rem; /* Increase left padding to offset border */
  background: #fff; /* Change card background to pure white */
  box-shadow: 0 4px 8px rgba(0,0,0,0.05); /* Slightly stronger shadow */
}

.cv-section-card h2 { /* Style CV section titles */
  font-size: 1.3rem; /* Slightly larger section titles */
  margin-top: 1.6em; /* Adjust top margin */
  margin-bottom: 0.6em; /* Adjust bottom margin */
  border-bottom: none; /* Remove underline from titles */
  padding-bottom: 0; /* Remove padding below title */
  color: #333; /* Darker title color */
}

.cv-section-card h2 i { /* Style icons in CV section titles */
  color: #777; /* Muted grey icon color */
  margin-right: 0.4em;
  font-size: 0.9em; /* Slightly smaller icons */
}

.cv-timeline { /* Style for timeline lists in CV */
  list-style: none;
  padding-left: 0;
}

.cv-timeline .timeline-item {
  margin-bottom: 1.5em; /* Adjust spacing between timeline items */
}

.cv-timeline .timeline-info { /* Style for timeline item paragraphs */
  margin-bottom: 0.4em; /* Reduce margin below timeline paragraphs */
}

.cv-list { /* General styles for lists in CV */
  list-style: disc; /* Revert to disc bullets for other lists */
}

.cv-list li {
  margin-bottom: 0.4em; /* Reduce spacing between list items in CV */
}

.cv-list .list-info { /* Style for paragraphs within CV lists */
   margin-bottom: 0.4em; /* Reduce margin below list paragraphs */
}
