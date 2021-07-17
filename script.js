const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab")
   
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
})


// cách không tối ưu
// tabs.forEach((tab,i)=>{
//     tab.addEventListener("click",function(){
//         tabs.forEach(tab=>{
//             tab.classList.remove("operations__tab--active")
//         })
//         tabsContent.forEach(tabContent=>{
//             tabContent.classList.remove("operations__content--active")
//         })
//         tabs[i].classList.add("operations__tab--active")
//         tabsContent[i].classList.add("operations__content--active")
//     })
// })