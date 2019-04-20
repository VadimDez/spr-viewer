window.onload = () => {

  let $file = document.querySelector('input');

  $file.onchange = () => {
    console.log($file.files[0]);
  }

};