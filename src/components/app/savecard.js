
let keyVal = 0;

export function saveCard(obj){
    
    if(localStorage.getItem('keyVal') === null){
        localStorage.setItem(`key${keyVal}`,JSON.stringify(obj));
        localStorage.setItem('keyVal', JSON.stringify(keyVal));
        keyVal++;
    }else{ 
        keyVal = JSON.parse(localStorage.getItem('keyVal'));
        keyVal++;
        localStorage.setItem(`key${keyVal}`,JSON.stringify(obj));
        localStorage.setItem('keyVal', JSON.stringify(keyVal));
    };
       
};


