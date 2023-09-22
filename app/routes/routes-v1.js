module.exports = function (router) {

var version = '/v1';

router.post(version +'/setup', function(req, res) {
	res.redirect(version +'/ukef-tiles')
		});

///////CREATE//////////

	//use fresh posted data or use session data
	//if (req.body['setupCategories'] == 'yes')

	//SET UP PAGE//
//	if (req.session.data.setupCategories == 'yes')
//	{
//		res.redirect(version +'/create/activity-type-select-with-category')
//	}
//	else {
//		res.redirect(version +'/create/activity-name')
//	}

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



}
