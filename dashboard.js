document.addEventListener("DOMContentLoaded", function () {
  const user = localStorage.getItem("usuario");
  const span = document.getElementById("userName");

  if (user) {
    span.textContent = user;
  } else {
    span.textContent = "Visitante";
  }
});



const form = document.getElementById("transacaoForm");
const lista = document.getElementById("listaTransacoes");
const saldoEl = document.getElementById("saldo");

let saldo = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  const li = document.createElement("li");
  li.classList.add(tipo);
  li.textContent = `${descricao} - R$ ${valor.toFixed(2)}`;
  lista.appendChild(li);

  saldo += tipo === "entrada" ? valor : -valor;
  saldoEl.textContent = saldo.toFixed(2);

  form.reset();
});

const expenseForm = document.getElementById('expense-form');
const categorySelect = document.getElementById('category');
const valueInput = document.getElementById('value');
let expenses = []; // Array para armazenar os lançamentos


// Guia para controlar Despesas
