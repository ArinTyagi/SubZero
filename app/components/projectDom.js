class ProjectDOM extends HTMLElement {
  static get observedAttributes() {
    return ['name']
  }

  get name() {
    return this.getAttribute('name')
  }

  set name(name) {
    this.setAttribute('name', name)
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    this.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    this.style.borderRadius = '5px';
    this.style.width = '40%';
    this.style.display = 'block'
    this.style.backgroundColor = 'var(--card-bg-color)'
    this.style.color = 'var(--font-color)'
    this.style.margin = '20px';

    const container = document.createElement('div');
    container.style.padding = '10px 16px'

    const name = document.createElement('h3');
    name.innerHTML = `${this.name}`;

    const open = document.createElement('button');
    open.style.backgroundColor = 'var(--card-bg-color)';
    open.style.border = 'none';
    open.innerHTML = 'OPEN';
    open.style.color = 'var(--primary-color)';

    open.addEventListener('click', _ => {
      window.projects.open(this.name);
    })

    this.addEventListener('mouseover', _ => {
      this.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)';
    })
    this.addEventListener('mouseout', _ => {
      this.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    })

    container.appendChild(name);
    container.appendChild(open);
    shadow.appendChild(container);
  }
}

customElements.define('sub-project', ProjectDOM);
