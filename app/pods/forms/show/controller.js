import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ["k"],
	k: null,

	actions: {
		setTotal(total, newGift) {
			this.set("newGift.total", total);
			Ember.$(".gift-total-box").removeClass("gift-total-selected");
			Ember.$("#gift-total-" + total).addClass("gift-total-selected");
			Ember.$("#total-other").css("color", "#fff");
		},
		showText() {
			Ember.$("#total-other").val("");
			Ember.$("#total-other").css("color", "black");
			Ember.$(".gift-total-box").removeClass("gift-total-selected");
		},
		showDesignations() {
			Ember.$("#designation-wrapper").css("display", "block");
		},
		designateSelect(newGift) {
			if (Ember.$("#designate-select").val() === "Other") {
				Ember.$("#designation-other").show();
			} else {
				this.set("newGift.designation", Ember.$("#designate-select").val());
			}
		},
		setFrequency(freq, newDonor, updateDonor) {
			if (newDonor) {
				this.set("newDonor.giftFrequency", freq);
			} else if (updateDonor) {
				// Can't set this way because it's a model instance....
				//this.set("donor.giftFrequency", freq);
			}
			Ember.$("#recurring > div").removeClass('frequency-selected');
			Ember.$("#frequency-" + freq).addClass('frequency-selected');
		},
		validateEmail() {
			let email = document.getElementById('donorEmail')
			//let value = document.getElementById('donorEmail').value;
			if (/\S+@\S+\.\S+/.test(email.value)) {
				Ember.$("#donorEmail").removeClass('input-error');
				Ember.$("#donorEmail").addClass('input-success');
				document.getElementById("donorEmailError").innerText = "";
				// check against database...
			} else {
				Ember.$("#donorEmail").addClass('input-error');
				document.getElementById("donorEmailError").innerText = 'Please enter a valid email address';
				email.focus();
			}
		}
	}
});
