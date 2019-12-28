let email = prompt('Enter your email,pls', ' ');
let neg = {
    'p1': 'Canceled.',
    'p2': 'I don’t know any emails having name length less than 5 symbols.',
    'p3': 'I don’t know you',
    'p4': 'Wrong password',
    'p5': 'You have failed the change.',
    'p6': 'You wrote the wrong password.',
    'p7':'It’s too short password. Sorry.',
    'p8':'You wrote the wrong password.'

};
let pos = {
    'p1': 'Do you want to change your password?',
    'p2': 'Write your old password',
    'p3': 'It’s too short password. Sorry.',
    'p4': 'You have successfully changed your password.',
    'p5': 'Enter the new password',
    'p6':'You have successfully changed your password.',
    'p7':'please'
};
let user = {
    'login': 'user@gmail.com',
    'pw': 'UserPass'
};
let admin = {
    'login': 'admin@gmail.com',
    'pw': 'AdminPass'
};
let maxlength = 5;
let passw = '';
switch (email) {
    case '':
        alert(neg.p1);
        break;
    case null:
        alert(neg.p1);
        break;
    default:
        if (email.length < maxlength) {
            alert(neg.p2);
        } else if (email === user.login) {
            passw = user.pw;
        } else if (email === admin.login) {
            passw = admin.pw;
        } else {
            alert(neg.p4)
        }
        break;
}
if (passw) {
    let passcheck = prompt('enter your password, pls', ' ');
    let conf='',
        check=0;
    if (!passcheck) {
        alert(neg.p1);
        check=1;
    } else if (passcheck !== passw) {
        alert(neg.p4);
        check=1;
    } else {
        conf = confirm(pos.p1);
    }
    if (conf===false && check===0) {
        alert(neg.p5);

    } else if(check===0){ // зміна паролю
        let oldpass = prompt(pos.p2, ' ');
        if (!oldpass) {
            alert(neg[1]);
        } else if (oldpass !== passw) {
            alert(neg.p4);
        } else { //повторне введення паспорту коректне
            let newpw = prompt(pos.p5+', '+pos.p7, 'password');
            if (!newpw) {
               alert(neg.p1) ;
            }else if(newpw.length<maxlength++){
                alert(neg.p7);
            }else{
                let repeatpw=prompt(pos.p5+' again, '+pos.p7,'password');
                if (repeatpw===newpw){
                    alert(pos.p6);
                }else{
                    alert(neg.p8);
                }
            }
        }
    }
}