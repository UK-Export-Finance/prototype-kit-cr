module.exports = function (router) {

var version = '/v3';

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
			res.redirect(version +'/facility-card-list')
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

//Form values
//PrincipalStartDay PrincipalStartMonth PrincipalStartMonth, principalReferenceInterestRate, -->
//principalBalance, principalPartialInterestPaymentAmount, principalReferenceInterestRateMargin-->

router.post(version +'/2-examination/1--principal-claim-amount/1', function(req, res) {
	{
		req.session.data.principalBalance = parseInt(req.session.data.principalBalance).toFixed(2)
		req.session.data.principalPartialInterestPaymentAmount = parseInt(req.session.data.principalPartialInterestPaymentAmount).toFixed(2)

		//this is from section 1
		req.session.data.insuredAmount = parseInt(req.session.data.insuredAmount).toFixed(2)

		req.session.data.totalPrincipalClaimedAmount = ((req.session.data.principalBalance  /100) * req.session.data.insuredAmount) - req.session.data.partialPaymentAmount
		req.session.data.totalPrincipalClaimedAmount = req.session.data.totalPrincipalClaimedAmount.toFixed(2)
		req.session.data.totalPrincipalClaimedAmountToUseInTotal = req.session.data.totalPrincipalClaimedAmount

		req.session.data.totalPrincipalClaimedAmount = '£'+ req.session.data.totalPrincipalClaimedAmount

		res.redirect(version +'/facility-card-list')
	}
});




router.post(version +'/2-examination/2--contractual-interest-amount/1-days-in-year', function(req, res) {
	{
				req.session.data.interestPeriod = '90';
			res.redirect(version +'/2-examination/2--contractual-interest-amount/1A-interest-start-date')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/1A-interest-start-date', function(req, res) {
	{
			res.redirect(version +'/2-examination/2--contractual-interest-amount/1B-interest-end-date')
	}
});
router.post(version +'/2-examination/2--contractual-interest-amount/1B-interest-end-date', function(req, res) {
	{
			res.redirect(version +'/2-examination/2--contractual-interest-amount/2-interest-period-days')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/2-interest-period-days', function(req, res) {
	{
			res.redirect(version +'/2-examination/2--contractual-interest-amount/3-principal-balance-outstanding')
	}
});
router.post(version +'/2-examination/2--contractual-interest-amount/3-principal-balance-outstanding', function(req, res) {
	{
			res.redirect(version +'/2-examination/2--contractual-interest-amount/4-reference-interest-rate')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/4-reference-interest-rate', function(req, res) {
	{
			res.redirect(version +'/2-examination/2--contractual-interest-amount/5-interest-rate-margin')
	}
});
router.post(version +'/2-examination/2--contractual-interest-amount/5-interest-rate-margin', function(req, res) {
	{
		req.session.data.interestRatetotal = parseInt(req.session.data.referenceInterestRate) + parseInt(req.session.data.interestRateMargin)

			res.redirect(version +'/2-examination/2--contractual-interest-amount/6-partial')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/6-partial', function(req, res) {
	{
		req.session.data.totalContracturalDue = ((req.session.data.principalBalance / req.session.data.daysInAYear) * req.session.data.interestPeriod) * (req.session.data.interestRatetotal/100)
					req.session.data.totalContracturalDue = req.session.data.totalContracturalDue.toFixed(2)
			res.redirect(version +'/2-examination/2--contractual-interest-amount/7-total-contract-interest')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/7-total-contract-interest', function(req, res) {
	{
		//Contractual interest due
		req.session.data.totalAmount = ((req.session.data.principalBalance / req.session.data.daysInAYear) * req.session.data.interestPeriod) * (req.session.data.interestRatetotal/100) - req.session.data.partialInterestPaymentAmount
																		//((Principal balance outstanding / days in the year) * 90 days) * interest total - partial payment
			req.session.data.totalAmount = req.session.data.totalAmount.toFixed(2)

res.redirect(version +'/2-examination/2--contractual-interest-amount/8-overall-total')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/8-overall-total', function(req, res) {
	{
res.redirect(version +'/2-examination/2--contractual-interest-amount/9-check-answers')
	}
});

router.post(version +'/2-examination/2--contractual-interest-amount/9-check-answers', function(req, res) {
	{
res.redirect(version +'/facility-card-list')
	}
});





//2.3 - Principal delay interest
router.post(version +'/2-examination/5--delay-principal-interest/0-interest-name', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/1-interest-start-date')
	}
});

router.post(version +'/2-examination/5--delay-principal-interest/1-interest-start-date', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/2-interest-end-date')
	}
});

router.post(version +'/2-examination/5--delay-principal-interest/2-interest-end-date', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/3-interest-period-days')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/3-interest-period-days', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/4-reference-interest-rate')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/4-reference-interest-rate', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/5-interest-rate-margin')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/5-interest-rate-margin', function(req, res) {
	{
		req.session.data.delayPrincipaltotalAmount = '60'

		if (req.session.data.delayInterstPrincipalStartMonth == '1') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'January'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '2') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'February'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '3') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'March'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '4') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'April'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '5') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'May'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '6') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'June'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '7') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'July'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '8') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'August'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '9') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'September'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '10') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'October'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '11') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'November'
		}
		if (req.session.data.delayInterstPrincipalStartMonth == '12') {
			req.session.data.delayInterstPrincipalStartMonthAsText= 'December'
		}




		if (req.session.data.delayInterstPrincipalEndMonth == '1') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'January'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '2') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'February'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '3') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'March'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '4') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'April'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '5') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'May'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '6') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'June'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '7') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'July'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '8') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'August'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '9') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'September'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '10') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'October'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '11') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'November'
		}
		if (req.session.data.delayInterstPrincipalEndMonth == '12') {
			req.session.data.delayInterstPrincipalEndMonthAsText= 'December'
		}
		req.session.data.delayInterstPrincipalEndDate= req.session.data.delayInterstPrincipalEndDay + ' ' + req.session.data.delayInterstPrincipalEndMonthAsText + ' ' + req.session.data.delayInterstPrincipalEndYear
		req.session.data.delayInterstPrincipalStartDate= req.session.data.delayInterstPrincipalStartDay + ' ' + req.session.data.delayInterstPrincipalStartMonthAsText + ' ' + req.session.data.delayInterstPrincipalStartYear

