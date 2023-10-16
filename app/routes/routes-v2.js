module.exports = function (router) {

var version = '/v2';

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

//	if (req.session.data.defaultMonth){
//		req.session.data.defaultMonth=='1'
//	}

	{

		if (req.session.data.defaultMonth == '1') {
			req.session.data.defaultMonthAsText= 'January'
			req.session.data.defaultMonthAsTextDueDate= 'April'

		}
		if (req.session.data.defaultMonth == '2') {
			req.session.data.defaultMonthAsText= 'February'
			req.session.data.defaultMonthAsTextDueDate= 'May'
		}
		if (req.session.data.defaultMonth == '3') {
			req.session.data.defaultMonthAsText= 'March'
			req.session.data.defaultMonthAsTextDueDate= 'June'
		}
		if (req.session.data.defaultMonth == '4') {
			req.session.data.defaultMonthAsText= 'April'
			req.session.data.defaultMonthAsTextDueDate= 'July'
		}
		if (req.session.data.defaultMonth == '5') {
			req.session.data.defaultMonthAsText= 'May'
			req.session.data.defaultMonthAsTextDueDate= 'August'
		}
		if (req.session.data.defaultMonth == '6') {
			req.session.data.defaultMonthAsText= 'June'
			req.session.data.defaultMonthAsTextDueDate= 'September'
		}
		if (req.session.data.defaultMonth == '7') {
			req.session.data.defaultMonthAsText= 'July'
			req.session.data.defaultMonthAsTextDueDate= 'October'
		}
		if (req.session.data.defaultMonth == '8') {
			req.session.data.defaultMonthAsText= 'August'
			req.session.data.defaultMonthAsTextDueDate= 'November'
		}
		if (req.session.data.defaultMonth == '9') {
			req.session.data.defaultMonthAsText= 'September'
			req.session.data.defaultMonthAsTextDueDate= 'December'
		}
		if (req.session.data.defaultMonth == '10') {
			req.session.data.defaultMonthAsText= 'October'
			req.session.data.defaultMonthAsTextDueDate= 'January'
		}
		if (req.session.data.defaultMonth == '11') {
			req.session.data.defaultMonthAsText= 'November'
			req.session.data.defaultMonthAsTextDueDate= 'February'
		}
		if (req.session.data.defaultMonth == '12') {
			req.session.data.defaultMonthAsText= 'December'
			req.session.data.defaultMonthAsTextDueDate= 'March'
		}
		req.session.data.defaultDate = req.session.data.defaultDay +" "+ req.session.data.defaultMonthAsText +" "+ req.session.data.defaultYear

		req.session.data.claimYear = req.session.data.defaultYear
		req.session.data.claimDueDate = req.session.data.defaultDay
		+" "+ req.session.data.defaultMonthAsTextDueDate
		+" "
		if (req.session.data.defaultMonth >= '10'){
			req.session.data.claimYear++
			req.session.data.claimDueDate = req.session.data.claimDueDate + req.session.data.claimYear
		}
		 else{
		req.session.data.claimDueDate = req.session.data.claimDueDate + req.session.data.defaultYear
		}



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
router.post(version +'v1/1-pre-examination/upload-docs', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});

router.post(version +'/1-pre-examination/claim-due-date', function(req, res) {

	{

		if (req.session.data.claimDueDateMonth == '1') {
			req.session.data.claimDueDateMonthAsText= 'January'
		}
		if (req.session.data.claimDueDateMonth == '2') {
			req.session.data.claimDueDateMonthAsText= 'February'
		}
		if (req.session.data.claimDueDateMonth == '3') {
			req.session.data.claimDueDateMonthAsText= 'March'
		}
		if (req.session.data.claimDueDateMonth == '4') {
			req.session.data.claimDueDateMonthAsText= 'April'
		}
		if (req.session.data.claimDueDateMonth == '5') {
			req.session.data.claimDueDateMonthAsText= 'May'
		}
		if (req.session.data.claimDueDateMonth == '6') {
			req.session.data.claimDueDateMonthAsText= 'June'
		}
		if (req.session.data.claimDueDateMonth == '7') {
			req.session.data.claimDueDateMonthAsText= 'July'
		}
		if (req.session.data.claimDueDateMonth == '8') {
			req.session.data.claimDueDateMonthAsText= 'August'
		}
		if (req.session.data.claimDueDateMonth == '9') {
			req.session.data.claimDueDateMonthAsText= 'September'
		}
		if (req.session.data.claimDueDateMonth == '10') {
			req.session.data.claimDueDateMonthAsText= 'October'
		}
		if (req.session.data.claimDueDateMonth == '11') {
			req.session.data.claimDueDateMonthAsText= 'November'
		}
		if (req.session.data.claimDueDateMonth == '12') {
			req.session.data.claimDueDateMonthAsText= 'December'
		}
		req.session.data.claimDueDate = req.session.data.claimDueDateDay +" "+ req.session.data.claimDueDateMonthAsText +" "+ req.session.data.claimDueDateYear

			res.redirect(version +'/facility-card-list')
	}
});

router.post(version +'/1-pre-examination/claim-amount', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});

