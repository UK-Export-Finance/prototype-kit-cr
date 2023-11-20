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


router.post(version +'/1-pre-examination/1', function(req, res) {

	{

		if (req.session.data.section1DefaultMonth == '1') {
			req.session.data.section1DefaultMonthAsText= 'January'
			req.session.data.section1ClaimDueMonth = '4'
			req.session.data.section1ClaimDueDateMonthAsText= 'April'

		}
		if (req.session.data.section1DefaultMonth == '2') {
			req.session.data.section1DefaultMonthAsText= 'February'
			req.session.data.section1ClaimDueMonth = '5'
			req.session.data.section1ClaimDueDateMonthAsText= 'May'
		}
		if (req.session.data.section1DefaultMonth == '3') {
			req.session.data.section1DefaultMonthAsText= 'March'
			req.session.data.section1ClaimDueMonth = '6'
			req.session.data.section1ClaimDueDateMonthAsText= 'June'
		}
		if (req.session.data.section1DefaultMonth == '4') {
			req.session.data.section1DefaultMonthAsText= 'April'
			req.session.data.section1ClaimDueMonth = '7'
			req.session.data.section1ClaimDueDateMonthAsText= 'July'
		}
		if (req.session.data.section1DefaultMonth == '5') {
			req.session.data.section1DefaultMonthAsText= 'May'
			req.session.data.section1ClaimDueMonth = '8'
			req.session.data.section1ClaimDueDateMonthAsText= 'August'
		}
		if (req.session.data.section1DefaultMonth == '6') {
			req.session.data.section1DefaultMonthAsText= 'June'
			req.session.data.section1ClaimDueMonth = '9'
			req.session.data.section1ClaimDueDateMonthAsText= 'September'
		}
		if (req.session.data.section1DefaultMonth == '7') {
			req.session.data.section1DefaultMonthAsText= 'July'
			req.session.data.section1ClaimDueMonth = '10'
			req.session.data.section1ClaimDueDateMonthAsText= 'October'
		}
		if (req.session.data.section1DefaultMonth == '8') {
			req.session.data.section1DefaultMonthAsText= 'August'
			req.session.data.section1ClaimDueMonth = '11'
			req.session.data.section1ClaimDueDateMonthAsText= 'November'
		}
		if (req.session.data.section1DefaultMonth == '9') {
			req.session.data.section1DefaultMonthAsText= 'September'
			req.session.data.section1ClaimDueMonth = '12'
			req.session.data.section1ClaimDueDateMonthAsText= 'December'
		}
		if (req.session.data.section1DefaultMonth == '10') {
			req.session.data.section1DefaultMonthAsText= 'October'
			req.session.data.section1ClaimDueMonth = '1'
			req.session.data.section1ClaimDueDateMonthAsText= 'January'
		}
		if (req.session.data.section1DefaultMonth == '11') {
			req.session.data.section1DefaultMonthAsText= 'November'
			req.session.data.section1ClaimDueMonth = '2'
			req.session.data.section1ClaimDueDateMonthAsText= 'February'
		}
		if (req.session.data.section1DefaultMonth == '12') {
			req.session.data.section1DefaultMonthAsText= 'December'
			req.session.data.section1ClaimDueMonth = '3'
			req.session.data.section1ClaimDueDateMonthAsText= 'March'
		}

		//Defualt date calc
//		req.session.data.section1ClaimDueMonth = req.session.data.section1DefaultMonth
		req.session.data.section1DefaultDate = req.session.data.section1DefaultDay +" "+ req.session.data.section1DefaultMonthAsText +" "+ req.session.data.section1DefaultYear


		//Claim due calc
		//Set day and year same as date of default day, month and year values
		req.session.data.section1ClaimDueDay = req.session.data.section1DefaultDay
		req.session.data.section1ClaimDueYear = req.session.data.section1DefaultYear

		//lets check claim due month and add a year if its in October-Dec
		if (req.session.data.section1DefaultMonth >= '10'){
			req.session.data.section1ClaimDueYear++
		}
		req.session.data.section1ClaimDueDate = req.session.data.section1ClaimDueDay +" "+ req.session.data.section1ClaimDueDateMonthAsText +" "+ req.session.data.section1ClaimDueYear

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


router.post(version +'/1-pre-examination/notifications', function(req, res) {
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
		//req.session.data.principalBalance = parseInt(req.session.data.principalBalance).toFixed(2)
		//req.session.data.principalPartialInterestPaymentAmount = parseInt(req.session.data.principalPartialInterestPaymentAmount).toFixed(2)

		//this is from section 1
		//req.session.data.insuredAmount = parseInt(req.session.data.insuredAmount).toFixed(2)

		//req.session.data.totalPrincipalClaimedAmount = ((req.session.data.principalBalance  /100) * req.session.data.insuredAmount) - req.session.data.partialPaymentAmount
		//req.session.data.totalPrincipalClaimedAmount = req.session.data.totalPrincipalClaimedAmount.toFixed(2)
		//req.session.data.totalPrincipalClaimedAmountToUseInTotal = req.session.data.totalPrincipalClaimedAmount

		//req.session.data.totalPrincipalClaimedAmount = '£'+ req.session.data.totalPrincipalClaimedAmount


			if (req.session.data.PrincipalMissedInstallMonth == '1') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'January'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '2') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'February'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '3') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'March'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '4') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'April'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '5') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'May'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '6') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'June'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '7') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'July'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '8') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'August'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '9') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'September'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '10') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'October'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '11') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'November'
			}
			if (req.session.data.PrincipalMissedInstallMonth == '12') {
				req.session.data.PrincipalMissedInstallMonthAsText= 'December'
			}

			req.session.data.PrincipalMissedInstallDate = req.session.data.PrincipalMissedInstallDay +" "+ req.session.data.PrincipalMissedInstallMonthAsText +" "+ req.session.data.PrincipalMissedInstallYear


			if (!req.session.data.principalInsuredPercentage){req.session.data.principalInsuredPercentage ='100'}
			req.session.data.CalculatedPrincipalAmountDue= ((req.session.data.principalAmountDue - req.session.data.principalPartialPaymentAmount) /100) * req.session.data.principalInsuredPercentage
			req.session.data.CalculatedPrincipalAmountDue = req.session.data.CalculatedPrincipalAmountDue.toFixed(2)




		res.redirect(version +'/facility-card-list')
	}
});