res.redirect(version +'/2-examination/5--delay-principal-interest/6-check-answers')
	}
});


router.post(version +'/2-examination/5--delay-principal-interest/6-check-answers', function(req, res) {
	{
if (req.session.data.addAnother == 'yes') {
	res.redirect(version +'/2-examination/5--delay-principal-interest/0-interest-name-2')
}
else{
	res.redirect(version +'/facility-card-list')
		}
	}
});




//2.4 - Principal delay interest
router.post(version +'/2-examination/5--delay-principal-interest/0-interest-name-2', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/1-interest-start-date-2')
	}
});

router.post(version +'/2-examination/5--delay-principal-interest/1-interest-start-date-2', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/2-interest-end-date-2')
	}
});

router.post(version +'/2-examination/5--delay-principal-interest/2-interest-end-date-2', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/3-interest-period-days-2')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/3-interest-period-days-2', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/4-reference-interest-rate-2')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/4-reference-interest-rate-2', function(req, res) {
	{
res.redirect(version +'/2-examination/5--delay-principal-interest/5-interest-rate-margin-2')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/5-interest-rate-margin-2', function(req, res) {
	{
		req.session.data.delayPrincipaltotalAmount = '60'
res.redirect(version +'/2-examination/5--delay-principal-interest/6-check-answers-2')
	}
});
router.post(version +'/2-examination/5--delay-principal-interest/6-check-answers-2', function(req, res) {
	{
if (req.session.data.addAnother == 'yes') {
	res.redirect(version +'/2-examination/5--delay-principal-interest/0-interest-name-2')
}
else{
	res.redirect(version +'/facility-card-list')
		}
	}
});




//2.5 - interest on  interest
router.post(version +'/2-examination/6--delay-interest-on-interest/0-interest-name', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/1-interest-start-date')
	}
});

router.post(version +'/2-examination/6--delay-interest-on-interest/1-interest-start-date', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/2-interest-end-date')
	}
});

