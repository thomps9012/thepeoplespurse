export function validateEmail(email:any) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(String(email).toLowerCase());
}

export function checkPassword(input: any){
    const passwordRegex = /^[A-Za-z]\w{7,14}$/;
    if(input.match(passwordRegex)) return true;
    return false;
}
