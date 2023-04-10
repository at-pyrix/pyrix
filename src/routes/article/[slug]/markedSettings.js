import { Renderer, setOptions } from 'marked';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import markdown from 'highlight.js/lib/languages/markdown';
import diff from 'highlight.js/lib/languages/diff';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import scss from 'highlight.js/lib/languages/scss';
import shell from 'highlight.js/lib/languages/shell';

hljs.registerLanguage('xml',xml);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('java', java);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('python',python);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('shell', shell);


export let setCode = () => {
	let copyCodeButton = document.querySelectorAll('.copy-code');
	copyCodeButton.forEach((element) => {
		element.addEventListener('click', (event) => {
			if (event.target.parentNode.classList.contains('copied')) return;
			const text = event.target.parentNode.innerText;
			navigator.clipboard
				.writeText(text)
				.then(() => {
					event.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"/></svg>`;
					event.target.parentNode.classList.add('copied');
				})
				.catch((error) => {
					console.error(error);
				});
		});
	});
};
const renderer = new Renderer();

renderer.heading = function (text, level, slugger) {
	if (level == 2) {
		return `<h2 display="block" id="${slugger}"><a href="#${slugger}">${text}</a></h2>`;
	} else {
		return `<h${level}>${text}</h${level}>`;
	}
};

renderer.link = function (href, title, text) {
	return `<a href="${href}" target="_blank" title="${title}" rel="noopener noreferrer">${text}</a>`;
};

renderer.image = function (href, title, text) {
	return `<figure>
                  <img src="${href}" loading="lazy" title="${title}" alt="Source: ${text}">
                  <figcaption>${text}</figcaption>
            </figure>`;
};

renderer.code = function (code, lang) {
	let highlightedHTML;
	if (lang && hljs.getLanguage(lang)) {
		highlightedHTML = hljs.highlight(code, {language: lang}).value;
	} else {
		highlightedHTML = hljs.highlightAuto(code).value;
	}

	// add line numbers to highlighteHTML
	let lines = highlightedHTML.split('\n')
	lines.forEach((line, index) => {
		lines[index] = `<span class="line-number">${index + 1}</span>${line}`
	})
	highlightedHTML = lines.join('\n');

	return lang
		? `
			<div class="code-block">
				<div class="header">
					<span class="title">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
							<path
								fill="currentColor"
								d="M180.24 147.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L167.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48Zm-72-24a6 6 0 0 0-8.48 0l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 1 0 8.48-8.48L88.49 152l19.75-19.76a6 6 0 0 0 0-8.48ZM214 88v128a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88Zm-56-6h35.52L158 46.48Zm44 134V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2Z"
							/>
						</svg>
						${lang}
					</span>
					<button class="copy-code"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></svg></button>
				</div>
		  ` +
				`
        <pre><code class="hljs">${highlightedHTML}</code></pre></div>
    `
		: `<div class="code-block"><pre><button class="copy-code"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></svg></button><code class="hljs">${highlightedHTML}</code></pre></div>`;
};

renderer.text = function (text) {
	text = text.replace(/\^([^\^]*)\^/g, '<sup>$1</sup>'); // Superscript
	text = text.replace(/~([^~]*)~/g, '<sub>$1</sub>'); // Subscript
	text = text.replace(/==([^=]*)==/g, '<mark>$1</mark>'); // Highlight
	text = text.replace(/\+\+([^=]*)\+\+/g, '<ins>$1</ins>'); // Underline
	return text;
};

setOptions({
	renderer,
	smartLists: true,
	breaks: true,
	smartypants: true
});
