function fun1() {
    const x=prompt("type here");
    const btn=document.querySelector('#btn');
    const p=document.querySelector('#p');
    alert('hrelooe ${x}')
    p.textContent=`${x}`;
}