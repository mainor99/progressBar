(function(d, w) {
    var elements = {
        openModalButton: d.getElementById('my_progress_button'),
        modalSection: d.getElementById('modal_section'),
        targetSpan: d.getElementById('target_span'),
        progressBarSpan: d.getElementById('progress_bar_text_span'),
        progressBarTextContainer: d.getElementById('progress_bar_text'),
        totalNeededSpan: d.getElementById('total_needed_span'),
        progressBarContainer: d.getElementById('progress_bar_percentage')
    }

    var setModalDisplay = (function(modal) {
        return function(display) {
            modal.style.display = display
        }
    })(elements.modalSection)

    function calculateProgressBar() {
        var currencySymbol = '$'
        var reached = 56
        var target = 125
        var carretElementSize = '1.7'
        var percentage = reached / target * 100
        elements.targetSpan.innerHTML = currencySymbol + target
        setTimeout( function() {
            elements.progressBarContainer.style.width = percentage + '%'
        }, 0)
        elements.progressBarTextContainer.style.marginLeft = percentage - carretElementSize + '%'
        elements.progressBarSpan.innerHTML = currencySymbol + reached
        elements.totalNeededSpan.innerHTML = currencySymbol + (target - reached)
    }

    function resetProgressBar() {
        elements.targetSpan.innerHTML = ''
        elements.progressBarContainer.style.width = '0%'
        elements.progressBarTextContainer.style.marginLeft = '0%'
        elements.progressBarSpan.innerHTML = ''
        elements.totalNeededSpan.innerHTML = ''
    }

    function addEventListeners() {
        elements.openModalButton.addEventListener('click', openModal)
        w.addEventListener('click', closeModal)
    }

    function openModal(event) {
        setModalDisplay('flex')
        calculateProgressBar()
    }

    function closeModal(event) {
        if (event.target === elements.modalSection) {
            setModalDisplay('none')
            resetProgressBar()
        }
    }

    (function init(){
        addEventListeners()
    })()
})(document, window)