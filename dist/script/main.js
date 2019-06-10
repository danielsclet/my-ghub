$(function(){
    $('.csRow').addClass('text-responsive');
	$('.menu-hamburguer').click(function() {
		$('.toggle-hamburguer').toggleClass('active');
		$('.overlay').toggleClass('active-overlay');
		$('body').toggleClass('body-fixed');
	});
	$('.seta-menu').click(function() {
		$('.toggle-hamburguer').removeClass('active');
		$('.overlay').removeClass('active-overlay');
		$('body').removeClass('body-fixed');
	});
	
    /* --------- CHECKBOX DOS FORMULÁRIOS ----------*/
    $('.checkbox-contato input[type="checkbox"]').on('change', function(){
        if ( $(this).is(':checked') ){
            $(this).parents('label').addClass('active');
            $(this).val('Sim');
        } else {
            $(this).parents('label').removeClass('active');
            $(this).val('Não');
        }
    });
    $('.checkbox-contato input[type="checkbox"]').trigger('change');


    /*------------ Select contato recursos humanos --------------*/
    /*
    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    	$('input[type="file"]').remove(); //Bug Safari - removido o campo de anexo
    } else{
	    $('.select-contato').on('change', function(){
	        if($(".select-contato option[value='Recursos Humanos']").is(':selected') || $(".select-contato option[value='Human Resources']").is(':selected')){
	            $('.arquivo_CV').show();  
				$('.arquivo_CV_info').show();   
	        } else{
	            $('.arquivo_CV').hide();
				$('.arquivo_CV_info').hide();
	        }
	    });
	} 
	*/

	/* ------------ MENUs INTERNO ----------------------------------- */
    var width = $(window).width();
    if (width <= 860){
		 $('.menudrop').hide();
		   $('.active-li').click(function(){
				var submenu = $(this).next('.menudrop');
				if ( !submenu.is(':visible') ) {
					submenu.slideDown();
				   $('.submenu').slideDown();
				} else {
					submenu.slideUp();
				}
			});
    }
    /* ---------------- Menu fixed --------------------- */
    var header = $(".header"); 
    var blocoBug = $('.bloco-bug');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 44) {
            header.addClass("header-fixed");
            blocoBug.removeClass('hide').addClass('show');

        } else {
            header.removeClass("header-fixed");
            blocoBug.addClass('hide').removeClass('show');
        }
    });
    
	$('.consulte_especialista--menu, .barraform_enviar.consulte_botao').click(function(){
		if($('.header').hasClass('header-fixed')){
			$('.consulte_especialista--form').slideDown();

			$('html,body').animate({
				scrollTop: 0
			},500);
		} else{
			$('.consulte_especialista--form').slideToggle();
		}
	});


	/* --------------- Galeria WP ------------------- */
	$('.gallery a, .wp-caption a').attr('data-lightbox','roadtrip');
	$( ".wp-caption" ).each(function( index ) {
	  // console.log( index + ": " + $( this ).text() );
	  if ( $(this).width() > 885 ) {
	  $(this).css('width', '100%');
	};
	});
	

	/* --------------- Overlay Contact Form 7 ---------------*/

	document.addEventListener( 'wpcf7invalid', function( event ) {
	    $('.consulte_form .overlay').addClass('active-overlay');
	    $('html').css('overflow-y', 'hidden');

	    $('body, html').animate({
			scrollTop: 0
		},500);

	     setTimeout(function(){
		    $('.overlay').removeClass("active-overlay");
		    $('html').css('overflow-y', 'scroll');
		}, 3100);

	    setTimeout(function(){
		    $('.wpcf7-response-output').fadeOut();
		}, 3100);
	}, false );


	document.addEventListener( 'wpcf7spam', function( event ) {
	    $('.consulte_form .overlay').addClass('active-overlay');
	    $('html').css('overflow-y', 'hidden');

	    $('body, html').animate({
			scrollTop: 0
		},500);

	    setTimeout(function(){
		    $('.overlay').removeClass("active-overlay");
		    $('html').css('overflow-y', 'scroll');
		}, 3100);

	    setTimeout(function(){
		    $('.wpcf7-response-output').fadeOut();
		}, 3000);
	}, false );


	document.addEventListener( 'wpcf7mailfailed', function( event ) {
	    $('.consulte_form .overlay').addClass('active-overlay');
	    $('html').css('overflow-y', 'hidden');

	    $('body, html').animate({
			scrollTop: 0
		},500);

	    setTimeout(function(){
		    $('.overlay').removeClass("active-overlay");
		    $('html').css('overflow-y', 'scroll');
		}, 3100);

	    setTimeout(function(){
		    $('.wpcf7-response-output').fadeOut();
		}, 3000);
	}, false );


	document.addEventListener( 'wpcf7mailsent', function( event ) {
	    $('.consulte_form .overlay').addClass('active-overlay');
	    $('html').css('overflow-y', 'hidden');

	    $('body, html').animate({
			scrollTop: 0
		},500);

	    setTimeout(function(){
		    $('.overlay').removeClass("active-overlay");
		    $('html').css('overflow-y', 'scroll');
		}, 3100);

	    setTimeout(function(){
		    $('.wpcf7-response-output').fadeOut();
		}, 3000);
	}, false );



});

