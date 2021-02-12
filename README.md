# Recuperação de senha

**RF** -- Requisitos funcionais

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções para recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF** -- Requisitos não funcionais

- Utilizar Mailtrap para testar envios de e-mail em desenvolvimento;
- Utilizar amazon SES para envios de e-mail em produção;
- O envio de e-mail deve acontecer em segundo plano (Background job);

**RN** -- Regra de negócio

- O link enviaado pro e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar uma nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O  usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder vizualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou nãop-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar todos os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disṕoniveis em um dia específico de um pretador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**NF**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, e último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não podem agendar serviços consigo mesmo;
