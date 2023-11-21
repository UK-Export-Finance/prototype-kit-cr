module.exports = function (router) {

var version = '/v5';

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

			res.redirect(version +'/claims-dashboard-claim')
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
router.post(version +'/1-pre-examination/upload-claim-form', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});


router.post(version +'/1-pre-examination/notifications', function(req, res) {
	{
			res.redirect(version +'/facility-card-list')
	}
});

router.post(version +'/facility-card-list', function(req, res) {
	{
			if  (req.session.data.save == 'exit') {
				res.redirect(version +'/confirmation-changes-saved')
			}
			else{
				res.redirect(version +'/facility-card-list-2')
			}
		}
});


router.post(version +'/facility-card-list-2', function(req, res) {
	{
			if  (req.session.data.save == 'exit') {
				res.redirect(version +'/confirmation-changes-saved')
			}
			else{
				res.redirect(version +'/facility-card-list-3')
			}
		}
});

router.post(version +'/facility-card-list-3', function(req, res) {
	{
			res.redirect(version +'/confirmation-changes-saved')
	}
});

router.post(version +'/confirmation-changes-saved', function(req, res) {
	{
			res.redirect(version +'/claims-dashboard-claim')
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

			if (req.session.data.CalculatedPrincipalDelayInterestAmountDue ){
				req.session.data.CalculatedPrincipalDelayInterestAmountDue = ((req.session.data.CalculatedPrincipalAmountDue /365) *90) * req.session.data.principalDelayInterestRateTotalToUseInCalc
				req.session.data.CalculatedPrincipalDelayInterestAmountDue  = req.session.data.CalculatedPrincipalDelayInterestAmountDue.toFixed(2)
			}


		res.redirect(version +'/facility-card-list-2')
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


		res.redirect(version +'/facility-card-list-2')
			}
		});


		//2.4 - Principal delay interest on interest
		router.post(version +'/2-examination/9--delay-interest-on-interest-paid/1', function(req, res) {
			{


				//req.session.data.delayPrincipaltotalAmount = '60'

				if (req.session.data.principalDelayInterestOnInterestStartMonth == '1') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'January'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '2') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'February'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '3') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'March'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '4') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'April'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '5') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'May'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '6') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'June'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '7') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'July'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '8') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'August'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '9') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'September'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '10') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'October'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '11') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'November'
				}
				if (req.session.data.principalDelayInterestOnInterestStartMonth == '12') {
					req.session.data.principalDelayInterestOnInterestStartMonthAsText= 'December'
				}



				if (req.session.data.principalDelayInterestOnInterestEndMonth == '1') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'January'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '2') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'February'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '3') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'March'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '4') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'April'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '5') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'May'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '6') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'June'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '7') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'July'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '8') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'August'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '9') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'September'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '10') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'October'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '11') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'November'
				}
				if (req.session.data.principalDelayInterestOnInterestEndMonth == '12') {
					req.session.data.principalDelayInterestOnInterestEndMonthAsText= 'December'
				}

			 req.session.data.principalDelayInterestOnInterestEndDate= req.session.data.principalDelayInterestOnInterestEndDay + ' ' + req.session.data.principalDelayInterestOnInterestEndMonthAsText + ' ' + req.session.data.principalDelayInterestOnInterestEndYear

			 req.session.data.principalDelayInterestOnInterestStartDate= req.session.data.principalDelayInterestOnInterestStartDay + ' ' + req.session.data.principalDelayInterestOnInterestStartMonthAsText + ' ' + req.session.data.principalDelayInterestOnInterestStartYear

			 req.session.data.principalDelayInterestOnInterestDuration = '90'

			 req.session.data.principalDelayInterestOnInterestRateTotal = parseInt(req.session.data.principalDelayInterestOnInterestRate) + parseInt(req.session.data.principalDelayInterestOnInterestRateMargin)

			 req.session.data.principalDelayInterestOnInterestRateTotalToUseInCalc = (req.session.data.principalDelayInterestOnInterestRateTotal /100)

			 req.session.data.CalculatedPrincipalDelayInterestOnInterestAmountDue = ((req.session.data.CalculatedPrincipalAmountDue /365) *90) * req.session.data.principalDelayInterestOnInterestRateTotalToUseInCalc

			 req.session.data.CalculatedPrincipalDelayInterestOnInterestAmountDue  = req.session.data.CalculatedPrincipalDelayInterestOnInterestAmountDue.toFixed(2)

			 req.session.data.totalClaimAmount = parseFloat(req.session.data.CalculatedPrincipalAmountDue) +  parseFloat(req.session.data.CalculatedPrincipalDelayInterestAmountDue) + parseFloat(req.session.data.CalculatedPrincipalDelayInterestOnInterestAmountDue)

			 req.session.data.totalClaimAmount = req.session.data.totalClaimAmount.toFixed(2)


			 // + req.session.data.CalculatedPrincipalDelayInterestAmountDue +  req.session.data.CalculatedPrincipalDelayInterestOnInterestAmountDue
				res.redirect(version +'/facility-card-list-2')
					}
				});

				router.post(version +'/2-examination/10--C-Number/1', function(req, res) {
					{
							res.redirect(version +'/facility-card-list-2')
			}
		});

		router.post(version +'/2-examination/11--Summary/1', function(req, res) {
			{
					res.redirect(version +'/facility-card-list-2')
	}
});

router.post(version +'/add-a-calculation', function(req, res) {
	{
			res.redirect(version +'/facility-card-list-2')
}
});





}
