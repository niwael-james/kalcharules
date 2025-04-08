document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.createElement('img');
    imgElement.src = 'path/to/your/image.jpg'; // Replace with the actual image path
    imgElement.alt = 'Description of the image';
    imgElement.style.width = '100%'; // Adjust as needed
    imgElement.style.height = 'auto'; // Maintain aspect ratio

    document.body.appendChild(imgElement);
});