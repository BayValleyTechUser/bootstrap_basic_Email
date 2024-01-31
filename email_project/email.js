console.log("Print?")

fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));
    
    document.addEventListener('DOMContentLoaded', function () {
        // Get the compose and reply buttons
        var composeBtn = document.querySelector('.compose-btn');
        var replyBtn = document.querySelector('.reply-btn');
    
        // Add click event listeners
        composeBtn.addEventListener('click', function () {
            alert('Compose button clicked!'); // You can replace this with your compose logic
        });
    
        replyBtn.addEventListener('click', function () {
            alert('Reply button clicked!'); // You can replace this with your reply logic
        });
    });


    