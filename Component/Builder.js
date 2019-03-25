module.exports= {
    /**
     * 
     * @param {string} tagName
     * @param {string} className 
     * @param {string} innerText 
     * @param {string} id 
     */
     createElement(tagName, className, innerText, id){
        let elem =  document.createElement(tagName);
        elem = this.setClassName(elem, className);
        elem = this.setInner(elem, innerText);

        if(id)
            elem.id = id;

        return elem;
    },

    setClassName(elem, className){
        elem.className = className;
        return elem;
    },

    setInner(elem, text){
        elem.innerHTML = text;
        return elem;
    },
    
    /**
     * 
     * @param { HTMLElement } parent 
     * @param { HTMLCollection } childs 
     */
    appendAllChild(parent, childs){
        for(var x in childs){
            parent.appendChild(childs[x]);
        }
    },
    setAttribute(elem, name_attribute, value){
        return elem.setAttribute(name_attribute, value);
    }
}

