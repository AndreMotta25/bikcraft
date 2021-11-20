// como ja chamamos o script de simple-slide acima, 
// podemos acessar suas classes daqui

if(window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal
    time: 5000, // tempo de transição dos slides
  });
  new SimpleSlide({
    slide: 'portfolio', // nome do atributo data-slide="principal
    time: 5000, // tempo de transição dos slides
    nav:true
  });
}
new SimpleAnime();



/*pelo que pude entender, esse script vai rodar o enviar.php sem precisar 
de sair da pagina como normalmente acontece com um formulario quando  clicamos no bota  de enviar */
/*para isso o formulario deve ter a classe .formphp nele. acho que captura o envio pegando o id do buttao*/
if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}
/*nao sei como ainda, mas parece que o javascript substituiu todo o conteudo do form, talvez com um innerhtml , ou algo parecido*/