function showImg(t){for(var e=t.target.id,l=0;l<titles.length;l++){var s=titles[l].getAttribute("id");s!==e&&"title_yellow-flower"===s||s!==e&&"title_colorful-umbrellas"===s||s!==e&&"title_chocolates"===s?(titles[l].style.opacity="0",titles[l].style.transform="translate3d(70%, 0px, 0px)"):s!==e&&"title_apples"===s||s!==e&&"title_red-leaf"===s||s!==e&&"title_blue-sky"===s||s!==e&&"title_iphone"===s||s!==e&&"title_peppers"===s?(titles[l].style.opacity="0",titles[l].style.transform="translate3d(-100%, 0px, 0px)"):s!==e&&"title_butterfly"===s||s!==e&&"title_keys"===s||s!==e&&"title_big-city"===s?(titles[l].style.opacity="0",titles[l].style.transform="translate3d(70%, 0px, 0px)"):s!==e&&"title_sweet-slices"===s||s!==e&&"title_green-fish"===s||s!==e&&"title_vegetables"===s?(titles[l].style.opacity="0",titles[l].style.transform="translate3d(-100%, 0px, 0px)"):s!==e&&"title_coffee-beans"===s?(titles[l].style.opacity="0",titles[l].style.transform="translate3d(-50%, 0px, 0px)"):s===e&&(titles[l].style.background="rgba(255,255,255,0.4)")}e=e.split("_")[1],document.getElementById(e).style.opacity="1"}function hideImg(t){for(var e=t.target.id,l=0;l<titles.length;l++){var s=titles[l].getAttribute("id");s!==e?(titles[l].style.opacity="1",titles[l].style.transform="translate3d(0, 0, 0)"):s===e&&(titles[l].style.background="none")}e=e.split("_")[1],document.getElementById(e).style.opacity="0"}for(var titles=document.getElementsByClassName("gallery__title"),i=0;i<titles.length;i++)titles[i].addEventListener("mouseover",showImg),titles[i].addEventListener("mouseout",hideImg);