//2.3 - Principal delay interest
router.post(version +'/2-examination/5--delay-principal-interest/1', function(req, res) {
	{


		//req.session.data.delayPrincipaltotalAmount = '60'

		if (req.session.data.principalDelayInterestStartMonth == '1') {
			req.session.data.principalDelayInterestStartMonthAsText= 'January'
		}
		if (req.session.data.principalDelayInterestStartMonth == '2') {
			req.session.data.principalDelayInterestStartMonthAsText= 'February'
		}
		if (req.session.data.principalDelayInterestStartMonth == '3') {
			req.session.data.principalDelayInterestStartMonthAsText= 'March'
		}
		if (req.session.data.principalDelayInterestStartMonth == '4') {
			req.session.data.principalDelayInterestStartMonthAsText= 'April'
		}
		if (req.session.data.principalDelayInterestStartMonth == '5') {
			req.session.data.principalDelayInterestStartMonthAsText= 'May'
		}
		if (req.session.data.principalDelayInterestStartMonth == '6') {
			req.session.data.principalDelayInterestStartMonthAsText= 'June'
		}
		if (req.session.data.principalDelayInterestStartMonth == '7') {
			req.session.data.principalDelayInterestStartMonthAsText= 'July'
		}
		if (req.session.data.principalDelayInterestStartMonth == '8') {
			req.session.data.principalDelayInterestStartMonthAsText= 'August'
		}
		if (req.session.data.principalDelayInterestStartMonth == '9') {
			req.session.data.principalDelayInterestStartMonthAsText= 'September'
		}
		if (req.session.data.principalDelayInterestStartMonth == '10') {
			req.session.data.principalDelayInterestStartMonthAsText= 'October'
		}
		if (req.session.data.principalDelayInterestStartMonth == '11') {
			req.session.data.principalDelayInterestStartMonthAsText= 'November'
		}
		if (req.session.data.principalDelayInterestStartMonth == '12') {
			req.session.data.principalDelayInterestStartMonthAsText= 'December'
		}



		if (req.session.data.principalDelayInterestEndMonth == '1') {
			req.session.data.principalDelayInterestEndMonthAsText= 'January'
		}
		if (req.session.data.principalDelayInterestEndMonth == '2') {
			req.session.data.principalDelayInterestEndMonthAsText= 'February'
		}
		if (req.session.data.principalDelayInterestEndMonth == '3') {
			req.session.data.principalDelayInterestEndMonthAsText= 'March'
		}
		if (req.session.data.principalDelayInterestEndMonth == '4') {
			req.session.data.principalDelayInterestEndMonthAsText= 'April'
		}
		if (req.session.data.principalDelayInterestEndMonth == '5') {
			req.session.data.principalDelayInterestEndMonthAsText= 'May'
		}
		if (req.session.data.principalDelayInterestEndMonth == '6') {
			req.session.data.principalDelayInterestEndMonthAsText= 'June'
		}
		if (req.session.data.principalDelayInterestEndMonth == '7') {
			req.session.data.principalDelayInterestEndMonthAsText= 'July'
		}
		if (req.session.data.principalDelayInterestEndMonth == '8') {
			req.session.data.principalDelayInterestEndMonthAsText= 'August'
		}
		if (req.session.data.principalDelayInterestEndMonth == '9') {
			req.session.data.principalDelayInterestEndMonthAsText= 'September'
		}
		if (req.session.data.principalDelayInterestEndMonth == '10') {
			req.session.data.principalDelayInterestEndMonthAsText= 'October'
		}
		if (req.session.data.principalDelayInterestEndMonth == '11') {
			req.session.data.principalDelayInterestEndMonthAsText= 'November'
		}
		if (req.session.data.principalDelayInterestEndMonth == '12') {
			req.session.data.principalDelayInterestEndMonthAsText= 'December'
		}

	 req.session.data.principalDelayInterestEndDate= req.session.data.principalDelayInterestEndDay + ' ' + req.session.data.principalDelayInterestEndMonthAsText + ' ' + req.session.data.principalDelayInterestEndYear

	 req.session.data.principalDelayInterestStartDate= req.session.data.principalDelayInterestStartDay + ' ' + req.session.data.principalDelayInterestStartMonthAsText + ' ' + req.session.data.principalDelayInterestStartYear

	 req.session.data.principalDelayInterestDuration = '90'

	 req.session.data.principalDelayInterestRateTotal = parseInt(req.session.data.principalDelayInterestRate) + parseInt(req.session.data.principalDelayInterestRateMargin)

	 req.session.data.principalDelayInterestRateTotalToUseInCalc = (req.session.data.principalDelayInterestRateTotal /100)

	 req.session.data.CalculatedPrincipalDelayInterestAmountDue = ((req.session.data.CalculatedPrincipalAmountDue /365) *90) * req.session.data.principalDelayInterestRateTotalToUseInCalc

	 req.session.data.CalculatedPrincipalDelayInterestAmountDue  = req.session.data.CalculatedPrincipalDelayInterestAmountDue.toFixed(2)


		res.redirect(version +'/facility-card-list')
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