// Youtube iFrame video Responsivo
jQuery(document).ready(function(){
	jQuery('iframe[src*="youtube"]').wrap("<div class='iframe-flexible-container'></div>");
	jQuery('iframe[src*="vimeo"]').wrap("<div class='iframe-flexible-container'></div>");
 });

// Calculadora
function sendToRD(name, email, telefone, empresa, cargo) {
	return true
}

function convertMoney(money) {
	return money.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})
}

function porcentagem(valor) { return valor + '%' }

jQuery(document).ready(function() {
	// Primeiro passo da calculadora, pega dados do usuario e envia a RD
	jQuery('.calculator--first-step').submit(function(event1) {
		// Data
		var data = jQuery(this).serializeArray()

		var name = data[0].value
		var email = data[1].value
		var telefone = data[2].value
		var empresa = data[3].value
		var cargo = data[4].value

		// Abre o segundo passo da calculadora se a conexão com a rd for bem sucedida
		if (sendToRD(name, email, telefone, empresa, cargo)) {
			jQuery('.calculator--first-step').fadeOut(function() {
				jQuery('.calculator--second-step').fadeIn()
			})
		}

		event1.preventDefault()
	})

	// Segundo passo da calculadora, faz o calculo e exibe o resultado no terceiro passo
	jQuery('.calculator--second-step').submit(function(event2) {
		// Data
		var data = jQuery(this).serializeArray()

		// Custo medio padrão
		var valores = data[0].value.split('|')
		var trainee = parseFloat(valores[0])
		var junior = parseFloat(valores[1])
		var pleno = parseFloat(valores[2])
		var senior = parseFloat(valores[3])
		var lideranca = parseFloat(valores[4])

		var porcentagem_total = parseInt(data[1].value)

		// Quantidade de funcionarios
		var qty_trainee = parseInt(data[2].value)
		var qty_junior = parseInt(data[3].value)
		var qty_pleno = parseInt(data[4].value)
		var qty_senior = parseInt(data[5].value)
		var qty_lideranca = parseInt(data[6].value)

		// Custo Anual do Departamento
		var custo_anual = data[8].value

		// Calculos
		var total = 0
		total += qty_trainee * trainee
		total += qty_junior * junior
		total += qty_pleno * pleno
		total += qty_senior * senior
		total += qty_lideranca * lideranca
		total = total * 2
		total = total * 12
		var totalTeorico = total + (total * (porcentagem_total * 0.01))
		var economia_potencial = (custo_anual - totalTeorico > 0) ? (custo_anual - totalTeorico) * 1.1 : custo_anual - totalTeorico 

		// Esconde o segundo passo, seta os valores do terceiro passo e os exibe
		jQuery('.calculator--second-step').fadeOut(function() {
			// Coloca o resultado nos inputs do ultimo passo
			var third_step = jQuery('.calculator--third-step')
			third_step.find('input[name="total_dpt_pessoal"]').val(convertMoney(total))
			third_step.find('input[name="fator_tamanho"]').val(porcentagem(porcentagem_total))
			third_step.find('input[name="custo_teorico"]').val(convertMoney(totalTeorico))
			third_step.find('input[name="economia_potencial_ano"]').val(convertMoney(economia_potencial))
			third_step.find('input[name="economia_potencial_por"]').val(porcentagem(parseInt((economia_potencial / custo_anual) * 100)))

			// Exibe o ultimo passo
			jQuery('.calculator--third-step').fadeIn()
		})
		
		event2.preventDefault()
	})
});