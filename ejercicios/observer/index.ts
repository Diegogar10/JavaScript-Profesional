interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');
    el.addEventListener('input', () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => { //retorna el indice del observador en la posicion registrada
      return obs === observer;
    });

    this.observers.splice(index, 1); //metodo: a partir del indice, cuantos elementos quiero sacar
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}


class matrizAsociacion {
  
  private el: NodeList;
  private bt: NodeList;
  private boton:HTMLButtonElement;
  private myMap: Map<Object, Object>;
  private value = new BitcoinPrice();
  
  constructor() {
    
    this.el = document.querySelectorAll('.price');
    this.bt = document.querySelectorAll('.Suscribe');
    this.myMap=new Map();

    this.bt.forEach((boton,i)=>{
      this.myMap.set(boton,this.el[i]);
      boton.addEventListener("click",()=>{
        let value = this.myMap.get(boton);
        this.creaInstancia(value,boton);
      })
    }) 
  }

  creaInstancia(value: Object,boton:any){ 
    this.boton=boton;
    let display = new PriceDisplay(value);
      if(this.boton.value==='Suscribir'){
        this.value.subscribe(display);
        this.boton.value='Unsuscribe';
      }else{
        this.value.unsubscribe(display);
        this.boton.value='Suscribir';
      }
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;
  private bt: HTMLElement;

  constructor(display:any,boton?:HTMLElement) {
    this.el = display;
    this.bt = boton;
  }
  update(data: any) {
    this.el.innerText = data;
  }
}

const botones= new matrizAsociacion();
//const display = new PriceDisplay();
//value.subscribe(display);

//setTimeout(() => value.unsubscribe(display), 5000);
