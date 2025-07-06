function costumRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
   
    // domElement.innerHTML = reactElement.chidern;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);


    const docElement = document.createElement(reactElement.type);
    docElement.innerHTML = reactElement.chidern;

    for(let prop in reactElement.props){
        docElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(docElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    chidern : 'Click me to go to Google'
}

let mainContainer = document.getElementById('root');

costumRender(reactElement, mainContainer);