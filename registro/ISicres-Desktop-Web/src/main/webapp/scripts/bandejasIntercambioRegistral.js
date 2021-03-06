function changeSelectEstados()
{

	var selected = document.forms[0].tipoBandeja.options.selectedIndex;
	if(selected==0)
	{
		document.getElementById('estadosSalida').style.display='inline';
		document.getElementById('estadosEntrada').style.display='none';
		document.getElementById('libroSeleccionado').style.display='inline';
	}
	else
	{
		document.getElementById('estadosSalida').style.display='none';
		document.getElementById('estadosEntrada').style.display='inline';
		document.getElementById('libroSeleccionado').style.display='none';
	}
}

function submitRefrescarBandejaEntradaOSalida()
{
	var tipoBandeja = document.getElementById('tipoBandeja').value;
	if(tipoBandeja==0)
	{
		document.forms[0].action='BandejaSalidaIntercambioRegistral.do';
	}
	else
	{
		document.forms[0].action='BandejaEntradaIntercambioRegistral.do';
	}
	document.forms[0].submit();
}

function submitEnviarIntercambiosRegistrales(){
	uncheckOtherTabs();
	if(comprobarSiHaySeleccionados())
	{
		 var tabSelected = jQuery('#tabs').tabs( "option", "selected" );
		if(tabSelected=='1')
		{
			mostrarCapaNuevoDestino();
		}
		else
		{
			document.forms[0].action="EnviarIntercambiosRegistrales.do";
			document.forms[0].submit();
		}
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}
}

function submitEnviarIntercambiosIncompletos(){
	var nuevoDestino = document.getElementById('nuevoDestino').value;
	if(nuevoDestino=='')
	{
		//Si no se indic� el destino, aviso!
		alert(top.GetIdsLan("IDS_IR_NO_HA_SELECCIONADO_DESTINO"));
	}
	else
	{
		//Si se indic�, se env�an.
		document.forms[0].action="EnviarIntercambiosRegistralesIncompletos.do";
		document.forms[0].submit();
	}
}