router.post(version +'/2-examination/6--delay-interest-on-interest/2-interest-end-date', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/3-interest-period-days')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/3-interest-period-days', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/4-reference-interest-rate')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/4-reference-interest-rate', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/5-interest-rate-margin')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/5-interest-rate-margin', function(req, res) {
	{
		req.session.data.delayPrincipaltotalAmount = '960'
		req.session.data.totalClaimAmount =  req.session.data.totalPrincipalClaimedAmountToUseInTotal + req.session.data.totalAmount + req.session.data.delayPrincipaltotalAmount

res.redirect(version +'/2-examination/6--delay-interest-on-interest/6-check-answers')
	}
});


router.post(version +'/2-examination/6--delay-interest-on-interest/6-check-answers', function(req, res) {
	{
if (req.session.data.addAnother == 'yes') {
	res.redirect(version +'/2-examination/6--delay-interest-on-interest/0-interest-name-2')
}
else{
	res.redirect(version +'/facility-card-list')
		}
	}
});



//Question 5 - Principal delay interest
router.post(version +'/2-examination/6--delay-interest-on-interest/0-interest-name-2', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/1-interest-start-date-2')
	}
});

router.post(version +'/2-examination/6--delay-interest-on-interest/1-interest-start-date-2', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/2-interest-end-date-2')
	}
});

router.post(version +'/2-examination/6--delay-interest-on-interest/2-interest-end-date-2', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/3-interest-period-days-2')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/3-interest-period-days-2', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/4-reference-interest-rate-2')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/4-reference-interest-rate-2', function(req, res) {
	{
res.redirect(version +'/2-examination/6--delay-interest-on-interest/5-interest-rate-margin-2')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/5-interest-rate-margin-2', function(req, res) {
	{
		req.session.data.delayPrincipaltotalAmount = '960'
res.redirect(version +'/2-examination/6--delay-interest-on-interest/6-check-answers-2')
	}
});
router.post(version +'/2-examination/6--delay-interest-on-interest/6-check-answers-2', function(req, res) {
	{
if (req.session.data.addAnother == 'yes') {
	res.redirect(version +'/2-examination/6--delay-interest-on-interest/0-interest-name-2')
}
else{
	res.redirect(version +'/facility-card-list')
		}
	}
});

//Section 2.9
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/0-interest-name', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/1-interest-start-date')
	}
});

router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/1-interest-start-date', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/2-interest-end-date')
	}
});

router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/2-interest-end-date', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/3-interest-period-days')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/3-interest-period-days', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/4-reference-interest-rate')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/4-reference-interest-rate', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/5-interest-rate-margin')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/5-interest-rate-margin', function(req, res) {
	{
		//req.session.data.delayPrincipaltotalAmount = '960'
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/6-check-answers')
	}
});


router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/6-check-answers', function(req, res) {
	{
if (req.session.data.addAnother == 'yes') {
	res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/0-interest-name-2')
}
else{
	res.redirect(version +'/facility-card-list')
		}
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/0-interest-name-2', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/1-interest-start-date-2')
	}
});

router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/1-interest-start-date-2', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/2-interest-end-date-2')
	}
});

router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/2-interest-end-date-2', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/3-interest-period-days-2')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/3-interest-period-days-2', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/4-reference-interest-rate-2')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/4-reference-interest-rate-2', function(req, res) {
	{
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/5-interest-rate-margin-2')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/5-interest-rate-margin-2', function(req, res) {
	{
		//req.session.data.delayPrincipaltotalAmount = '960'
res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/6-check-answers-2')
	}
});
router.post(version +'/2-examination/9--delay-interest-on-interest-deferred/6-check-answers-2', function(req, res) {
	{
if (req.session.data.addAnother == 'yes') {
	res.redirect(version +'/2-examination/9--delay-interest-on-interest-deferred/0-interest-name-2')
}
else{
	res.redirect(version +'/facility-card-list')
		}
	}
});




//Section 2.10
router.post(version +'/2-examination/10--other-amounts/add-other-amount', function(req, res) {
	{
	res.redirect(version +'/facility-card-list')
	}
});





}
