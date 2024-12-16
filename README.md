# O1CustomReact
>**index.html**
>> It is for the ReactElement to render.It conatins basically a signle ```Html <div id="root"></div>```

>**script.js**
>> It is for core js.It gives the concept of react how create element behind the scene.I have created a custom **ReactElement** and render it in **index.html** 
```js 
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
```
# 02CounterProject
> **App.jsx**
>> useState **[counter,setCounter]** is used to makechanges in the ui when the state changes.

>**Ui**
>> ```<h1>Counter Project</h1> ```   
>> ```<h2>Count : 0</h2>```   
>> ```<button>Increase</button>```    
>> ```<button>Decrease</button>```

>**Functionality**
>> When press **Increase button** Count increases and when press **Decrease button** Count decrease but ***0 to 20***
# Read Article
> ***"React Fiber"***