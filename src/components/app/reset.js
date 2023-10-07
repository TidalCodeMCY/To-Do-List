let newArray = [];

export function resetStorage(val){
    newArray.push(val);
};

export function keyReset(){
    newArray.sort();
    console.log(newArray);
    newArray.forEach((element) => {
        
        if(element === 'key1'){
            let newKey = localStorage.getItem('key1');
            localStorage.setItem('key0', newKey);
            localStorage.removeItem('key1');
        }else if(element === 'key2'){
            let newKey = localStorage.getItem('key2');
            localStorage.setItem('key1', newKey);
            localStorage.removeItem('key2');
        }else if(element === 'key3'){
            let newKey = localStorage.getItem('key3');
            localStorage.setItem('key2', newKey);
            localStorage.removeItem('key3');
        }else if(element === 'key4'){
            let newKey = localStorage.getItem('key4');
            localStorage.setItem('key3', newKey);
            localStorage.removeItem('key4');
        }else if(element === 'key5'){
            let newKey = localStorage.getItem('key5');
            localStorage.setItem('key4', newKey);
            localStorage.removeItem('key5');
        }else if(element === 'key6'){
            let newKey = localStorage.getItem('key6');
            localStorage.setItem('key5', newKey);
            localStorage.removeItem('key6');
        }else if(element === 'key7'){
            let newKey = localStorage.getItem('key7');
            localStorage.setItem('key6', newKey);
            localStorage.removeItem('key7');
        }else if(element === 'key8'){
            let newKey = localStorage.getItem('key8');
            localStorage.setItem('key7', newKey);
            localStorage.removeItem('key8');
        }else if(element === 'key9'){
            let newKey = localStorage.getItem('key9');
            localStorage.setItem('key8', newKey);
            localStorage.removeItem('key9');
        }else if(element === 'key10'){
            let newKey = localStorage.getItem('key10');
            localStorage.setItem('key9', newKey);
            localStorage.removeItem('key10');
        }else if(element === 'key11'){
            let newKey = localStorage.getItem('key11');
            localStorage.setItem('key10', newKey);
            localStorage.removeItem('key11');
        }else if(element === 'key12'){
            let newKey = localStorage.getItem('key12');
            localStorage.setItem('key11', newKey);
            localStorage.removeItem('key12');
        }else if(element === 'key13'){
            let newKey = localStorage.getItem('key13');
            localStorage.setItem('key12', newKey);
            localStorage.removeItem('key13');
        }else if(element === 'key14'){
            let newKey = localStorage.getItem('key14');
            localStorage.setItem('key13', newKey);
            localStorage.removeItem('key14');
        }else if(element === 'key15'){
            let newKey = localStorage.getItem('key15');
            localStorage.setItem('key14', newKey);
            localStorage.removeItem('key15');
        }else if(element === 'key16'){
            let newKey = localStorage.getItem('key16');
            localStorage.setItem('key15', newKey);
            localStorage.removeItem('key16');
        }else if(element === 'key17'){
            let newKey = localStorage.getItem('key17');
            localStorage.setItem('key16', newKey);
            localStorage.removeItem('key17');
        }else if(element === 'key18'){
            let newKey = localStorage.getItem('key18');
            localStorage.setItem('key17', newKey);
            localStorage.removeItem('key18');
        }else if(element === 'key19'){
            let newKey = localStorage.getItem('key19');
            localStorage.setItem('key18', newKey);
            localStorage.removeItem('key19');
        }else if(element === 'key20'){
            let newKey = localStorage.getItem('key20');
            localStorage.setItem('key19', newKey);
            localStorage.removeItem('key20');
        };
    });

    newArray = [];
    location.reload();
};