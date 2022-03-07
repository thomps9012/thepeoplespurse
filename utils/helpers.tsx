export function validateEmail(email: any) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(String(email).toLowerCase());
}

export function checkPassword(input: any) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (input.match(passwordRegex)) return true;
    return false;
}


export function officialDiv() {
    const officialContainer = document.querySelector('.officialContainer') as HTMLElement;
    const officialDiv = document.getElementById('officialInfo') as HTMLElement;
    console.log(officialContainer)
    console.log(officialDiv)
    officialContainer?.removeChild(officialDiv);
    const officialDiv2 = document.createElement('div');
    officialDiv2.innerHTML = `<div id='officialInfo'></div>`;
    officialContainer?.appendChild(officialDiv2)
}