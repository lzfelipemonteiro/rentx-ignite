<!-- 
? **RF** => Requisitos Funcionais
? **RNF** => Requisitos Não Funcionais
? **RN** => Regras de Negócio 
-->

# Cadastro do Carro

**RF**

- [ ] Deve ser possível cadastrar um novo carro.
- [ ] Deve ser possível listar todas as categorias.

<!-- **RNF** -->

**RN**
- [ ] Não deve ser possível cadastrar com uma placa já existente.
- [ ] Não deve ser possível alterar a placa de um carro já cadastrado.
- [ ] O carro deve ser cadastrado, por padrão, com disponibilidade.
- [ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

---
# Listagem de Carros

**RF**
- [ ] Deve ser possível listar todos os carros.
- [ ] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- [ ] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [ ] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RF**
- [ ] O usuário não precisa estar logado no sistema

---
# Cadastro de Especificações no carro

**RF**
- [ ] Deve ser possível cadastrar uma especificação para um carro
- [ ] Deve ser possível listar todas as especificações.
- [ ] Deve ser possível listar todas os carros

**RF**
- [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [ ] Não deve ser possível cadastrar uma especificação já existente para um carro.

**RN**

---
# Cadastro de imagem do carro

**RF**
- [ ] Dever ser possível cadastrar a imagem do carro.
- [ ] Dever ser possível listar todos os carro.

**RNF**
- [ ] Utilizar o multer para o upload dos arquivos.

**RN**
- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

---
# Aluguel de carro

**RF**
- [ ] Deve ser possível cadastrar um aluguel

**RN**

- [ ] O aluguel deve ter 24 horas duração mínima.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.