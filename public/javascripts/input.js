var ta = document.querySelector('textarea');
ta.style.display = 'none';
autosize(ta);

// Change layout
ta.style.display = 'block';
autosize.update(ta);