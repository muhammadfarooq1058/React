# O1CustomReact
>**index.html**
>> It is for the ReactElement to render.It conatins basically a signle '''Html <div id="root"></div> '''

>**script.js**
>> It is for core js.It gives the concept of react how create element behind the scene.I have created a custom **ReactElement** and render it in **index.html** 
'''javaScript function Render(reactElement,conatianer){
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
'''