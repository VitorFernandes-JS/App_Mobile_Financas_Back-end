# API Finances

<img src="diagramaAPIFinances.png">

# User (Usuário)
- Definir o que deve ser feito ainda de

<br/>
<br/>
<br/>

# Wallet (Carteira)

## Interface
 <hr/>

 ```ts
Wallet {
  id: string;
  value: number; 
  category: string;  // Verificar se categoria tem a ver com a Entrada/Saida do value(valor -> dinheiro), caso tenha remover esse campo e criar uma tabela "transactions_wallets" para fazer o gerenciamento de entrada e saida
  description: string;
  usuario_id: string | number; // Verificar se é uma string ou number que vem do token do OAuth2
  created_at: Date;
  updated_at: Date;
 }
 ```
 <hr/>

<br/>
<br/>
<br/>

# Investments (Investimentos)

## Interface
 <hr/>

 ```ts
Investment {
  id: string;
  value: number; 
  dayInvestiment: Date;
  priority: string; //"Alta prioridade", "Média prioridade", "Baixa prioridade" Válido criar uma tabela de seed ou transformar o campo em ENUM
  usuario_id: string | number;
  created_at: Date;
  updated_at: Date;
 }
 ```
 <hr/>


