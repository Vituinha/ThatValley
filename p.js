	var i = 0;

function posta()
{
	var Valor = document.getElementById("texto").value;	
	if(Valor.trim() == "")
	{
	}
	else
	{
		var passadas = document.getElementById("publicacoes").innerHTML;
		var exibeVetorHTML = document.getElementById("publicacoes");
		var publica = '<div id="publicacoes"> <div class="container-fluid"> <div class="margem"> <img src="i.jpg" class="imagem"> </div> <div class="container-fluid publicações"> <p class="textoPubli">'
		publica = publica + Valor + "</div></div><br><br>";
		exibeVetorHTML.innerHTML = publica + passadas;
		i++;
		vazio();
	}
}

function vazio()
{
	var nulo = "";
	document.getElementById("publicacoes").value = nulo; 

}