function clickMenu() {
    if (itens_menu.style.display == 'block') {
        itens_menu.style.display = 'none'        
    } else {
        itens_menu.style.display = 'block'
        itens_menu.style.transition = '2'
      }      
    }
function mudouTamanho() {
    if (window.innerWidth >= 576) {
        itens_menu.style.display = 'block'        
    } else {
        itens_menu.style.display = 'none'        
    }
}