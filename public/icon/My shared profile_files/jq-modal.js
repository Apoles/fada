/**
 * JQuery based script to display modal dialogs based on the following DOM:
 *
 *  <a href="#{modalId}" id="toggle-modal-{modalId}" class="toggle-modal">toggle</a>
 *  <div class="modal modal-ux">
 *		<div class="modal-wrapper">
 *			<div class="modal-header">
 *				<span class="close">x</span>
 *			</div>
 *			<div class="modal-content">
 *			</div>
 *			<div class="modal-footer">
 *				<button class="btn btn-primary close">close</button>
 *			</div>
 *		</div>
 *	</div>
 */
$( document ).ready(function() {
	let currentModal;

	$('.toggle-media-modal').each(function () {
		let ctx = $( this );
		let modal = ctx.find('div.modal');
		let btnShow = ctx.find('div.media a.toggle-modal');
		let btnClose =  ctx.find('.close');

		btnShow.click(function (evt) {
			modal.addClass('visible');
			currentModal = modal;
			return false;
		});

		btnClose.click(function (evt) {
			modal.removeClass('visible');
			return false;
		});
	});

	$(window).click(function(evt) {
		if (currentModal && evt.target.id === currentModal.attr('id')) {
			currentModal.removeClass('visible');
			currentModal = null;
		}
	});
});