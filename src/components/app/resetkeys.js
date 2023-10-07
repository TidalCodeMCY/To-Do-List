import { keyReset, resetStorage } from "./reset";

export function resetKeys(){ 
    const keys = Object.keys(localStorage);
    for (let key of keys){
       if(key === 'key20'){
        resetStorage(key);
       }else if(key === 'key19'){
        resetStorage(key);
       }else if(key === 'key18'){
        resetStorage(key);
       }else if(key === 'key17'){
        resetStorage(key);
       }else if(key === 'key16'){
        resetStorage(key);
       }else if(key === 'key15'){
        resetStorage(key);
       }else if(key === 'key14'){
        resetStorage(key);
       }else if(key === 'key13'){
        resetStorage(key);
       }else if(key === 'key12'){
        resetStorage(key);
       }else if(key === 'key11'){
        resetStorage(key);
       }else if(key === 'key10'){
        resetStorage(key);
       }else if(key === 'key9'){
        resetStorage(key);
       }else if(key === 'key8'){
        resetStorage(key);
       }else if(key === 'key7'){
        resetStorage(key);
       }else if(key === 'key6'){
        resetStorage(key);
       }else if(key === 'key5'){
        resetStorage(key);
       }else if(key === 'key4'){
        resetStorage(key);
       }else if(key === 'key3'){
        resetStorage(key);
       }else if(key === 'key2'){
        resetStorage(key);
       }else if(key === 'key1'){
        resetStorage(key);
       }else if(key === 'key0'){
        resetStorage(key);
       };
    };
    keyReset();
};  

