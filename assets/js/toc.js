document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2, h3');
    const tocList = document.getElementById('toc-list');
  
    headings.forEach(heading => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      
      link.textContent = heading.textContent;
      link.href = `#${heading.id}`;
      
      listItem.style.marginLeft = heading.tagName === 'H3' ? '1rem' : '0';
      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });
  });