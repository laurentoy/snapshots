const read_file = 'data/listImages.json';
const dir_img = 'images';

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
fetch(`./${read_file}`)
  .then(response => response.json())
  .then(data => {
    data.forEach(i => {
      const image = document.createElement('img');
      image.src = `./${dir_img}/${i}`;
      image.alt = i;
      image.classList.add('galleryImage');

      const caption = document.createElement('p');
      const imageNameNoSuffix = i.split('.')[0];
      caption.textContent = imageNameNoSuffix;

      image.addEventListener('click', () =>{
          popup.style.transform = 'translateY(0)';
          selectedImage.src = `./${dir_img}/${i}`;
          selectedImage.alt = i;
          const imageNameNoSuffix = i.split('.')[0];
          selectedCaption.textContent = imageNameNoSuffix;
      })
      gallery.appendChild(image);
      gallery.appendChild(caption);
    });
  });

popup.addEventListener('click', () =>{
    popup.style.transform = 'translateY(-100%)';
    selectedImage.src='';
    selectedImage.alt='';
});
