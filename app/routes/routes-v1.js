module.exports = function (router) {

var version = '/v1';

router.post(version +'/setup', function(req, res) {
	res.redirect(version +'/ukef-tiles')
		});

router.post(version +'/url', function(req, res) {
	{
		res.redirect(version +'/url')
	}
});

router.post(version +'/ukef-tiles', function(req, res) {
	{
		res.redirect(version +'/facility-search-result')
	}
});

router.post(version +'/facility-search-for-facility', function(req, res) {
	{
		res.redirect(version +'/facility-search-result')
	}
});

router.post(version +'/are-you-sure-create-new-claim', function(req, res) {
	{
		if (req.session.data.cancelClaimCreation =='yes'){

			res.redirect(version +'/facility-card-list')
		}
		else{
			res.redirect(version +'/facility-search-result')
		}
	}
});

/*1-pre-examinsation section*/

router.post(version +'/1-pre-examination/new-or-repeat-claim', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});
router.post(version +'/1-pre-examination/notified-or-expected', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});
router.post(version +'/1-pre-examination/date-of-default', function(req, res) {

	{

		if (req.session.data.defaultMonth == '1') {
			req.session.data.defaultMonthAsText= 'January'
		}
		if (req.session.data.defaultMonth == '2') {
			req.session.data.defaultMonthAsText= 'February'
		}
		if (req.session.data.defaultMonth == '3') {
			req.session.data.defaultMonthAsText= 'March'
		}
		if (req.session.data.defaultMonth == '4') {
			req.session.data.defaultMonthAsText= 'April'
		}
		if (req.session.data.defaultMonth == '5') {
			req.session.data.defaultMonthAsText= 'May'
		}
		if (req.session.data.defaultMonth == '6') {
			req.session.data.defaultMonthAsText= 'June'
		}
		if (req.session.data.defaultMonth == '7') {
			req.session.data.defaultMonthAsText= 'July'
		}
		if (req.session.data.defaultMonth == '8') {
			req.session.data.defaultMonthAsText= 'August'
		}
		if (req.session.data.defaultMonth == '9') {
			req.session.data.defaultMonthAsText= 'September'
		}
		if (req.session.data.defaultMonth == '10') {
			req.session.data.defaultMonthAsText= 'October'
		}
		if (req.session.data.defaultMonth == '11') {
			req.session.data.defaultMonthAsText= 'November'
		}
		if (req.session.data.defaultMonth == '12') {
			req.session.data.defaultMonthAsText= 'December'
		}
		req.session.data.defaultDate = req.session.data.defaultDay +" "+ req.session.data.defaultMonthAsText +" "+ req.session.data.defaultYear

			res.redirect(version +'/facility-card-list')
	}
});

router.post(version +'/1-pre-examination/allocate-examiners', function(req, res) {
	{
			res.redirect(version +'/1-pre-examination/allocate-examiners-secondary')
	}
});
router.post(version +'/1-pre-examination/allocate-examiners-secondary', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});
router.post(version +'/1-pre-examination/allocate-authorisers', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});
}
