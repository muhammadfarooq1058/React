function Render(reactElement,conatianer){
    let element=document.createElement(reactElement.type);
    element.innerHTML=reactElement.child;
    for (const key in reactElement.props ){
        if(key==='child') continue;
       element.setAttribute(key,reactElement.props[key]);
    }
    conatianer.appendChild(element);
}

let reactElement={
    'type' : 'a',
    props   : {
        'href':'https://github.com/muhammadfarooq1058',
        'target':'_blank'
    },
    'child':'click me',
}
let root=document.querySelector("#root");
Render(reactElement,root);
