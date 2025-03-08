
const calculateAverageRating = (comments) => {
    if (comments.length === 0) return 5.0;
    
    const totalRating = comments.reduce((sum, comment) => {
      
      const rating = comment.rating ? parseInt(comment.rating) : 5;
      return sum + rating;
    }, 0);
    
    return (totalRating / comments.length).toFixed(2);
  };
  
  const loadComments = () => {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsList = document.getElementById('commentsList');
    const averageRating = calculateAverageRating(comments);
    
    document.getElementById('averageRating').innerText = `Média das notas: ${averageRating}`;
    
    commentsList.innerHTML = comments.map(comment => `
      <div class="comment">
        <p><strong>${comment.name || 'Anônimo'}:</strong> ${comment.text}</p>
        <p>Nota: ${comment.rating || 5}</p>
        <small>${comment.date}</small>
      </div>
    `).join('');
  };
  
  
  const saveComment = (name, commentText, rating) => {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const newComment = {
      name: name,
      text: commentText,
      rating: parseInt(rating),
      date: new Date().toLocaleString()
    };
    comments.unshift(newComment); 
    localStorage.setItem('comments', JSON.stringify(comments));
  };
  
  document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const ratingInput = document.getElementById('ratingInput');
    
    const name = nameInput.value.trim();
    const commentText = commentInput.value.trim();
    const rating = ratingInput.value.trim();
  
    if (name && commentText && rating) {
      saveComment(name, commentText, rating);
      nameInput.value = '';
      commentInput.value = '';
      ratingInput.value = '';
      loadComments();
    }
  });
  
  window.onload = loadComments;
  