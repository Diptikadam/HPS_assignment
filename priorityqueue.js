class list {
   constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}

class pq{

	constructor()
    {
        this.items = [];
    }

    isEmpty()
	{
    
    return this.items.length == 0;
	}

	dequeue()
	{
    
    if (this.isEmpty())
        return "Underflow";
    return this.items.shift();
	}


	enqueue(element, priority)
	{
    
    var qElement = new list(element, priority);
    var contain = false;
 
    for (var i = 0; i < this.items.length; i++) {
    	
        if (this.items[i].priority > qElement.priority) {
            
            this.items.splice(i, 0, qElement);
            contain = true;
            break;
        }
    }
 
    if (!contain) {
        this.items.push(qElement);
    }
	}

front()
{
   
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}


rear()
{
  
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[this.items.length - 1];
}

printPQueue()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i].element +this.items[i].priority+ " ";
    return str;
}

}

var pp = new pq();

pp.enqueue("dipti",1);
pp.enqueue("ritu",3);
pp.enqueue("nayana", 4);

console.log(pp.front().element);
console.log(pp.rear().element);
 
console.log(pp.isEmpty());
console.log(pp.printPQueue());
console.log(pp.dequeue().element);
console.log(pp.printPQueue());


