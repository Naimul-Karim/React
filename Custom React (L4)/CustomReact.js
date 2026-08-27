function createRender(Element,Container){
    const domElement = document.createElement(Element.type);
    domElement.innerHTML = Element.children;
    for (const prop in Element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reachElement.props[prop]) //for accessing the element in oject use 3rd bracket
        
        
    }
    Container.appendChild(domElement)
}

const reachElement = {
    type: 'a',
    props: {
        href: 'https://react.dev',
        target : '_blank'
    },
    children: "toi react porbi taile ekane click kor"
}

const mainContainer = document.getElementById('root');

createRender(reachElement,mainContainer);