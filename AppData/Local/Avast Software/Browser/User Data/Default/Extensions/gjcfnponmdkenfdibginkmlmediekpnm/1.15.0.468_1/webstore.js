(()=>{const e=new MutationObserver((e=>{e.forEach((e=>{1==e.target.nodeType&&e.target.querySelectorAll("div.webstore-test-button-label").forEach((e=>{const t=e.textContent||"";["Add to Chrome","Remove from Chrome","Added to Chrome"].includes(t)&&(e.textContent=t.replace("to Chrome","Extension").replace("from Chrome","Extension"))}))}))}));window.onload=()=>{e.observe(document,{subtree:!0,childList:!0,characterData:!0})}})();