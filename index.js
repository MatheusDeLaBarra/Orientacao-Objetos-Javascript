import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 12345678945, "456");
const cliente2 = new Cliente("Alice", 54987654321, "654");
const cliente3 = new Cliente("Sabrina", 17932846591, "753");

const conta1 = new ContaCorrente(0, cliente1, 1001);
const conta2 = new ContaPoupanca(0, cliente2, 1002);
const conta3 = new ContaSalario(0, cliente3, 1003);

const diretor = new Diretor("Rodrigo", 10000, 12345678919);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 98765432137);
gerente.cadastrarSenha("123");


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, "456");


console.log(diretorEstaLogado, gerenteEstaLogado, cliente1EstaLogado);


