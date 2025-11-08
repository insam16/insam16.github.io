class PrivateTag extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM 생성
        const shadow = this.attachShadow({ mode: "open" });

        // 스타일 로드 (외부 CSS 링크)
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "/style/tag.css"; // 상대경로 주의

        // 태그 본체
        const span = document.createElement("span");
        span.className = "chipletContainerInner clickable";
        span.textContent = "비공개";

        shadow.appendChild(style);
        shadow.appendChild(span);
    }
}

// <privatetag>을 실제 HTML 태그로 등록
customElements.define("privatetag", PrivateTag);
