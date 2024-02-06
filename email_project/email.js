// let header = document.querySelector('h1');
// header.textContent = 'New Text';

// let myButton = document.querySelector('#myButton');
// myButton.addEventListener('click', function() {
//     alert('Button Clicked!')
// });

// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));


document.addEventListener('DOMContentLoaded', function () {
    const folders = document.querySelectorAll('.folder');

    folders.forEach(folder => {
        folder.addEventListener('click', function () {
            const subFolder = this.querySelector('.sub-folder');
            if (subFolder) {
                subFolder.style.display = (subFolder.style.display === 'none' || subFolder.style.display === '') ? 'block' : 'none';
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const foldersList = document.querySelector('.folders-list');
//     const emailContainer = document.querySelector('.emailContainer');

//     foldersList.addEventListener('click', function(event) {
//         emailContainer.innerHTML = '';

//         const folderText = event.target.innerText;

//         switch (folderText) {
//             case 'Inbox':
//                 emailContainer.innerHTML = "<ul>Hello from James Wood, Invest NOW!</ul>;"
//                 break;
//             case 'Sent':
//                 emailContainer.innerHTML = '<ul>Please stop trying to scam me.</ul>';
//                 break;
//             case 'Drafts':
//                 emailContainer.innerHTML = '<ul>I hate this scammer.</ul>';
//         }
//     });

//     function getRandomColor() {
//         let letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
// });



/// validate form inputs, or fetch and display dynamic data from APIs

