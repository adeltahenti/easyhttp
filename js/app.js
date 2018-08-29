const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
    const postsList = JSON.parse(posts);
    let output = '';
    postsList.forEach(post => {
      output += `
      <li class="list-group-item">
        <ul class="list-group">
          <li class="list-group-item"><strong>User Id: </strong>${post.userId}</li>
          <li class="list-group-item"><strong>Post Id: </strong>${post.id}</li>
          <li class="list-group-item" style="background:rgb(255, 150, 101);"><strong>Title: </strong>${post.title}</li>
          <li class="list-group-item"><strong>Body: </strong>${post.body}</li>
        </ul>
      </li>
      `;
    });

    document.getElementById('output').innerHTML = output;
  }
});