router.post(version +'/1-pre-examination/notifications', function(req, res) {
	{
			res.redirect(version +'/1-pre-examination/notifications-confirm')
	}
});


router.post(version +'/1-pre-examination/reports', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});

//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation
//Part 2 examinsation

router.post(version +'/2-examination/calculate-principal-claim-amount-1-installment', function(req, res) {
	{
			res.redirect(version +'/2-examination/calculate-principal-claim-amount-2-amount')
	}
});

router.post(version +'/2-examination/calculate-principal-claim-amount-2-amount', function(req, res) {
	{
			res.redirect(version +'/2-examination/calculate-principal-claim-amount-3-partial')
	}
});
router.post(version +'/2-examination/calculate-principal-claim-amount-3-partial', function(req, res) {
	{
			res.redirect(version +'/2-examination/calculate-principal-claim-amount-4-insured-percentage')
	}
});

router.post(version +'/2-examination/calculate-principal-claim-amount-4-insured-percentage', function(req, res) {
	{
		req.session.data.TotalClaimedAmount = '£'+(req.session.data.grossClaimedAmount - req.session.data.partialPaymentAmount) * req.session.data.insuredAmount

			res.redirect(version +'/facility-card-list')
	}

});

router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-1-days-in-year', function(req, res) {
	{
				req.session.data.interestPeriod = '90';
			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-2-interest-period-days')
	}
});
router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-2-interest-period-days', function(req, res) {
	{
			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-3-principal-balance-outstanding')
	}
});
router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-3-principal-balance-outstanding', function(req, res) {
	{
			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-4-reference-interest-rate')
	}
});

router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-4-reference-interest-rate', function(req, res) {
	{
			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-5-interest-rate-margin')
	}
});
router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-5-interest-rate-margin', function(req, res) {
	{
		req.session.data.interestRatetotal = parseInt(req.session.data.referenceInterestRate) + parseInt(req.session.data.interestRateMargin)

			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-6-present-total')
	}
});

router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-6-present-total', function(req, res) {
	{
		req.session.data.interestRatetotal = parseInt(req.session.data.referenceInterestRate) + parseInt(req.session.data.interestRateMargin)

			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-7-partial')
	}
});


router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-7-partial', function(req, res) {
	{
		req.session.data.totalContracturalDue =	Math.round((req.session.data.principalBalance / req.session.data.daysInAYear)  * req.session.data.interestPeriod * req.session.data.interestRatetotal)
//	req.session.data.totalContracturalDue =	(req.session.data.principalBalance / req.session.data.daysInAYear) * req.session.data.interestPeriod * req.session.data.interestRatetotals

			res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-8-total-contract-interest')
	}
});

router.post(version +'/2-examination/calculate-contractual-interest-claim-amount-8-total-contract-interest', function(req, res) {
	{
		req.session.data.totalAmount =	Math.round((req.session.data.totalContracturalDue - req.session.data.partialInterestPaymentAmount)  * req.session.data.daysInAYear)
//	req.session.data.totalContracturalDue =	(req.session.data.principalBalance / req.session.data.daysInAYear) * req.session.data.interestPeriod * req.session.data.interestRatetotals

res.redirect(version +'/2-examination/calculate-contractual-interest-claim-amount-9-total')
	}
});


}
