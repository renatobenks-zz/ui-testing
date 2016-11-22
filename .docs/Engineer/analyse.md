# Análise app:
## CADASTRO:

- __Requisitos funcionais:__

	O sistema deve cadastrar o usuário se o usuário preencher todos os dados requiridos corretamente.

- __Requisitos não funcionais:__

	O campo e-mail deve ter as especificações corretas.

	O campo de senha deve ter no minimo 5 dígitos.

	O campo usuário deve ser único no sistema sem caracteres especiais.

- __Regras de negócio:__

	Os campos Nome, e-mail, usuário e senha são obrigatórios.

	Será apresentado uma mensagem a mensagem de erro "Verifique se as informações inseridas estão corretas", caso alguma informação esteja incorreta.

	Será destacado os campos que estiverem incorretos.

## LOGIN:

- __Requisitos funcionais:__

	O sistema deve logar o usuário caso os dados estejam corretos.

- __Requisitos não funcionais:__

	O campo de senha deve ter no minimo 5 dígitos.

	O campo usuário deve ser único no sistema sem caracteres especiais.

- __Regras de negócio:__

	O sistema mostrará a mensagem de erro "Senha/usuário inválido" caso o usuário ou a senha estiverem incorretos.


## FAMILIA CADASTRO:

- __Requisitos funcionais:__

    O sistema deve cadastrar a familia ao clicar "Salvar"
    se todas as informações estiverem corretas.

	O sistema deve adicionar novo membro na familia ao clicar em "+"
	se as informações do membro atual estiverem corretas.

- __Requisitos não funcionais:__

	O campo de nome(inteiro) não pode repetir na mesma familia.

	O campo CPF deve ser válidado e único.

	O campo de grau de parentesco deve ser selecionado conforme sugestões.

- __Regras de negócio:__

	O sistema mostra a mensagem de erro "Informações duplicadas" caso o nome ou o CPF estejam duplicados.

	O sistema mostra a mensagem de erro "CPF Inválido" caso o CPF esteja incorreto.

	O sistema destaca os campos preenchidos incorretamente.

## VALIDAR CPF

- __Requisitos funcionais:__

    O sistema deve validar o CPF inserido.

- __Requisitos não funcionais:__

    O CPF inserido deve ter 11 digitos.

    CPF com e sem formatação padrão deve ser validados.

- __Regras de negócio:__

    O sistema retorna CPF formatado quando CPF inserido está fora do formato.

    O sistema não deixa ser colocado mais de 11 digitos no campo de validação.

## SALVAR CPF

- __Requisitos funcionais:__

    O sistema deve salvar o CPF inserido na validação.

- __Requisitos não funcionais:__

    O CPF a ser salvo deve ser válido.

    O CPF a ser salvo deve estar formatado.

    O CPF a ser salvo deve ser inexistente.

- __Regras de negócio:__

    O sistema não mostra o botão de salvar CPF caso o CPF inserido esteja inválido.

    O sistema mostra o botão de excluir CPF caso o CPF já esteja inserido.


## GERAR CPF

- __Requisitos funcionais:__

    O sistema deve gerar um CPF válido aleatoriamente.

- __Requisitos não funcionais:__

    O CPF gerado deve ter 11 digitos.

    O CPF gerado deve ser válido.

    O CPF gerado deve ser diferente da lista de CPF salvos na conta do usuário.

- __Regras de negócio:__

    O sistema retorna CPF formatado quando CPF inserido está fora do formato.

    O sistema não deixa ser colocado mais de 11 digitos no campo de validação.

## GERENCIAR FAMILIA CADASTRADA

- __Requisitos funcionais:__

    O sistema mostra uma lista de cada membro da familia cadastrado.

    O sistema possibilita editar as informações de cada membro.

    O sistema possibilita excluir um membro da familia.

    O sistema possibilita inserir um novo membro na familia.

- __Requisitos não funcionais:__

- __Regras de negócio:__


