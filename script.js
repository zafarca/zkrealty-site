document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const calculator = document.getElementById('mortgageCalculator');
function calculateMortgage(){
  if(!calculator) return;
  const price = Number(document.getElementById('homePrice').value) || 0;
  const down = Number(document.getElementById('downPayment').value) || 0;
  const annual = Number(document.getElementById('interestRate').value) || 0;
  const years = Number(document.getElementById('amortization').value) || 25;
  const principal = Math.max(price-down,0);
  const n = years*12;
  const r = annual/100/12;
  const payment = r === 0 ? principal/n : principal*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  document.getElementById('monthlyPayment').textContent = payment.toLocaleString('en-CA',{style:'currency',currency:'CAD',maximumFractionDigits:0});
  document.getElementById('mortgageAmount').textContent = 'Mortgage amount: '+principal.toLocaleString('en-CA',{style:'currency',currency:'CAD',maximumFractionDigits:0});
}
calculator?.addEventListener('input', calculateMortgage);
calculateMortgage();
