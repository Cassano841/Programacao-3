

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="cabecalho.jsp" %>
    
   
      <body>
        <div id="global">
         
            <%@include file="mdireita.jsp" %>
            <%@include file="mesquerda.jsp" %> 
            
            <div id="cabecalho">
                
            </div>
            
            <div id="conteudo">
                <form action="Servlet" method="post" onsubmit="return validar()">
                <h1>Cadastro de Sócio</h1>
                <hr>
                <form onsubmit="return validar()">
                    <label for="cpf">CPF: </label>
                    <input type="text" name="cpf" id="cpf" size="10" maxlength="11"> (somente números)<br>
                    
                    <label for="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" size="30"><br>
                    
                    <label for="sexo">Sexo: </label>
                    <input type="radio" name="sexo" id="sexoM" value="M">Masculino &nbsp;
                    <input type="radio" name="sexo" id="sexoF" value="F">Feminino<br>
                    
                    <label for="endereco">Endereço: </label><br>
                    <textarea name="endereco" id="endereco" rows="2" cols="50"></textarea><br>
                    
                    <label for="cidade">Cidade: </label>
                    <select name="cidade" id="cidade">
                        <option value="">Selecione uma Cidade</option>
                        <option value="POA">Porto Alegre</option>
                        <option value="ERE">Erechim</option>
                        <option value="VIA">Viamão</option>
                    </select><br>
                    
                    <label for="data">Data de Nascimento: </label>
                    <input type="text" name="data" id="data" size="10" maxlength="12"> (formato: DD/MM/YYYY)<br>
                    
                    <label for="user">Usuário: </label>
                    <input type="text" name="user" id="user"><br>
                    
                    <label for="senha">Senha: </label>
                    <input type="password" name="senha" id="senha"><br>
                    
                    <input type="submit" value="Enviar">
                    <input type="reset" value="Limpar">
                </form>
            </div>
            
        </div>
    </body>

