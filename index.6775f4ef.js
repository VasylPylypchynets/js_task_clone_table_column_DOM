document.querySelectorAll("tr").forEach(function(e){var t=e.children[1],n=e.children[e.children.length-1],o=document.createElement("td");"Position"===t.textContent&&(o=document.createElement("th")),o.textContent=t.textContent,e.insertBefore(o,n)});
//# sourceMappingURL=index.6775f4ef.js.map
