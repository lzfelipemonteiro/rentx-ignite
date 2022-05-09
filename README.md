<!-- 
? **RF** => Requisitos Funcionais
? **RNF** => Requisitos Não Funcionais
? **RN** => Regras de Negócio 
-->

# Cadastro do Carro

**RF**

- [X] Deve ser possível cadastrar um novo carro.

<!-- **RNF** -->

**RN**
- [X] Não deve ser possível cadastrar com uma placa já existente.
- [X] O carro deve ser cadastrado, por padrão, com disponibilidade.
- [X] * O usuário responsável pelo cadastro deve ser um usuário administrador.

---
# Listagem de Carros

**RF**
- [X] Deve ser possível listar todos os carros disponíveis.
- [X] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- [X] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [X] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RF**
- [X] O usuário não precisa estar logado no sistema

---
# Cadastro de Especificações no carro

**RF**
- [X] Deve ser possível cadastrar uma especificação para um carro
- [X] Deve ser possível listar todas as especificações.
- [ ] Deve ser possível listar todas os carros

**RF**
- [X] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [X] Não deve ser possível cadastrar uma especificação já existente para um carro.

**RN**

---
# Cadastro de imagem do carro

**RF**
- [X] Dever ser possível cadastrar a imagem do carro.

**RNF**
- [X] Utilizar o multer para o upload dos arquivos.

**RN**
- [X] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [X] O usuário responsável pelo cadastro deve ser um usuário administrador.

---
# Aluguel de carro

**RF**
- [ ] Deve ser possível cadastrar um aluguel

**RN**

- [ ] O aluguel deve ter 24 horas duração mínima.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.