function submitAnularIntercambiosRegistrales(){
	uncheckOtherTabs();
	if(comprobarSiHaySeleccionados())
	{
		document.forms[0].action="AnularIntercambiosRegistrales.do";
		document.forms[0].submit();
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function uncheckOtherTabs(){

	 var tabSelected = jQuery('#tabs').tabs( "option", "selected" );
	 var checksADesmarcar = jQuery("input:checkbox[name=checkRegistro]:not(.checkTab"+tabSelected+")");
	//deseleccionar todo
	 	for(i=0;i<checksADesmarcar.length;i++)
	 	{
	 		checksADesmarcar[i].checked=false;
	 	}
}

function submitDesanularIntercambiosRegistrales(){

	if(comprobarSiHaySeleccionados())
	{
		document.forms[0].action="DesanularIntercambiosRegistrales.do";
		document.forms[0].submit();
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function submitAceptarIntercambiosRegistrales(){

	if(comprobarSiHaySeleccionados())
	{
		document.forms[0].action="AceptarIntercambiosRegistrales.do";
		document.forms[0].submit();
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function submitReenviarIntercambiosRegistrales(){

	if(comprobarSiHaySeleccionados())
	{
		document.forms[0].action="ReenviarIntercambiosRegistrales.do";
		document.forms[0].submit();
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function submitRechazarIntercambiosRegistrales(){

	if(comprobarSiHaySeleccionados())
	{
		document.forms[0].action="RechazarIntercambiosRegistrales.do";
		document.forms[0].submit();
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}


function comprobarSiHaySeleccionados(){

	checksRegistro = document.getElementsByName('checkRegistro');
	var haySeleccionados = false;
 	for(i=0;i<checksRegistro.length;i++)
 	{
		if(checksRegistro[i].checked==true)
 		{
 			haySeleccionados = true;
 		}
 	}
 	return haySeleccionados;
}

function seleccionarODeseleccionarTodos()
{
 var checkSeleccionarTodos = document.getElementsByName('seleccionarTodos');
 var checkDeseleccionarTodos = document.getElementsByName('deseleccionarTodos');
 var checksRegistro = document.getElementsByName('checkRegistro');

  if(checkDeseleccionarTodos[0].checked)
 {
 	checkDeseleccionarTodos[0].checked= false;
 	checkSeleccionarTodos[0].checked= false;
 }
 if(checkSeleccionarTodos[0].checked)
 {
 	//seleccionar todo
 	for(i=0;i<checksRegistro.length;i++)
 	{
 		checksRegistro[i].checked=true;
 	}
 }
 else
 {
 	//deseleccionar todo
 	for(i=0;i<checksRegistro.length;i++)
 	{
 		checksRegistro[i].checked=false;
 	}
 }

}


function seleccionarODeseleccionarTodosInTabs()
{
 var checkSeleccionarTodos = document.getElementsByName('seleccionarTodosInTabs');
 var checkDeseleccionarTodos = document.getElementsByName('deseleccionarTodosInTabs');

 var tabSelected = jQuery('#tabs').tabs( "option", "selected" );
 var checks = jQuery('.checkTab'+tabSelected);

  if(checkDeseleccionarTodos[0].checked)
 {
 	checkDeseleccionarTodos[0].checked= false;
 	checkSeleccionarTodos[0].checked= false;
 }
 if(checkSeleccionarTodos[0].checked)
 {
 	//seleccionar todo
 	for(i=0;i<checks.length;i++)
 	{
 		checks[i].checked=true;
 	}
 }
 else
 {
 	//deseleccionar todo
 	for(i=0;i<checks.length;i++)
 	{
 		checks[i].checked=false;
 	}
 }

}

function setRowsEvents()
{
	if(document.getElementById('bandejaEntradaAceptados')!=null)
	{
		var rows = document.getElementById('bandejaEntradaAceptados').rows;

		for(i=1;i<rows.length;i++)
		{
			document.getElementById('bandejaEntradaAceptados').rows[i].style.cursor='pointer';
			document.getElementById('bandejaEntradaAceptados').rows[i].ondblclick=abrirRegistroOInfoIntercambioRegistral;
		}
	}
}
function selectState()
{
 var select = document.getElementById('estadosEntrada');
 for ( var i = 0; i < select.options.length; i++ ) {
        if ( select.options[i].value == estado ) {
            select.options[i].selected = true;
           }
    }
 var selectTipoBandeja = document.getElementById('tipoBandeja');
 for ( var i = 0; i < selectTipoBandeja.options.length; i++ ) {
        if ( selectTipoBandeja.options[i].value == tipoBandeja ) {
            selectTipoBandeja.options[i].selected = true;
        }
    }
}

function aceptarIntercambiosRegistrales()
{

	if(comprobarSiHaySeleccionados())
	{
		aceptar = true;
		var documentacionFisica = document.getElementsByName('documentacionFisica');
		var checksRegistro = document.getElementsByName('checkRegistro');
		var numCheckeados = 0;
		var hayDocRequerida = false;
		var hayDocComplementaria =false;
	 	for(i=0;i<checksRegistro.length;i++)
	 	{
			if(checksRegistro[i].checked==true)
	 		{
	 			numCheckeados=numCheckeados+1;
	 			//Comprobar si alguno de los checkeados tiene documentaci�n requerida.
	 			if(documentacionFisica[i].value=='1')
	 			{
	 				hayDocRequerida = true;
	 			}
	 			else if(documentacionFisica[i].value=='2')
	 			{
	 				hayDocComplementaria = true;
	 			}
	 		}
	 	}

	 	if(hayDocRequerida && numCheckeados>1)
	 	{
	 		//Si se seleccionaron varios, se informa de que al tener documentaci�n f�sica se tiene que hacer de forma individual
	 		alert(top.GetIdsLan("IDS_IR_NO_MULTIPLE_DOC_FISICA"));

	 		return;
	 	}
	 	else if(hayDocRequerida && numCheckeados==1)
	 	{
	 		//Mostramos pantalla para pedir confirmaci�n de si lleg� la documentaci�n f�sica
	 		mostrarConfirmacionDocumentacionFisica();

	 		return;
	 	}
	 	else if(hayDocComplementaria && numCheckeados==1)
	 	{
	 		mostrarBotonContinuarSinRecibirDocumentacion();
	 		mostrarConfirmacionDocumentacionFisica();

	 		return;
	 	}
	 	else
	 	{
	 		//Si todo fu� ok, mostramos los libros para que seleccione d�nde aceptarlo
	 		mostrarLibros();
	 	}

	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function rechazarIntercambiosRegistrales()
{
	if(comprobarSiHaySeleccionados())
	{
	 	mostrarMotivoRechazo();


	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function reenviarIntercambiosRegistrales()
{

	if(comprobarSiHaySeleccionados())
	{
		var documentacionFisica = document.getElementsByName('documentacionFisica');
		var checksRegistro = document.getElementsByName('checkRegistro');
		var numCheckeados = 0;
		var hayDocRequeridaOComplementaria = false;
		aceptar = false;
	 	for(i=0;i<checksRegistro.length;i++)
	 	{

			if(checksRegistro[i].checked==true)
	 		{
	 			numCheckeados = numCheckeados +1;
	 			//Comprobar si alguno de los checkeados tiene documentaci�n requerida o complementaria
	 			if(documentacionFisica[i].value=='1' || documentacionFisica[i].value=='2')
	 			{
	 				hayDocRequeridaOComplementaria = true;

	 			}
	 		}
	 	}


	 	if(hayDocRequeridaOComplementaria && numCheckeados>1)
	 	{
	 		//Si se seleccionaron varios, se informa de que al tener documentaci�n f�sica se tiene que hacer de forma individual
	 		alert(top.GetIdsLan("IDS_IR_NO_MULTIPLE_DOC_FISICA"));
	 		return;
	 	}
	 	else if(hayDocRequeridaOComplementaria && numCheckeados==1)
	 	{
	 		//Mostramos pantalla para pedir confirmaci�n de si lleg� la documentaci�n f�sica
	 		ocultarBotonContinuarSinRecibirDocumentacion();
	 		mostrarConfirmacionDocumentacionFisica();

	 		return;
	 	}
	 	else
	 	{
	 		//Si todo fue ok, mostramos pantalla de reenv�o
	 		mostrarCapaNuevoDestino();

	 	}
	}
	else
	{
		alert(top.GetIdsLan("IDS_IR_NO_HAY_SELECCIONADOS"));
	}

}

function buscarNuevoDestino()
{
	top.g_WndVld = top.Main.Workspace;
//		top.g_FormVld = document.getElementById('formBandejaEntrada');
//		top.g_Field = document.getElementById("nuevoDestino");
//		top.g_VldPath = "top.Main.Workspace" ;
//
//	 				var URL = top.g_URL + "/mainvld.htm?SessionPId=" + top.g_SessionPId
//				+ "&ArchivePId=" + top.g_ArchivePId
//				+ "&FldId=7"
//				+ "&tblvalidated=11"
//				+ "&TblFldId=7"
//				+ "&Idioma=" + top.Idioma.toString()
//				+ "&caseSensitive=CS"
//				+ "&Enabled=0&IsDtrList=0";
//
//		OnHelpWindow = true;
//		OpenVldHlpWnd(URL, 'name', '97%', '97%', 'no');

	strParams = "ArchiveId=" + g_ArchiveId.toString();
	strParams += "&SessionPId=" + g_SessionPId.toString();
	strParams += "&FolderId=" + g_FolderId.toString();
	strParams += "&FolderPId=" + g_FolderPId.toString();
	strParams += "&ArchivePId=" + g_ArchivePId.toString();
	strParams += "&FrmData=false";
	strParams += "&EnviarIR=1";

	window.open(top.g_URL + "/mainvld.htm?" + strParams, "Vld","location=no",true);



	top.g_WndVld.document.getElementById("Vld").style.left = "5px";
	top.g_WndVld.document.getElementById("Vld").style.top  = "5px";
	top.g_WndVld.document.getElementById("Vld").style.height = '97%';
	top.g_WndVld.document.getElementById("Vld").style.width =  '97%';
	top.g_WndVld.document.getElementById("Vld").style.display = "block";
}

function submitReenviarIntercambios()
{
	document.forms[0].action="ReenviarIntercambiosRegistrales.do";
	document.forms[0].submit();
}

function cancelarReenvio()
{
	var buscarNuevoDestino = document.getElementById('buscarNuevoDestino');
	buscarNuevoDestino.style.display='none';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='none';
}

function setDocRecibida(isDocRecibida)
{
	var docRecibida = document.getElementById('docRecibida');
	docRecibida.value=isDocRecibida;
}

function continuarDocRecibida()
{
	ocultarConfirmacionDocumentacionFisica();
	setDocRecibida(true);
	if(aceptar)
	{
		mostrarLibros();
	}
	else
	{
		mostrarCapaNuevoDestino();
	}

}
function continuarDocNoRecibida()
{
	ocultarConfirmacionDocumentacionFisica();

	setDocRecibida(false);
	if(aceptar)
	{
		mostrarLibros();
	}
	else
	{
		mostrarCapaNuevoDestino();
	}

}

function mostrarCapaNuevoDestino(){
	var buscarNuevoDestino = document.getElementById('buscarNuevoDestino');
	buscarNuevoDestino.style.display='block';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='block';
}

function mostrarLibros(event)
{
	var libros = document.getElementById('librosEntrada');
	libros.style.display='block';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='block';

}
function mostrarMotivoRechazo(event)
{
	var motivoRechazo = document.getElementById('divMotivoRechazo');
	motivoRechazo.style.display='block';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='block';

}

function ocultarLibros(event)
{
	var libros = document.getElementById('librosEntrada');
	libros.style.display='none';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='none';
}

function ocultarMotivoRechazo(event)
{
	var motivoRechazo = document.getElementById('divMotivoRechazo');
	motivoRechazo.style.display='none';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='none';
}

function mostrarConfirmacionDocumentacionFisica(event)
{
	var docFisica = document.getElementById('llegoDocumentacionFisica');
	docFisica.style.display='inline';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='block';

}

function ocultarConfirmacionDocumentacionFisica(event)
{
	var docFisica = document.getElementById('llegoDocumentacionFisica');
	docFisica.style.display='none';
	var capaBloqueo = document.getElementById('capaBloqueo');
	capaBloqueo.style.display='none';
}

function mostrarBotonContinuarSinRecibirDocumentacion(event)
{
	var buttonContinuarDocNoRecibida = document.getElementById('buttonContinuarDocNoRecibida');
	buttonContinuarDocNoRecibida.style.display='inline';
}
function ocultarBotonContinuarSinRecibirDocumentacion(event){
	var buttonContinuarDocNoRecibida = document.getElementById('buttonContinuarDocNoRecibida');
	buttonContinuarDocNoRecibida.style.display='none';

}

function mostrarInfoSolicitudIntercambio(idRegistro){

	/*jQuery.blockUI({ message: '<div id="resultInfoSolicitud"></div>',
		css: { top: '10%',
	      	  left: '10%',
		     width: '800px',
		    height: '310px',
		    cursor: 'cursor'}
	  });
	*/
	jQuery("#capaInfoSolicitud").dialog();

	jQuery("#capaInfoSolicitud").load('MostrarIntercambioRegistral.do',{idIntercambio:idRegistro});
}