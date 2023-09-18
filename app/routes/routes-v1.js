module.exports = function (router) {

var version = '/v1';

router.post(version +'/setup', function(req, res) {
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
res.redirect(version +'/setup2')

	});

router.post(version +'/url', function(req, res) {
	{
		res.redirect(version +'/url')
	}
});

}
