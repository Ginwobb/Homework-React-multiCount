
function App(){
    const [counters,setCount] =React.useState([{id:1,number:0}])
    const updateCounter =(id,num) =>{
        const newCounter = counters.map(el =>
            el.id === id && el.number + num >= 0 ? { ...el, number: el.number + num } : el
        );
        setCount(newCounter)
    }

    const addCounter =() =>{
        setCount([...counters,{id: Math.round(Math.random()*1000),number:0}])
    }
    const removeCounter =(id) =>{
        setCount (counters.filter(el=>(el.id != id)))
    }

    const plusAll = () => {
        const newCounters = counters.map(counter => ({ ...counter, number: counter.number + 1 }));
        console.log(newCounters);
        setCount (newCounters);
    };

    return(
        <div className="app"> 
            <div>
                <h1>Sum = {counters.reduce((acc, el) => acc + el.number, 0)}</h1>
                <div className="btn-group"> 
                    <button className="btn btn-add" onClick={()=>addCounter(counters)}>Add Counter</button>
                    <button className="btn btn-plus" onClick={plusAll}>Plus All</button>
                </div>
            </div>
            <div>
               {counters.map(el => (
                <Counter key={el.id} item={el} updateCounter={updateCounter} removeCounter={removeCounter} />
               ))}
            </div>
        </div>
    )
}

function Counter(props){
    const{item,updateCounter,removeCounter }=props

    return(
        <div className="counter">
            <button className="btn btn-dec" onClick={()=>updateCounter(item.id,-1)}>-</button>
            <h3 className="number">{item.number}</h3>
            <button className="btn btn-inc" onClick={()=>updateCounter(item.id,1)}>+</button>
            <button className="btn btn-clr" onClick={()=>updateCounter(item.id,-item.number)}>C</button>
            <button className="btn btn-del" onClick={()=>removeCounter(item.id)}>X</button>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)