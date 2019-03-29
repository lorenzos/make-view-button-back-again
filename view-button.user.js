// ==UserScript==
// @name         View Button
// @namespace    view-button
// @version      0.1.3
// @description  Returns back "View Image" button for google images
// @author       0xC0FFEEC0DE
// @include      /^https://(.*).google.([a-z\.]*)/(imgres|search)(.*)
// @downloadURL  https://raw.githubusercontent.com/0xC0FFEEC0DE/make-view-button-back-again/master/view-button.user.js
// @updateURL    https://raw.githubusercontent.com/0xC0FFEEC0DE/make-view-button-back-again/master/view-button.user.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    let buttonClass = "view_button";

    let imageObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            //console.log(mutation);
            if(mutation.target.src !== "" && mutation.target.classList.contains('irc_mi')) {
                let container = mutation.target.closest('.irc_c');

                let span = document.createElement('span');
                span.textContent = 'View Image';

                let btn = document.createElement('a');
                btn.className += buttonClass;
                btn.className += ' NDcgDe dwv50c';
                btn.target = '_blank';
                btn.href = mutation.target.src;
                btn.rel = 'noreferrer';
                btn.appendChild(span);

                let menu = container.querySelector('.irc_ab');
                let existBtn = menu.querySelector("."+buttonClass);
                if(existBtn) {
                    existBtn.parentNode.removeChild(existBtn);
                }

                menu.insertBefore(btn, menu.childNodes[1]);
            }
        });
    }).observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['src']
    });
})();
