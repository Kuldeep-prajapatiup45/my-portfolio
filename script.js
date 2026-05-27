function scrol(selectedEle) {
    let selectedElement = document.getElementById(selectedEle);
    
    if (selectedElement) {
        const elementPosition = selectedElement.getBoundingClientRect().top + window.scrollY;
        
        const offsetPosition = elementPosition - 70;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}